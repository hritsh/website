document.addEventListener("DOMContentLoaded", () => {
	(async function init() {
		let marked;
		try {
			({ marked } = await import("https://cdn.jsdelivr.net/npm/marked@12/lib/marked.esm.js"));
		} catch (e) {
			console.error("Failed to load marked, falling back to plain text:", e);
		}

		const modal = document.getElementById("project-modal");
		if (!modal) return;

		const modalContent = document.getElementById("project-modal-content");
		const modalWindow = document.getElementById("project-modal-window");

		// Simple click handlers
		document.querySelectorAll(".project-wrapper").forEach((wrapper) => {
			wrapper.addEventListener("click", (e) => {
				// Don't open modal if clicking on buttons or links
				if (e.target.closest("a, button")) {
					return;
				}

				const projectData = wrapper.getAttribute("data-project");
				if (projectData) {
					try {
						const project = JSON.parse(projectData);
						openProjectModal(project);
					} catch (error) {
						console.error("Error parsing project data:", error);
					}
				}
			});
		});

		// Read More buttons
		document.querySelectorAll(".info-btn").forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.stopPropagation();
				const projectData = btn.getAttribute("data-project");
				if (projectData) {
					try {
						const project = JSON.parse(projectData);
						openProjectModal(project);
					} catch (error) {
						console.error("Error parsing project data:", error);
					}
				}
			});
		});

		// Close modal handlers
		modalWindow.querySelector(".close")?.addEventListener("click", closeModal);
		document.querySelector("#project-modal .modal-backdrop")?.addEventListener("click", closeModal);
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && modal.style.display === "flex") closeModal();
		});

		async function openProjectModal(project) {
			modalWindow.querySelector(".title").textContent = project.name;
			modalContent.innerHTML = '<div class="loading-spinner">Loading project details...</div>';
			modal.style.display = "flex";
			document.body.classList.add("modal-open");

			try {
				const { username, repo } = parseRepoUrl(project.url);
				const defaultBranch = await getDefaultBranch(username, repo);

				const markdown = await fetchReadme(username, repo, defaultBranch);
				const html = marked ? renderMarkdown(marked, markdown, { username, repo, defaultBranch }) : escapeHtml(markdown);

				const projectHeader = buildProjectHeader(project);
				modalContent.innerHTML = `
                    <div class="readme-content">
                        ${projectHeader}
                        <div class="separator"></div>
                        ${html}
                    </div>`;
				upgradeGitHubAssetVideos(modalContent);
			} catch (err) {
				console.error(err);
				const projectHeader = buildProjectHeader(project);
				modalContent.innerHTML = `
                    <div class="readme-content">
                        ${projectHeader}
                    </div>`;
			}
		}

		function buildProjectHeader(project) {
			const websiteLink = project.demoUrl
				? `
                <a href="${project.demoUrl}" target="_blank" class="system-btn demo-btn">
                    <img src="/svg/globe.svg" width="16" height="16" alt="" /> Website
                </a>
            `
				: "";

			return `
                <div class="project-header">
                    <div class="project-title-section">
                        <h1>${escapeHtml(project.name)}</h1>
                        <p>${escapeHtml(project.description)}</p>
                    </div>
                    <div class="project-header-buttons">
                        <a href="${project.url}" target="_blank" class="system-btn github-btn">
                            <img src="/svg/github.svg" width="16" height="16" alt="" /> GitHub
                        </a>
                        ${websiteLink}
                    </div>
                </div>
            `;
		}

		function closeModal() {
			modal.style.display = "none";
			document.body.classList.remove("modal-open");
		}

		function parseRepoUrl(url) {
			const clean = url.replace(/\/+$/, "");
			const parts = clean.split("github.com/")[1].split("/");
			return { username: parts[0], repo: parts[1] };
		}

		async function getDefaultBranch(user, repo) {
			try {
				const r = await fetch(`https://api.github.com/repos/${user}/${repo}`);
				if (!r.ok) throw 0;
				const data = await r.json();
				return data.default_branch || "main";
			} catch {
				return "main";
			}
		}

		async function fetchReadme(user, repo, branch) {
			try {
				const res = await fetch(`https://api.github.com/repos/${user}/${repo}/readme`);
				if (res.ok) {
					const j = await res.json();
					if (j && j.content) {
						return decodeBase64(j.content);
					}
				}
			} catch {}

			for (const b of [branch, "main", "master"]) {
				try {
					const raw = await fetch(`https://raw.githubusercontent.com/${user}/${repo}/${b}/README.md`);
					if (raw.ok) return await raw.text();
				} catch {}
			}
			throw new Error("README not found");
		}

		function decodeBase64(b64) {
			try {
				return decodeURIComponent(
					atob(b64)
						.split("")
						.map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
						.join("")
				);
			} catch {
				return atob(b64);
			}
		}

		function renderMarkdown(marked, markdown, ctx) {
			const renderer = new marked.Renderer();

			renderer.image = (href, title, text) => {
				const { url, isVideo } = resolveMedia(href, ctx);
				if (isVideo) {
					return `<video controls muted loop autoplay playsinline>
                        <source src="${url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
				}
				const t = title ? ` title="${escapeHtml(title)}"` : "";
				return `<img src="${url}" alt="${escapeHtml(text || "")}"${t} loading="lazy" />`;
			};

			renderer.hr = () => '<div class="separator"></div>';

			renderer.heading = (text, level) => {
				const tag = "h" + level;
				if (level > 1) {
					return `<${tag}>${text}</${tag}><div class="separator"></div>`;
				}
				return `<${tag}>${text}</${tag}>`;
			};

			renderer.link = (href, title, text) => {
				const t = title ? ` title="${escapeHtml(title)}"` : "";
				return `<a href="${href}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`;
			};

			marked.setOptions({
				renderer,
				gfm: true,
				breaks: true,
				mangle: false,
				headerIds: false,
			});

			let html = marked.parse(markdown);

			html = html.replace(/<img\s+([^>]*?)src=["']([^"']+)["']([^>]*)>/gi, (m, pre, src, post) => {
				const { url, isVideo } = resolveMedia(src, ctx);
				if (isVideo) {
					return `<video controls muted loop autoplay playsinline>
                        <source src="${url}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
				}
				return `<img ${pre}src="${url}"${post}>`;
			});

			return html;
		}

		function resolveMedia(src, { username, repo, defaultBranch }) {
			if (!src) return { url: src, isVideo: false };
			let original = src.trim();

			// Specific video handling for pylera-app
			const specialVideo = "https://github.com/hritsh/pylera-app/assets/65954042/ba667f2c-0fe1-46a9-887c-dfbe372c724b";
			if (original.startsWith(specialVideo)) {
				return { url: specialVideo + ".mp4", isVideo: true };
			}

			// GitHub assets with specific ID pattern - treat as videos unless they have image extensions
			if (original.includes("/assets/") && /\/[a-f0-9-]{36}$/.test(original)) {
				const imageExt = /\.(png|jpe?g|gif|svg|webp|ico)$/i;
				const isImage = imageExt.test(original);
				return { url: original, isVideo: !isImage };
			}

			const videoExt = /\.(mp4|webm|mov)$/i;
			const imageExt = /\.(png|jpe?g|gif|svg|webp|ico)$/i;

			if (!/^https?:\/\//i.test(original) && !original.startsWith("data:")) {
				original = original.replace(/^\.\//, "");
				return {
					url: `https://raw.githubusercontent.com/${username}/${repo}/${defaultBranch}/${original}`,
					isVideo: videoExt.test(original),
				};
			}

			if (original.includes("github.com") && original.includes("/blob/")) {
				const raw = original.replace("github.com", "raw.githubusercontent.com").replace("/blob/", "/");
				return { url: raw, isVideo: videoExt.test(raw) };
			}

			return { url: original, isVideo: videoExt.test(original) };
		}

		function upgradeGitHubAssetVideos(container) {
			container.querySelectorAll("img").forEach((img) => {
				const src = img.getAttribute("src") || "";
				// Check for GitHub assets without explicit extensions or the special pylera video
				if (
					(src.includes("/assets/") && /\/[a-f0-9-]{36}$/.test(src)) ||
					src.startsWith("https://github.com/hritsh/pylera-app/assets/65954042/ba667f2c-0fe1-46a9-887c-dfbe372c724b")
				) {
					const imageExt = /\.(png|jpe?g|gif|svg|webp|ico)$/i;
					if (!imageExt.test(src)) {
						const video = document.createElement("video");
						video.setAttribute("controls", "");
						video.setAttribute("muted", "");
						video.setAttribute("loop", "");
						video.setAttribute("autoplay", "");
						video.setAttribute("playsinline", "");
						const source = document.createElement("source");
						source.src = src;
						source.type = "video/mp4";
						video.appendChild(source);
						img.replaceWith(video);
					}
				}
			});
		}

		function escapeHtml(str) {
			return (str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
		}
	})();
});

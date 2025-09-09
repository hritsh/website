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

		// Get modalProject from the inline script
		const modalProject = window.__MODAL_PROJECT__;

		function openModalBySlug(slug) {
			const allWrappers = document.querySelectorAll("[data-project]");
			for (const wrapper of allWrappers) {
				try {
					const projectData = JSON.parse(wrapper.getAttribute("data-project"));
					if (projectData.name.toLowerCase() === slug.toLowerCase()) {
						openProjectModal(projectData);
						return true;
					}
				} catch {}
			}
			return false;
		}

		function scrollToProjectBySlug(slug) {
			const el = document.getElementById(slug.toLowerCase());
			if (el) {
				el.scrollIntoView({ behavior: "smooth", block: "center" });
			}
		}

		// Handle different URL patterns on page load
		function handleInitialLoad() {
			// 1. If modalProject is set (from /projects/projectname), open modal
			if (modalProject) {
				setTimeout(() => openModalBySlug(modalProject), 100);
			}
			// 2. If hash is present (from /projects#projectname), just scroll to project
			else if (window.location.hash) {
				const hash = window.location.hash.replace("#", "");
				if (hash) {
					setTimeout(() => scrollToProjectBySlug(hash), 100);
				}
			}
		}

		// Listen for hash changes (for /projects#projectname navigation)
		window.addEventListener("hashchange", () => {
			const hash = window.location.hash.replace("#", "");
			if (hash && !modalProject) {
				scrollToProjectBySlug(hash);
			}
		});

		// Handle project wrapper clicks
		document.querySelectorAll(".project-wrapper").forEach((wrapper) => {
			wrapper.addEventListener("click", (e) => {
				// Don't open modal if clicking on buttons or links
				if (e.target.closest("a, button")) return;

				const projectData = wrapper.getAttribute("data-project");
				if (projectData) {
					try {
						const project = JSON.parse(projectData);
						// Update URL to /projects/projectname and open modal
						const newUrl = `/projects/${project.name.toLowerCase()}`;
						window.history.pushState({}, "", newUrl);
						openProjectModal(project);
					} catch (error) {
						console.error("Error parsing project data:", error);
					}
				}
			});
		});

		// Handle "Read More" button clicks
		document.querySelectorAll(".info-btn").forEach((btn) => {
			btn.addEventListener("click", (e) => {
				e.stopPropagation();
				const projectData = btn.getAttribute("data-project");
				if (projectData) {
					try {
						const project = JSON.parse(projectData);
						// Update URL to /projects/projectname and open modal
						const newUrl = `/projects/${project.name.toLowerCase()}`;
						window.history.pushState({}, "", newUrl);
						openProjectModal(project);
					} catch (error) {
						console.error("Error parsing project data:", error);
					}
				}
			});
		});

		// Handle browser back/forward navigation
		window.addEventListener("popstate", () => {
			const pathMatch = window.location.pathname.match(/^\/projects\/([^/]+)$/);
			if (pathMatch) {
				// URL is /projects/projectname - open modal
				openModalBySlug(pathMatch[1]);
			} else if (window.location.hash) {
				// URL has hash - scroll to project
				const hash = window.location.hash.replace("#", "");
				closeModal();
				if (hash) scrollToProjectBySlug(hash);
			} else {
				// Plain /projects - close modal
				closeModal();
			}
		});

		// Close modal handlers
		modalWindow.querySelector(".close")?.addEventListener("click", closeModal);
		document.querySelector("#project-modal .modal-backdrop")?.addEventListener("click", closeModal);
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape" && modal.style.display === "flex") closeModal();
		});

		function closeModal() {
			modal.style.display = "none";
			document.body.classList.remove("modal-open");
			// Navigate back to /projects when closing modal
			if (window.location.pathname !== "/projects") {
				window.history.pushState({}, "", "/projects");
			}
		}

		// Initialize on page load
		handleInitialLoad();

		async function openProjectModal(project) {
			const titleElement = modalWindow.querySelector(".title");
			titleElement.innerHTML = `
                <img src="${project.icon}" class="title-icon" width="16" height="16" alt="" />
                <span>${project.name}</span>
            `;
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
			let techBadges = "";
			if (project.technologies && project.technologies.length) {
				techBadges = `
            <div class="tech-badges">
                ${project.technologies
									.map((tech) => {
										let label = tech;
										let logo = tech;
										const match = tech.match(/^(.*)\((.*)\)$/);
										if (match) {
											label = match[1].trim();
											logo = match[2].trim();
										}
										return `<img src="https://img.shields.io/badge/${encodeURIComponent(
											label
										)}-22223b?style=flat-square&logo=${encodeURIComponent(
											logo
										)}" alt="${label}" class="tech-badge" height="20" style="margin-right:4px;margin-bottom:4px;" />`;
									})
									.join("")}
            </div>
        `;
			}
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
					<div class="project-tech-stack" style="margin: 0.5em 0;">
                    	${techBadges}
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

			// Treat user-attachments assets as images (not videos), use URL as-is
			if (original.startsWith("https://github.com/user-attachments/assets/") && /\/[a-f0-9-]{36}$/.test(original)) {
				return { url: original, isVideo: false };
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
				// Never treat user-attachments as video
				if (src.startsWith("https://github.com/user-attachments/assets/")) {
					return;
				}
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

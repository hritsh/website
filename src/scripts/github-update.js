import { profileData } from "../data/profile";

const updatedEl = document.querySelector(".about [data-last-update]");
const versionEl = document.querySelector(".about [data-version]");
const repo = updatedEl?.dataset.repo || profileData.githubRepo;

fetch(`https://api.github.com/repos/${repo}/commits?per_page=1`)
	.then((r) => r.json())
	.then((data) => {
		if (Array.isArray(data) && data.length > 0) {
			const commitDate = data[0].commit.committer.date;
			const dateObj = new Date(commitDate);
			let hours = dateObj.getHours();
			const minutes = String(dateObj.getMinutes()).padStart(2, "0");
			const ampm = hours >= 12 ? "pm" : "am";
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			const formatted =
				String(dateObj.getMonth() + 1).padStart(2, "0") +
				"/" +
				String(dateObj.getDate()).padStart(2, "0") +
				"/" +
				dateObj.getFullYear() +
				" at " +
				String(hours).padStart(2, "0") +
				":" +
				minutes +
				" " +
				ampm;
			if (updatedEl) updatedEl.textContent = formatted;
			if (versionEl) {
				const year = dateObj.getUTCFullYear();
				const month = String(dateObj.getUTCMonth() + 1).padStart(2, "0");
				versionEl.textContent = `${year}.${month}`;
			}
			return;
		}
		throw new Error("No commit data");
	})
	.catch(() => {
		if (updatedEl) updatedEl.textContent = "Unavailable";
		if (versionEl) versionEl.textContent = "Unavailable";
		console.error("Error fetching GitHub commit data");
	});

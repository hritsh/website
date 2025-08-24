fetch("https://api.github.com/repos/hritsh/website/commits?per_page=1")
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
			document.querySelector(".about [data-last-update]").textContent = formatted;
		}
	})
	.catch(() => {
		document.querySelector(".about [data-last-update]").textContent = "Unavailable";
		console.error("Error fetching GitHub commit data");
	});

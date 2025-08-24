fetch("https://api.github.com/repos/hritsh/website/commits?per_page=1")
	.then((r) => r.json())
	.then((data) => {
		if (Array.isArray(data) && data.length > 0) {
			const commitDate = data[0].commit.committer.date;
			const dateObj = new Date(commitDate);
			const formatted =
				String(dateObj.getMonth() + 1).padStart(2, "0") +
				"/" +
				String(dateObj.getDate()).padStart(2, "0") +
				"/" +
				dateObj.getFullYear() +
				" at " +
				String(dateObj.getHours()).padStart(2, "0") +
				":" +
				String(dateObj.getMinutes()).padStart(2, "0");
			document.querySelector(".about [data-last-update]").textContent = formatted;
		}
	})
	.catch(() => {
		document.querySelector(".about [data-last-update]").textContent = "Unavailable";
	});

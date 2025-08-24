document.addEventListener("DOMContentLoaded", function () {
	fetch("https://www.ballix.net/whatsplaying/now?user=hritish")
		.then((r) => r.json())
		.then((data) => {
			const img = document.getElementById("lastfm-album-img");
			img.src = data.image && data.image.large ? data.image.large : "";
			img.style.display = data.image && data.image.large ? "block" : "none";

			const trackLink = document.getElementById("lastfm-track-link");
			trackLink.href = data.url || "#";
			trackLink.textContent = data.name || "Unknown Track";

			document.getElementById("lastfm-artist").textContent = data.artist || "Unknown Artist";
			document.getElementById("lastfm-album").textContent = data.album || "";

			const np = document.getElementById("lastfm-nowplaying");
			const dateDiv = document.getElementById("lastfm-date");
			if (data.nowplaying === "true" || data.nowplaying === true) {
				np.innerHTML = `<span style="display:inline-block;width:10px;height:10px;background:#0c0;border-radius:50%;margin-right:6px;vertical-align:middle;"></span>Playing now`;
				np.style.display = "inline-block";
				dateDiv.style.display = "none";
			} else {
				np.style.display = "none";
				if (data.date) {
					const ago = getTimeAgo(data.date);
					dateDiv.textContent = ago ? `Played ${ago} ago` : `Played: ${data.date}`;
					dateDiv.style.display = "block";
				} else {
					dateDiv.textContent = "";
					dateDiv.style.display = "none";
				}
			}
		})
		.catch(() => {
			document.getElementById("lastfm-widget").innerHTML = '<div style="color:#c00;">Could not load Last.fm data.</div>';
		});

	function getTimeAgo(dateStr) {
		if (!dateStr) return "";
		const parts = dateStr.match(/^(\d{1,2}) (\w+) (\d{4}), (\d{1,2}):(\d{2})$/);
		if (!parts) return "";
		const [, day, monthStr, year, hour, min] = parts;
		const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		const month = months.indexOf(monthStr);
		if (month === -1) return "";
		const playedDate = new Date(Date.UTC(parseInt(year), month, parseInt(day), parseInt(hour), parseInt(min)));
		const now = new Date();
		const diffMs = now - playedDate;
		if (diffMs < 0) return "";
		const diffMins = Math.floor(diffMs / 60000);
		if (diffMins < 1) return "just now";
		if (diffMins < 60) return `${diffMins} min${diffMins === 1 ? "" : "s"}`;
		const diffHours = Math.floor(diffMins / 60);
		if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"}`;
		const diffDays = Math.floor(diffHours / 24);
		return `${diffDays} day${diffDays === 1 ? "" : "s"}`;
	}
});

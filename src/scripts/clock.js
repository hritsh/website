document.addEventListener("DOMContentLoaded", function () {
	function updateClock() {
		const now = new Date();
		const hh = String(now.getHours()).padStart(2, "0");
		const mm = String(now.getMinutes()).padStart(2, "0");
		document.getElementById("navbar-clock").textContent = `${hh}:${mm}`;
	}
	updateClock();
	setInterval(updateClock, 10000);
});

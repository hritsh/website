document.addEventListener("DOMContentLoaded", function () {
	function updateClock() {
		const now = new Date();
		let hours = now.getHours();
		const minutes = String(now.getMinutes()).padStart(2, "0");
		const ampm = hours >= 12 ? "PM" : "AM";
		hours = hours % 12;
		hours = hours ? hours : 12;
		document.getElementById("navbar-clock").innerHTML = `${hours}:${minutes}<c>${ampm}</c>`;
	}
	updateClock();
	setInterval(updateClock, 10000);
});

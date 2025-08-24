document.addEventListener("DOMContentLoaded", function () {
	function openAboutModal() {
		document.getElementById("about-modal").style.display = "flex";
		document.body.classList.add("modal-open");
	}

	function closeAboutModal() {
		document.getElementById("about-modal").style.display = "none";
		document.body.classList.remove("modal-open");
	}

	document.getElementById("about-info-btn").addEventListener("click", function (e) {
		e.preventDefault();
		openAboutModal();
	});

	document.getElementById("close-about-modal").addEventListener("click", function () {
		closeAboutModal();
	});

	document.querySelector("#about-modal .modal-backdrop").addEventListener("click", function () {
		closeAboutModal();
	});

	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape") closeAboutModal();
	});
});

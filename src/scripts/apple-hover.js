document.addEventListener("DOMContentLoaded", function () {
	const appleImg = document.querySelector(".home-icon img");
	const appleLi = appleImg?.closest('li[role="menuitem"]');
	if (appleImg && appleLi) {
		appleLi.addEventListener("mouseenter", () => {
			appleImg.classList.add("hover-apple");
		});
		appleLi.addEventListener("mouseleave", () => {
			appleImg.classList.remove("hover-apple");
		});
	}
});

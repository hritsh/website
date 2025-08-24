document.addEventListener("DOMContentLoaded", function () {
	const appleObj = document.querySelector(".home-icon");
	const appleLi = appleObj?.closest('li[role="menu-item"]');
	if (appleObj && appleLi) {
		appleLi.addEventListener("mouseenter", () => {
			appleObj.classList.add("hover-apple");
		});
		appleLi.addEventListener("mouseleave", () => {
			appleObj.classList.remove("hover-apple");
		});
	}
});

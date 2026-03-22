const navButtons = document.querySelectorAll(".nav-btn");

navButtons.forEach(navButton => {
    navButton.addEventListener("mouseenter", () => {
        navButton.classList.add("glowy");
    });

    navButton.addEventListener("mouseleave", () => {
        navButton.classList.remove("glowy");
    });
});
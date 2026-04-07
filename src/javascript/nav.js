const navButtons = document.querySelectorAll(".nav-btn");

const toggle = document.querySelector(".menu-toggle");
const header = document.querySelector("header");
const navbar = document.querySelector(".navbar");

navButtons.forEach(navButton => {
    navButton.addEventListener("mouseenter", () => {
        navButton.classList.add("glowy");
    });

    navButton.addEventListener("mouseleave", () => {
        navButton.classList.remove("glowy");
    });
});

toggle.addEventListener("click", () => {
    toggle.classList.toggle("open");
    navbar.classList.toggle("open");
    console.log("yes")
});


toggle.addEventListener("mouseenter", () => {
    toggle.classList.add("glowy");
});

toggle.addEventListener("mouseleave", () => {
    toggle.classList.remove("glowy");
});

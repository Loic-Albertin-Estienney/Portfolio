function setTheme(theme) {
    document.body.classList.remove("theme-blue", "theme-green");

    if (theme !== "default") {
        document.body.classList.add(theme);
    }

    localStorage.setItem("theme", theme);
}

window.addEventListener("DOMContentLoaded", () => {

    const saved = localStorage.getItem("theme");
    if (saved && saved !== "default") {
        document.body.classList.add(saved);
    }
});



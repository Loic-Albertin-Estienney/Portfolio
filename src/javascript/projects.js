const projectButtons = document.querySelectorAll(".collapsible");

projectButtons.forEach(projectButton => {
    projectButton.addEventListener("click", () => {
        const content = projectButton.nextElementSibling;

        projectButton.classList.toggle("active");
        content.classList.toggle("open");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});


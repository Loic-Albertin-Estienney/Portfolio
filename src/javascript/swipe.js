const screen = document.querySelector(".welcome-screen");

let startY = 0;
let currentY = 0;
let isDragging = false;

alert("Welcom on my portfolio!!!");

function start(e) {
    isDragging = true;
    startY = e.clientY;
}

function move(e) {
    if (!isDragging) return;

    currentY = e.clientY;
    let delta = startY - currentY;

    if (delta > 0) {
        screen.style.transform = `translateY(-${delta}px)`;
    }
}


function end() {
    if (!isDragging) return;
    isDragging = false;

    let moved = startY - currentY;

    if (moved > 120) {
        setTimeout(() => {
            window.location.href = "home.html";
        }, 200);

    } else {
        screen.style.transition = "transform 0.3s ease";
        screen.style.transform = "translateY(0)";
    }
}

window.addEventListener("mousedown", start);
window.addEventListener("mousemove", move);
window.addEventListener("mouseup", end);

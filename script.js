document.addEventListener("DOMContentLoaded", function () {
    const musicPlayer = document.getElementById("music-player");
    const playBtn = document.getElementById("play-btn");
    const pauseBtn = document.getElementById("pause-btn");
    const progress = document.getElementById("progress");

    playBtn.addEventListener("click", function () {
        musicPlayer.play();
    });

    pauseBtn.addEventListener("click", function () {
        musicPlayer.pause();
    });

    musicPlayer.addEventListener("timeupdate", function () {
        progress.value = (musicPlayer.currentTime / musicPlayer.duration) * 100;
    });

    // Smooth scrolling animation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Logo hover animation
    const logo = document.querySelector(".logo");
    logo.addEventListener("mouseenter", function () {
        logo.style.transform = "rotate(10deg) scale(1.1)";
    });
    logo.addEventListener("mouseleave", function () {
        logo.style.transform = "rotate(0) scale(1)";
    });

    // Button hover animations
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });
        button.addEventListener("mouseleave", () => {
            button.style.transform = "scale(1)";
        });
    });
});

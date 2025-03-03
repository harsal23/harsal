document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Music Player
    const audio = new Audio("https://open.spotify.com/artist/6U2uiDjkl2MtPIWWP5ZsVk");
    const playButton = document.getElementById("playButton");
    const pauseButton = document.getElementById("pauseButton");
    
    playButton.addEventListener("click", () => {
        audio.play();
    });
    pauseButton.addEventListener("click", () => {
        audio.pause();
    });

    // Scroll Animation
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".animate").forEach(element => {
        observer.observe(element);
    });

    // Navbar Animation
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Dynamic Background Effect
    document.body.addEventListener("mousemove", function (e) {
        document.body.style.backgroundPositionX = -e.clientX / 20 + "px";
        document.body.style.backgroundPositionY = -e.clientY / 20 + "px";
    });
});

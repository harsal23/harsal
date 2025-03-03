document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll(".social-links a");
    
    socialLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)";
            this.style.boxShadow = "0px 0px 20px rgba(255, 140, 0, 0.9)";
        });
        
        link.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });
    
    const musicPlayer = document.getElementById("music-player");
    
    if (musicPlayer) {
        musicPlayer.innerHTML = `<iframe 
            src="https://open.spotify.com/embed/artist/6U2uiDjkl2MtPIWWP5ZsVk" 
            width="100%" height="380" frameborder="0" 
            allowtransparency="true" allow="encrypted-media"></iframe>`;
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});

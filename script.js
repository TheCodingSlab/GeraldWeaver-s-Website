// Existing smooth scroll code...

// Fade-in on scroll for #about
window.addEventListener('scroll', () => {
    const about = document.getElementById('about');
    const rect = about.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        about.style.opacity = 1;
    }
});

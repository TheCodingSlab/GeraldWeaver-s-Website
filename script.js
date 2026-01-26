// --- INTERSECTION OBSERVER (Scroll Animations) ---
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

// Apply fade-in to all cards on load
document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(card);
});


// --- TYPEWRITER EFFECT (Hero Title) ---
const text = "Gerald Weaver";
const titleElement = document.querySelector('.hero h1');
let i = 0;

// Clear text initially for effect
if (titleElement) {
    titleElement.textContent = ""; 
    
    function typeWriter() {
        if (i < text.length) {
            titleElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Add blinking cursor
            titleElement.innerHTML += '<span style="color:var(--accent-primary)">_</span>';
        }
    }
    
    // Start typing after page load
    window.addEventListener('load', typeWriter);
}


// --- ZULU CLOCK FUNCTION ---
function updateTime() {
    const now = new Date();
    // Get time in HH:MM:SS format
    const timeString = now.toISOString().split('T')[1].split('.')[0];
    const clockEl = document.getElementById('zulu-clock');
    
    if(clockEl) {
        clockEl.textContent = `ZULU: ${timeString}Z`;
    }
}

// Update clock every second
setInterval(updateTime, 1000);
updateTime(); // Run immediately on load

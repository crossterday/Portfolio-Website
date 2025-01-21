// --- STAR BACKGROUND --- //
const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize star size
    const size = Math.random() * 3 + 1; // Size between 1px and 4px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Randomize position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Randomize animation duration and delay
    const duration = Math.random() * 80 + 40; // Duration between 40s and 120s
    const delay = Math.random() * 10; // Delay between 0s and 10s
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    starsContainer.appendChild(star);
}

// Create 200 stars for a fuller effect
for (let i = 0; i < 200; i++) {
    createStar();
}

// Active link functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    const slider = document.querySelector('.slider');
    
    // Function to update slider position and width
    function updateSlider(activeLink) {
        if (!activeLink) return;
        
        const linkRect = activeLink.getBoundingClientRect();
        const navRect = activeLink.parentElement.getBoundingClientRect();
        
        slider.style.width = `${linkRect.width}px`;
        slider.style.left = `${linkRect.left - navRect.left}px`;
    }
    
    // Function to update active link based on scroll position
    function updateActiveLink() {
        const fromTop = window.scrollY;
        
        navLinks.forEach(link => {
            const section = document.querySelector(link.hash);
            
            if (
                section.offsetTop <= fromTop + 150 &&
                section.offsetTop + section.offsetHeight > fromTop + 150
            ) {
                navLinks.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
                updateSlider(link);
            }
        });
    }
    
    // Update active link on scroll
    window.addEventListener('scroll', updateActiveLink);
    
    // Update active link when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
            
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
            updateSlider(this);
        });
    });
    
    // Initial update of slider position
    const initialActiveLink = document.querySelector('.nav-link.active');
    if (initialActiveLink) {
        updateSlider(initialActiveLink);
    }
    
    // Update slider position on window resize
    window.addEventListener('resize', () => {
        const activeLink = document.querySelector('.nav-link.active');
        updateSlider(activeLink);
    });
});
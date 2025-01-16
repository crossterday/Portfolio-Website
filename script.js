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

// Create 100 stars
for (let i = 0; i < 100; i++) {
    createStar();
}

// --- SLIDER FUNCTIONALITY --- //
const navLinks = document.querySelectorAll('nav a');
const slider = document.querySelector('.slider');

// Function to update the slider position for the active link
function updateSliderPosition(link) {
    const rect = link.getBoundingClientRect();
    slider.style.width = `${rect.width}px`;
    slider.style.left = `${rect.left}px`;
    slider.style.visibility = 'visible'; // Show the slider when updating position
}

// Set initial slider position based on active link
const activeLink = document.querySelector('nav a.active');
if (activeLink) {
    updateSliderPosition(activeLink);
} else {
    slider.style.visibility = 'hidden'; // Hide slider if no active link
}

// Add click event listeners to update the active link and slider
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked link
        link.classList.add('active');
        // Update the slider position for the active link
        updateSliderPosition(link);
    });
});

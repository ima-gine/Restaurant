const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const signature = document.getElementById('devSignature');
const detailsBox = document.getElementById('devDetails');
const closeButton = document.getElementById('closeDetails');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.getElementById('hero-bg');
    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.about-text, .about-image, .menu-item, .gallery-item').forEach(el => {
    observer.observe(el);
});

document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your reservation! We will contact you shortly to confirm.');
    this.reset();
});
// Variables for scroll detection
let isScrolling;
const scrollDelay = 500; // milliseconds to wait after scrolling stops

// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Add the 'scrolling' class to make the signature bold/opaque
    signature.classList.add('scrolling');

    // Clear our timeout while the user is scrolling
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling stops
    isScrolling = setTimeout(function() {
        // Remove the class when scrolling stops
        signature.classList.remove('scrolling');
    }, scrollDelay);
});

// Toggle details box on signature click
signature.addEventListener('click', function() {
    // Toggle the display of the details box
    if (detailsBox.style.display === 'block') {
        detailsBox.style.display = 'none';
    } else {
        detailsBox.style.display = 'block';
    }
});

// Close details box when the close button is clicked
closeButton.addEventListener('click', function() {
    detailsBox.style.display = 'none';
});

// Optional: Close details box if clicked outside of it
window.addEventListener('click', function(event) {
    if (!signature.contains(event.target) && !detailsBox.contains(event.target)) {
        detailsBox.style.display = 'none';
    }
});
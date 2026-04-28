// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .offer-card, .feature-item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
        let scroll = window.pageYOffset;
        heroImg.style.transform = `translateY(${scroll * 0.1}px)`;
    }
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.3)';
    } else {
        header.style.padding = '1.5rem 0';
        header.style.boxShadow = 'none';
    }
});

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        if (scrollTopBtn) scrollTopBtn.style.display = 'flex';
    } else {
        if (scrollTopBtn) scrollTopBtn.style.display = 'none';
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 46, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 46, 0.95)';
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const service = this.querySelector('select').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !service || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate form submission
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.service-card, .feature-card, .testimonial-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// CTA button click handler
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        // Scroll to contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Hero scroll indicator click
const heroScroll = document.querySelector('.hero-scroll');
if (heroScroll) {
    heroScroll.addEventListener('click', () => {
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            servicesSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(index) {
    // Remove active class from all slides and indicators
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));

    // Add active class to current slide and indicator
    slides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Event listeners for carousel controls
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
}

// Event listeners for indicators
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Auto-play carousel
let carouselInterval = setInterval(nextSlide, 5000);

// Pause auto-play on hover
const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroSection.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });

    heroSection.addEventListener('mouseleave', () => {
        carouselInterval = setInterval(nextSlide, 5000);
    });
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects for social links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.1)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add typing effect to hero title (optional)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect if needed
// const heroTitle = document.querySelector('.hero-title');
// if (heroTitle) {
//     const originalText = heroTitle.textContent;
//     typeWriter(heroTitle, originalText, 50);
// }

// Navbar hamburger toggle for mobile
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    // Optional: close menu when link clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
});

// Destinations Carousel Functionality
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.destinations-carousel');
    const cards = document.querySelectorAll('.destination-card');
    const leftArrow = document.querySelector('.carousel-arrow.left');
    const rightArrow = document.querySelector('.carousel-arrow.right');
    const dotsContainer = document.querySelector('.carousel-dots');

    // Calculate number of visible cards
    function getVisibleCards() {
        if (window.innerWidth < 600) return 1;
        if (window.innerWidth < 900) return 2;
        return 3;
    }

    // Create dots
    let totalSlides = cards.length;
    let visibleCards = getVisibleCards();
    let currentSlide = 0;

    function updateDots() {
        dotsContainer.innerHTML = '';
        let dotCount = totalSlides - visibleCards + 1;
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('carousel-dot');
            if (i === currentSlide) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }

    function goToSlide(idx) {
        currentSlide = idx;
        const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap || 16);
        carousel.scrollTo({
            left: cardWidth * idx,
            behavior: 'smooth'
        });
        updateDots();
    }

    leftArrow.addEventListener('click', () => {
        if (currentSlide > 0) goToSlide(currentSlide - 1);
    });
    rightArrow.addEventListener('click', () => {
        if (currentSlide < totalSlides - visibleCards) goToSlide(currentSlide + 1);
    });

    carousel.addEventListener('scroll', () => {
        const cardWidth = cards[0].offsetWidth + parseInt(getComputedStyle(carousel).gap || 16);
        currentSlide = Math.round(carousel.scrollLeft / cardWidth);
        updateDots();
    });

    window.addEventListener('resize', () => {
        visibleCards = getVisibleCards();
        updateDots();
    });

    // Touch swipe for mobile
    let startX = 0;
    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    carousel.addEventListener('touchend', (e) => {
        let endX = e.changedTouches[0].clientX;
        if (endX < startX - 30 && currentSlide < totalSlides - visibleCards) {
            goToSlide(currentSlide + 1);
        } else if (endX > startX + 30 && currentSlide > 0) {
            goToSlide(currentSlide - 1);
        }
    });

    // Initial setup
    setTimeout(() => {
        visibleCards = getVisibleCards();
        updateDots();
        goToSlide(0);
    }, 100);
});


// Contact form submission handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for contacting Winkey! We will get back to you soon.');
        contactForm.reset();
    });
}

// Buy License button click effect
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const product = btn.getAttribute('data-product') || btn.closest('.product-card').querySelector('h4').textContent;
        window.location.href = `product.html?product=${encodeURIComponent(product)}`;
    });
});

// Hamburger menu toggle for mobile
const navToggle = document.querySelector('.nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', !expanded);
        if (mobileMenu.hasAttribute('hidden')) {
            mobileMenu.removeAttribute('hidden');
            mobileMenu.setAttribute('aria-hidden', 'false');
        } else {
            mobileMenu.setAttribute('hidden', '');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    });
    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.setAttribute('hidden', '');
            mobileMenu.setAttribute('aria-hidden', 'true');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
    // Close menu on outside click
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.setAttribute('hidden', '');
            mobileMenu.setAttribute('aria-hidden', 'true');
            navToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Scroll animation for elements
function scrollReveal() {
    const revealEls = document.querySelectorAll('.scroll-reveal');
    const observer = new window.IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    revealEls.forEach(el => observer.observe(el));
}
window.addEventListener('DOMContentLoaded', scrollReveal);

// Toggle Connect Us tab
const connectUsTab = document.getElementById('connectUsTab');
if (connectUsTab) {
    connectUsTab.addEventListener('click', (e) => {
        // If already expanded and the text/link is clicked, scroll to contact
        if (connectUsTab.classList.contains('expanded')) {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
            // Collapse after scroll
            setTimeout(() => {
                connectUsTab.classList.remove('expanded');
                connectUsTab.classList.add('collapsed');
                connectUsTab.setAttribute('aria-expanded', 'false');
            }, 500);
            return;
        }
        e.stopPropagation();
        const expanded = connectUsTab.classList.toggle('expanded');
        connectUsTab.classList.toggle('collapsed', !expanded);
        connectUsTab.setAttribute('aria-expanded', expanded);
    });
    document.addEventListener('click', (e) => {
        if (!connectUsTab.contains(e.target)) {
            connectUsTab.classList.remove('expanded');
            connectUsTab.classList.add('collapsed');
            connectUsTab.setAttribute('aria-expanded', 'false');
        }
    });
} 
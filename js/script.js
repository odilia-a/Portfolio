// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Form Validation (Contact Page)
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            document.getElementById('formStatus').textContent = 'Message sent successfully!';
            form.reset();
        } else {
            document.getElementById('formStatus').textContent = 'Please fill all fields.';
        }
    });
}

// Toggle Details (Projects Page)
function toggleDetails(btn) {
    const details = btn.nextElementSibling;
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

// Scroll Animation (General)
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.card');
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
        } else {
            el.style.opacity = 0;
            el.style.transform = 'translateY(20px)';
        }
    });
});

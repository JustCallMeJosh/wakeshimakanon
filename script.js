window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.remove('wish-loading');
    }, 500);
});

const reveals = document.querySelectorAll('[data-reveal]');
const revealOnScroll = () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.95) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    document.body.style.backgroundPosition = `center ${scrollY * 0.3}px`;
});

document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 40,
                behavior: 'smooth'
            });
        }
    });
});

function copyEmail() {
    const email = "jescalada@addu.edu.ph";
    const btn = document.getElementById('copy-btn');
    
    navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "Address Copied!";
        btn.classList.add('copied');
        
        setTimeout(() => {
            btn.innerText = originalText;
            btn.classList.remove('copied');
        }, 2000);
    });
}

// Ensure the side-nav works for the new contact section
document.querySelectorAll('.side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

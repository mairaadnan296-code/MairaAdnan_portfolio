// Mobile Navigation Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Active Navbar Link Highlighting on Scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').includes(current)) {
            item.classList.add('active');
        }

    });
});



// Show Source Code Modal
async function showCode(event, rawUrl, title) {
    event.preventDefault();
    const modal = document.getElementById('codeModal');
    const codeBox = document.getElementById('codeModalText');
    const modalTitle = document.getElementById('codeModalTitle');

    modalTitle.textContent = title;
    codeBox.textContent = 'Loading...';
    modal.classList.add('active');

    try {
        const res = await fetch(rawUrl);
        const text = await res.text();
        codeBox.textContent = text;
    } catch (err) {
        codeBox.textContent = 'Code load nahi ho paaya. Dekho: ' + rawUrl;
    }

}

function closeCodeModal() {
    document.getElementById('codeModal').classList.remove('active');
}

document.getElementById('codeModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'codeModal') closeCodeModal();
});

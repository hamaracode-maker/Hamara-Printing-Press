AOS.init({ once: true, duration: 900, easing: 'ease-out-cubic', offset: 80 });

// Responsive Hamburger Menu
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const mobileLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.className = 'fa-solid fa-xmark';
    } else {
        icon.className = 'fa-solid fa-bars';
    }
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'fa-solid fa-bars';
    });
});

// Highlight current page's nav link (each page sets data-page on <body>)
const currentPage = document.body.getAttribute('data-page');
document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-page') === currentPage) {
        link.classList.add('active');
    }
});

// WhatsApp Chat Widget Toggle
const waLauncher = document.getElementById('waLauncher');
const waChatBox = document.getElementById('waChatBox');
const waChatClose = document.getElementById('waChatClose');
const waNotifyDot = waLauncher.querySelector('.wa-notify-dot');

waLauncher.addEventListener('click', () => {
    waChatBox.classList.toggle('open');
    if (waNotifyDot) waNotifyDot.style.display = 'none';
});

waChatClose.addEventListener('click', () => {
    waChatBox.classList.remove('open');
});

// Side Next-Page Button - permanent, smooth fade transition on click
const nextPageBtn = document.getElementById('nextPageBtn');
if (nextPageBtn) {
    nextPageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const targetUrl = nextPageBtn.getAttribute('href');
        document.body.classList.add('page-fade-out');
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 350);
    });
}

// Nav scroll-hint arrows - navigate to that link's page (same as clicking the link)
document.querySelectorAll('.nav-scroll-hint').forEach(hint => {
    hint.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const li = hint.closest('li');
        const link = li ? li.querySelector('.nav-link') : null;
        if (link) {
            window.location.href = link.getAttribute('href');
        }
    });
});

// Scan QR Button (Contact page) - appears after user scrolls down a bit
const scanLauncher = document.getElementById('scanLauncher');
if (scanLauncher) {
    const checkScanVisibility = () => {
        if (window.scrollY > 200) {
            scanLauncher.classList.add('visible');
        } else {
            scanLauncher.classList.remove('visible');
        }
    };
    window.addEventListener('scroll', checkScanVisibility);
    checkScanVisibility();
}
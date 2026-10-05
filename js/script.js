// Fungsi Loading Screen (Preloader) & Animasi Masuk Futuristik
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.classList.add('loaded');
        // Memicu animasi muncul futuristik setelah loading selesai
        document.body.classList.add('loaded-anim');
    }, 500);
});

// Fitur Mode Gelap dan Terang (Dark/Light Mode)
const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeIcon = document.getElementById('themeIcon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark' && themeIcon) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
}

if (themeToggleBtn && themeIcon) {
    themeToggleBtn.addEventListener('click', function() {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        }
    });
}

// Fitur Interaktif Tombol Ganti Bahasa
const langBtn = document.getElementById('langBtn');
const langContent = document.getElementById('langContent');

if (langBtn && langContent) {
    langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        langContent.classList.toggle('show');
    });

    window.addEventListener('click', function() {
        if (langContent.classList.contains('show')) {
            langContent.classList.remove('show');
        }
    });
}

// Fitur Navbar Mobile Toggle (Responsif untuk HP/Tablet)
const mobileMenuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('navMenu');
const toggleIcon = document.getElementById('toggleIcon');

if (mobileMenuToggle && navMenu && toggleIcon) {
    mobileMenuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navMenu.classList.toggle('active-menu');
        
        if (navMenu.classList.contains('active-menu')) {
            toggleIcon.classList.remove('fa-bars');
            toggleIcon.classList.add('fa-xmark');
        } else {
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });

    window.addEventListener('click', function() {
        if (navMenu.classList.contains('active-menu')) {
            navMenu.classList.remove('active-menu');
            toggleIcon.classList.remove('fa-xmark');
            toggleIcon.classList.add('fa-bars');
        }
    });
}
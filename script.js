window.onscroll = function() {
    const navbar = document.querySelector("#navbar");

    // Jika halaman di-scroll lebih dari 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

const navOpen = document.querySelector("#navbarOpen");
const navClose = document.querySelector("#navbarClose");
const navMenu = document.querySelector(".menu");

navOpen.onclick = () => {
  navMenu.classList.add('buka');
};

navClose.onclick = () => {
  navMenu.classList.remove('buka');
};

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Loading screen dengan transisi
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000); // 1000ms = 1 detik
});



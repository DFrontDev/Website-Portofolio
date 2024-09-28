window.onscroll = function() {
    const navbar = document.querySelector("#navbar");

    // Jika halaman di-scroll lebih dari 50px
    if (window.scrollY > 120) {
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




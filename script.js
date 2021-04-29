const header = document.querySelector("header");
const menuToggler = document.querySelector(".toggle");
const menuNavigation = document.querySelector(".menu");
const navigationElements = document.querySelectorAll(".menu li");

toggleStickyHeader = () => {
    header.classList.toggle("sticky", window.scrollY > 0);
};

toggleMenu = () => {
    menuToggler.classList.toggle("active");
    menuNavigation.classList.toggle("active");
};

window.addEventListener("scroll", toggleStickyHeader);
menuToggler.addEventListener("click", toggleMenu);
navigationElements.forEach((element) => {
    element.addEventListener("click", toggleMenu);
});

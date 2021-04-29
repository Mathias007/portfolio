const header = document.querySelector("header");

handleStickyHeader = () => {
    header.classList.toggle("sticky", window.scrollY > 0);
};

window.addEventListener("scroll", handleStickyHeader);

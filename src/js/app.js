const navbarCloseBtn = document.querySelector(".close__navbar");
const navbarOpenBtn = document.querySelector(".open__navbar");
const responsiveNavbarMenu = document.querySelector(".nav-responsive-menu");

navbarOpenBtn.addEventListener("click", () => {
  translateNavbar(0);
});

navbarCloseBtn.addEventListener("click", () => {
  translateNavbar(100);
});

const translateNavbar = (size) => {
  responsiveNavbarMenu.style.transform = `translateX(${size}%)`;
};

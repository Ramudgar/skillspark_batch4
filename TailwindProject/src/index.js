document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("hidden");
  });
});

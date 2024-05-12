const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  setTimeout(() => {
    menu.classList.toggle("hidden");
    menuBtn.classList.toggle("open");
  }, 100);
});

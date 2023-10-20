const menu_bar = document.querySelector(".bar");
const menu_close = document.querySelector(".close");
const menu = document.querySelector("#mMenu");
const ul = document.querySelector("#menus");

menu_bar.addEventListener("click", () => {
  menu_bar.classList.add("hide");
  menu_close.classList.remove("hide");
  ul.classList.add("transform_md");
});
menu_close.addEventListener("click", () => {
    menu_close.classList.add("hide");
  menu_bar.classList.remove("hide");
  ul.classList.remove("transform_md");
});

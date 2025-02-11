const barEl = document.querySelector(".bar__icon");
const navMenuEl = document.querySelector(".nav__menu");
const closeEl = document.querySelector(".menu__close");
const serviceEl = document.getElementById("service");
const serviceMenuEl = document.getElementById("service__menu");
const backEl = document.getElementById("back");
const navListEl = document.querySelectorAll(".nav__link");

barEl.addEventListener("click", () => {
  navMenuEl.classList.toggle("show");
  barEl.style.display = "none";
});

closeEl.addEventListener("click", () => {
  navMenuEl.classList.remove("show");
  barEl.style.display = "block";
});

serviceEl.addEventListener("click", () => {
  console.log("service");
  navMenuEl.classList.replace("visible__sidebar", "hidden__sidebar");
  serviceMenuEl.classList.replace("hidden__sidebar", "visible__sidebar");
  navListEl.forEach((link) => {
    console.log(link);
    link.style.display = "none";
  });
});

backEl.addEventListener("click", () => {
  serviceMenuEl.classList.replace("visible__sidebar", "hidden__sidebar");

  navMenuEl.classList.replace("hidden__sidebar", "visible__sidebar");
  navListEl.forEach((link) => {
    console.log(link);
    link.style.display = "flex";
  });
});

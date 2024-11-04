const button = document.querySelector("button");
const menuResponsive = document.querySelector("ul");
const lis = document.querySelectorAll("header ul li");

function handleClickBtn() {
  menuResponsive.classList.toggle("visible");
}

button.addEventListener("click", handleClickBtn);

lis.forEach((li) => {
  li.addEventListener("click", () =>
    menuResponsive.classList.toggle("visible")
  );
});

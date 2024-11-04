const button = document.querySelector("button");
const menuResponsive = document.querySelector("ul");
console.log(menuResponsive);

function handleClickBtn() {
  menuResponsive.classList.toggle("visible");
}

button.addEventListener("click", handleClickBtn);

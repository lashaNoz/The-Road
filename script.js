const container = document.querySelector(".container");
document.querySelector(".navbar-open-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".navbar-close-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#6495ED", "	#7FFFD4", "	#FFA07A", "#F08080", "#AFEEEE"];

let i = 0;

const navLinks = Array.from(document.querySelectorAll(".nav-link")).forEach(
  item => {
    item.style.cssText = `background-color: ${colors[i++]}`;
  }
);

Array.from(document.querySelectorAll(".price-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.add("change");
  };
});

Array.from(document.querySelectorAll(".back-button")).forEach(item => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.remove("change");
  };
});

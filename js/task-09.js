function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnColor = document.querySelector(".change-color");
const text = document.querySelector(".color");
const body = document.querySelector("body");

btnColor.addEventListener("click", () => {
  text.textContent = getRandomHexColor();
  body.style.backgroundColor = getRandomHexColor();
});

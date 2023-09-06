function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const parent = document.querySelector("#boxes");
const addBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const input = document.querySelector("input");
let size = 30;

addBtn.addEventListener("click", () => {
  const number = parseInt(document.querySelector("input").value);
  let markup = "";
  for (let i = 0; i < number; i++) {
    let color = getRandomHexColor();
    markup += `<div style="background-color: ${color}; height: ${size}px; width: ${size}px;"></div>`;
    size = size += 10;
    input.value = "";
  }
  parent.insertAdjacentHTML("beforeend", markup);
});

destroyBtn.addEventListener("click", () => {
  parent.innerHTML = "";
  size = 30;
});

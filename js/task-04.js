let counterValue = 0;
let number = document.querySelector("#value");

const btnDecrement = document.querySelector("[data-action='decrement']");

btnDecrement.addEventListener("click", () => {
  counterValue = counterValue -= 1;
  number.textContent = counterValue;
});

const btnIncrement = document.querySelector("[data-action='increment']");

btnIncrement.addEventListener("click", () => {
  counterValue = counterValue += 1;
  number.textContent = counterValue;
});

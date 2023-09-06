const fontSizeControl = document.querySelector("#font-size-control");
let text = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
  let size = fontSizeControl.value;
  text.style.fontSize = `${size}px`;
});

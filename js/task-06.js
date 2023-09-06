const input = document.querySelector("#validation-input");
const string = input.getAttribute("data-length");

input.addEventListener("blur", () => {
  if (input.value.length === parseInt(string)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});

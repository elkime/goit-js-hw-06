const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Todos los espacios deben ser rellenados");
  }

  const user = {
    UserEmail: email.value,
    UserPassword: password.value,
  };

  console.log(user);
  event.currentTarget.reset();
}

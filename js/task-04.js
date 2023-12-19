const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const elems = evt.target.elements;

  const data = {
    email: elems.email.value.trim(),
    password: elems.password.value.trim(),
  };
  if (data.email === "" || data.password === "") {
    alert("All form fields must be filled in");
  }
  console.log(data);
  form.reset();
}

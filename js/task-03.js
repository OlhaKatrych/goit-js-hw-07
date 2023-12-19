const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", handlerInput);

function handlerInput(evt) {
  const inputTarget = evt.target.value.trim();
  output.textContent = inputTarget === "" ? "Anonymous" : inputTarget;
}

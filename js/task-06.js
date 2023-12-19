const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", handlerCreate);
btnDestroy.addEventListener("click", handlerDestroy);

function handlerCreate() {
  handlerDestroy();

  const amount = Number(input.value);
  if (amount > 0 && amount < 100) {
    for (let i = 0; i < amount; i += 1) {
      let size = 30 + i * 10;
      const div = document.createElement("div");

      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxes.append(div);
      input.value = 0;
    }
  }
}
function handlerDestroy() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", handlerCreate);
btnDestroy.addEventListener("click", handlerDestroy);

let size = 20;

function handlerCreate() {
  const amount = Number(input.value);
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    size += 10;
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    boxes.append(div);
  }

  if (input.value > 100) {
    handlerDestroy();
  }

  input.value = 0;
}

function handlerDestroy() {
  boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

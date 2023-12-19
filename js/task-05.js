const body = document.querySelector("body");
const colorDisplaySpan = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", handlerClick);

function handlerClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorDisplaySpan.textContent = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

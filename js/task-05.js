const backGrColor = document.querySelector(".color");
const btn = document.querySelector(".change-color");

btn.addEventListener("click", handlerClick);

function handlerClick() {
  const body = document.querySelector("body");
  const generateColor = (body.style.backgroundColor = getRandomHexColor());
  backGrColor.textContent = generateColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

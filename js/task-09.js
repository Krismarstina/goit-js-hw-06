function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  spanTextColor: document.querySelector(".color"),
  buttonChangeColor: document.querySelector(".change-color"),
};

refs.buttonChangeColor.addEventListener("click", onClickChangeColor);

function onClickChangeColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
  refs.spanTextColor.textContent = color;
}

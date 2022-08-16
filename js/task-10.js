function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  controls: document.querySelector("#controls"),
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", (event) => {
  const amount = refs.input.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  let virtualBoxes = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    virtualBoxes.appendChild(box);
  }
  refs.boxes.appendChild(virtualBoxes);
}

refs.buttonDestroy.addEventListener("click", () => {
  refs.boxes.innerHTML = "";
});

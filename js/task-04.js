let counterValue = 0;
const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

buttonDecrement.addEventListener('click', onButtonClickDecrease);
buttonIncrement.addEventListener('click', onButtonClickIncrease);

function onButtonClickDecrease() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onButtonClickIncrease() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

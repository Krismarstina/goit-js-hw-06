const input = document.querySelector('#validation-input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  const input = event.currentTarget;
  const inputText = input.value;
  if (inputText.length == input.dataset.length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

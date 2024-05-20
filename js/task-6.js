function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const input = document.querySelector('#controls input');

function createBoxes(amount) {
  if (0 < amount && amount <= 100) {

    destroyBoxes();

    const size = 30;
    const innerHTML = '';
    for (let i = 0; i < amount; i++) {
      innerHTML += `<div style="width: ${((i + 1) * 10) + size}px; height: ${((i + 1) * 10) + size}px; background-color: ${getRandomHexColor()}"></div>`;
    }

    boxes.insertAdjacentHTML('beforeend', innerHTML); 
    
    input.value = '';
  }
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}

const btns = document.querySelectorAll('#controls button');

btns.forEach(button => {
  if (button.hasAttribute('data-destroy')) {
    button.addEventListener('click', e => destroyBoxes());
  }
  else if (button.hasAttribute('data-create')) {
    button.addEventListener('click', e => createBoxes(document.querySelector('#controls input').value));
  }
});

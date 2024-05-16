function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (0 < amount && amount <= 100) {

    destroyBoxes();

    var size = 30;

    for (let i = 0; i < amount; i++) {
      const div = `<div style="width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
      
      size += 10;

      document.querySelector('#boxes').insertAdjacentHTML('beforeend', div);
    }

    document.querySelector('#controls input').value = '';
  }
}

function destroyBoxes() {
  document.querySelector('#boxes').innerHTML = '';
}

const btns = document.querySelectorAll('#controls button');

btns[0].addEventListener('click', e => createBoxes(document.querySelector('#controls input').value));
btns[1].addEventListener('click', e => destroyBoxes());
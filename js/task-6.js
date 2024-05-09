function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (0 < amount && amount < 100) {

    destroyBoxes();

    var size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');

      div.style.width = size + 'px';
      div.style.height = size + 'px';
      size += 10;

      div.style.backgroundColor = getRandomHexColor();

      document.querySelector('#boxes').append(div);
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
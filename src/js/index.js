const people = document.querySelector('.people');

const VALUE_CHANGE = 100;
const MAX_X = 600;
const MAX_Y = 600;
let posX = 0;
let posY = 0;

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowUp') {
    posY -= VALUE_CHANGE;
  }
  if (e.key === 'ArrowDown') {
    posY += VALUE_CHANGE;
  }
  if (e.key === 'ArrowLeft') {
    posX -= VALUE_CHANGE;
  }
  if (e.key === 'ArrowRight') {
    posX += VALUE_CHANGE;
  }

  if (posX >= MAX_X) posX = 500;
  if (posY <= -MAX_Y) posY = -500;

  if (posX <= 0) posX = 0;
  if (posY >= 0) posY = 0;

  people.style.transform = `translate(${posX}px, ${posY}px)`;
});

const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
btnStop.setAttribute('disabled', true);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    body.style.background = getRandomHexColor();
    btnStart.setAttribute('disabled', true);
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStart.removeAttribute('disabled');
  clearInterval(timerId);
});

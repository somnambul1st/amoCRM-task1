const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
  return (seconds) => {
    var timer = setInterval(function () {
      let timer_s = seconds % 60;
      let timer_m = seconds / 60 % 60;
      let timer_h = seconds / 60 / 60 % 60;
      
      if (seconds <= 0) {
          clearInterval(timer);
          timerEl.innerHTML = `Время закончилось!`;
      } else
          timerEl.innerHTML = `${('0' + Math.trunc(timer_h)).slice(-2)}:${('0' + Math.trunc(timer_m)).slice(-2)}:${('0' + timer_s).slice(-2)} - ${Math.trunc(timer_h) > 0 ? `${Math.trunc(timer_h)} час(-ов)` : ''} ${Math.trunc(timer_m) > 0 ? `${Math.trunc(timer_m)} минут(-а)` : ''} ${timer_s} секунд(-а)`;
      --seconds;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);

  animateTimer(seconds);

  inputEl.value = '';
});

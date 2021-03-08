const daysEl = document.getElementById('days');
const hourEl = document.getElementById('hours');
const minEl = document.getElementById('minutes');
const secEl = document.getElementById('seconds');

const birthday = '20 Jun 2021';

function countdown() {
  const hmBday = new Date(birthday);
  const currentDate = new Date();

  const totalSeconds = (hmBday - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);

  const hours = Math.floor(totalSeconds / 3600) % 24;

  const minutes = Math.floor(totalSeconds / 60) % 60;

  const seconds = Math.floor(totalSeconds % 60);

  daysEl.innerHTML = days;
  hourEl.innerHTML = hours;
  minEl.innerHTML = minutes;
  secEl.innerHTML = seconds;
}

//initial call
countdown();

setInterval(countdown, 1000);

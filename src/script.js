// Burger menu
const burger = document.querySelector('.nav-log');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const contentCont = document.querySelector('.content');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navbar.classList.toggle('active');
  contentCont.classList.toggle('active');
  document.body.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  burger.classList.remove('active');
  navMenu.classList.remove('active');
  navbar.classList.remove('active');
  contentCont.classList.remove('active');
  document.body.classList.remove('active');
}));

// Countdown
const countdown = () => {
  const countDate = new Date('January 30, 2024 09:53:00').getTime();
  const now = new Date().getTime();
  const remainingDays = countDate - now;

  // how time works
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // calculate using remainingDays
  const textDay = Math.floor(remainingDays / day);
  const textHour = Math.floor((remainingDays % day) / hour);
  const textMinute = Math.floor((remainingDays % hour) / minute);
  const textSecond = Math.floor((remainingDays % minute) / second);

  document.querySelector('.days').innerText = textDay;
  document.querySelector('.hours').innerText = textHour;
  document.querySelector('.minutes').innerText = textMinute;
  document.querySelector('.seconds').innerText = textSecond;
};

setInterval(countdown, 1000);
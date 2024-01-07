// Burger menu
const burger = document.querySelector('.nav-log');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', () =>{
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  navbar.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  burger.classList.remove('active');
  navMenu.classList.remove('active');
  navbar.classList.remove('active');
}));

// Countdown
const countdown = () => {
  const countDate = new Date('January 30, 2024 09:53:00').getTime();
  const now = new Date().getTime();
  const remainingDays = countDate - now;

};

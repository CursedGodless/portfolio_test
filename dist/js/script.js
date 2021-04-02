const hamburger = document.querySelector('.hamburger'),
menu = document.querySelector('.menu'),
closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const percents = document.querySelectorAll('.skills__percentage-percent'),
  orange = document.querySelectorAll('.skills__percentage-bar_orange');

percents.forEach((item,i) => {
  orange[i].style.width = item.innerHTML;
});
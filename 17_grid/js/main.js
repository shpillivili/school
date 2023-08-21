let burgerBtn = document.querySelectorAll('.header__burger');
let burger = document.querySelector('.burger');
let navMenu = document.querySelector('.header__nav');

burgerBtn.forEach(el => el.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  navMenu.classList.toggle('header__nav--active')
  document.body.classList.toggle('no-scroll');
}));
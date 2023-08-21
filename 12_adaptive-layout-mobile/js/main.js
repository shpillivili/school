let burger = document.querySelectorAll('.header-menu__device');
let navMenu = document.querySelector('.header-menu__nav');


burger.forEach(el => el.addEventListener('click', function() {
    navMenu.classList.toggle('header-menu__nav--active');
}))

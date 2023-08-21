let burger = document.querySelectorAll('.header-menu__device');
let navMenu = document.querySelector('.header-menu__nav');
let searchBtn = document.querySelectorAll('.header-menu__nav-btn');
let form = document.querySelector('.header__container-search');

burger.forEach(el => el.addEventListener('click', function() {
    navMenu.classList.toggle('header-menu__nav--active');
    document.body.classList.toggle('no-scroll');
}));

searchBtn.forEach(el => el.addEventListener('click', function() {
    form.classList.toggle('header__container--active');
}));

// Tabs
let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(el => el.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(el => el.classList.remove('tabs-nav__btn--active'));
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(el => el.classList.remove('tabs-item--active'));
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');

}));

// Accordion

let accordionTrigger = document.querySelectorAll('.accordion__trigger');

accordionTrigger.forEach(el => el.addEventListener('click', function() {
    el.parentNode.classList.toggle('accordion__item--active');
}))
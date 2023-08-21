const swiper = new Swiper('.swiper', {

    slidesPerView: 1,
    loop: true,

    autoplay: {
        delay: 5000,
      },

    // пагинация
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },

    // навигация
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
});
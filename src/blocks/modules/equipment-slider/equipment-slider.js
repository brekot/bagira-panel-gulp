import Swiper from 'swiper/bundle';

if (document.querySelector('.equipment-slider__slider'))
{
    new Swiper('.equipment-slider__slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        navigation: {
            prevEl: '.equipment-slider__str_prev',
            nextEl: '.equipment-slider__str_next',
            disabledClass: 'equipment-slider__str_disabled'
        }
    });
}
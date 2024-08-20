import Swiper from 'swiper/bundle';

if (document.querySelector('.equipment-slider__slider'))
{
    new Swiper('.equipment-slider__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        breakpoints: {
            860: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1250: {
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
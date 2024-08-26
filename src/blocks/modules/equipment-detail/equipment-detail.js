import Swiper from 'swiper/bundle';

if (document.querySelector('.equipment-detail-slider__slider'))
{
    new Swiper('.equipment-detail-slider__slider', {
        slidesPerView: 'auto',
        spaceBetween: 15,
        breakpoints: {
            860: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 2,
            },
            1250: {
                slidesPerView: 3,
            },
        },
        navigation: {
            prevEl: '.equipment-detail-slider__str_prev',
            nextEl: '.equipment-detail-slider__str_next',
            disabledClass: 'equipment-detail-slider__str_disabled'
        }
    });
}
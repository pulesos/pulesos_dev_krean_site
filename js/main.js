import modal from './modules/modal';
import slider from './modules/slider';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    slider('.references__item', '.references__arrow_left', '.references__arrow_right');
    modal();


    /*    
// Slider

    let slideIndex = 1,
    slides = document.querySelectorAll('.references__item'),
    prev = document.querySelector('.references__arrow_left'),
    next = document.querySelector('.references__arrow_right');

    showSlides(slideIndex);

    function showSlides(n) {
        slides.forEach((item) => item.style.display = 'none');
        
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides[slideIndex - 1].style.display = 'block';
    }


    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });

    next.addEventListener('click', function() {
        plusSlides(1);
    });


    // Modal (Contact)

    let more = document.querySelector('.contact__btn'),
        overlay = document.querySelector('#myModal1'),
        modal = document.querySelector('.modal'),
        close = document.querySelector('.modal__close');

    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        modal.style.display = 'block';     
    });
    close.addEventListener('click', function() {
        overlay.style.display = 'none';
    });


    // Modal (Services)
    let servicesBtn = document.querySelector('.middle__btn'),
        overlayServices = document.querySelector('#myModal2'),
        closeServices = document.querySelector('#closeServices'),
        modalServices = document.querySelector('.modal__services');

    servicesBtn.addEventListener('click', function() {
        overlayServices.style.display = 'block';
        modalServices.style.display = 'block';    
    });
    closeServices.addEventListener('click', function() {
        overlayServices.style.display = 'none';
    });

    */

});





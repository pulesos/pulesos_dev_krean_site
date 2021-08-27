let slider = (slideSelector, prevArr, nextArr) => {

    let slideIndex = 1,
        slides = document.querySelectorAll(slideSelector),
        prev = document.querySelector(prevArr),
        next = document.querySelector(nextArr);

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

    showSlides(slideIndex);

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }
    function currenSlide(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener('click', () => {
        plusSlide(-1);
    });
    next.addEventListener('click', () => {
        plusSlide(1);
    });
};

export default slider;

document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const indicators = document.querySelectorAll('.indicator');

    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }

    nextButton.addEventListener('click', showNext);
    prevButton.addEventListener('click', showPrev);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    let autoSlide = setInterval(showNext, 5000);

    document.querySelector('.carousel').addEventListener('mouseenter', () => {
        clearInterval(autoSlide);
    });

    document.querySelector('.carousel').addEventListener('mouseleave', () => {
        autoSlide = setInterval(showNext, 5000);
    });
});

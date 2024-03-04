/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
document.addEventListener('DOMContentLoaded', event => {
  const sliders = document.querySelectorAll('.my-slider');
  sliders.forEach(slider => {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const navDots = Array.from(slider.querySelectorAll('.nav-dot'));
    let currentSlide = 0;
    const goToSlide = index => {
      slides[currentSlide].classList.remove('active');
      navDots[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      navDots[currentSlide].classList.add('active');
    };
    const nextSlide = () => {
      goToSlide((currentSlide + 1) % slides.length);
    };
    navDots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });
    setInterval(nextSlide, 5000); // Cambia el slide cada 5 segundos
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
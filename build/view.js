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
    let lastTimestamp = 0;
    const goToSlide = index => {
      slides[currentSlide].classList.remove('active');
      navDots[currentSlide].classList.remove('active');
      currentSlide = index;
      slides[currentSlide].classList.add('active');
      navDots[currentSlide].classList.add('active');
    };
    const nextSlide = timestamp => {
      if (!lastTimestamp || timestamp - lastTimestamp >= 5000) {
        goToSlide((currentSlide + 1) % slides.length);
        lastTimestamp = timestamp;
      }
      requestAnimationFrame(nextSlide);
    };
    navDots.forEach((dot, index) => {
      dot.addEventListener('click', () => goToSlide(index));
    });
    requestAnimationFrame(nextSlide);
  });
});
/******/ })()
;
//# sourceMappingURL=view.js.map
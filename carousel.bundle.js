(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["carousel"],{

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ (() => {

const carouselTrack = document.querySelector('.carousel-track');
const slides = Array.from(carouselTrack.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

// Width of the slide depending on the width of the browser
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides one after another
const setSlidePosition = (slide, index) => {
  // eslint-disable-next-line no-param-reassign
  slide.style.left = `${slideWidth * index}px`;
};
slides.forEach(setSlidePosition);

// Function for moving the slides on click of arrows or nav dots
const moveToSlide = (track, currentSlide, targetSlide) => {
  // eslint-disable-next-line no-param-reassign
  track.style.transform = `translate(-${targetSlide.style.left})`;
  // Update active current slide
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Function for updating the dots
const updateDots = (currentDot, targetDot) => {
// Update the indicator shading so user can see which slide they are on
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
};

// eslint-disable-next-line no-shadow
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('isHidden');
    nextButton.classList.remove('isHidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('isHidden');
    nextButton.classList.add('isHidden');
  } else {
    prevButton.classList.remove('isHidden');
    nextButton.classList.remove('isHidden');
  }
};

// On left button click, move slides to the left
prevButton.addEventListener('click', () => {
  // Get the current slide
  const currentSlide = carouselTrack.querySelector('.current-slide');
  // Find the next slide
  const prevSlide = currentSlide.previousElementSibling;
  // Move to targeted slide
  moveToSlide(carouselTrack, currentSlide, prevSlide);
  // Update the dots
  const currentDot = dotsNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  updateDots(currentDot, prevDot);
  // Update the arros
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// On right button click, move slides to the right
nextButton.addEventListener('click', () => {
  // Get the current slide
  const currentSlide = carouselTrack.querySelector('.current-slide');
  // Find the next slide
  const nextSlide = currentSlide.nextElementSibling;
  // Move to targeted slide
  moveToSlide(carouselTrack, currentSlide, nextSlide);
  // Update the dots
  const currentDot = dotsNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  updateDots(currentDot, nextDot);
  // Update the arros
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// When nav bubble button is clicked, move to that slide
dotsNav.addEventListener('click', (e) => {
  // Determine which indicator was clicked
  const targetDot = e.target.closest('button');
  // If clicked in container but not a button, don't update UI
  if (!targetDot) return;
  // Get and save element of current slide
  const currentSlide = carouselTrack.querySelector('.current-slide');
  // Get and save element of current dot
  const currentDot = dotsNav.querySelector('.current-slide');
  // Get and save index of current dot
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  // Based on dot(index of dot) that was clicked, go to that slide in the carousel
  const targetSlide = slides[targetIndex];
  // Update the slide
  moveToSlide(carouselTrack, currentSlide, targetSlide);
  // Update the dots
  updateDots(currentDot, targetDot);
  // Update the arrows
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/carousel.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qyx1QkFBdUI7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9jYXJvdXNlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJvdXNlbFRyYWNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLXRyYWNrJyk7XG5jb25zdCBzbGlkZXMgPSBBcnJheS5mcm9tKGNhcm91c2VsVHJhY2suY2hpbGRyZW4pO1xuY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1idXR0b24tLXJpZ2h0Jyk7XG5jb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWJ1dHRvbi0tbGVmdCcpO1xuY29uc3QgZG90c05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1uYXYnKTtcbmNvbnN0IGRvdHMgPSBBcnJheS5mcm9tKGRvdHNOYXYuY2hpbGRyZW4pO1xuXG4vLyBXaWR0aCBvZiB0aGUgc2xpZGUgZGVwZW5kaW5nIG9uIHRoZSB3aWR0aCBvZiB0aGUgYnJvd3NlclxuY29uc3Qgc2xpZGVXaWR0aCA9IHNsaWRlc1swXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcblxuLy8gQXJyYW5nZSB0aGUgc2xpZGVzIG9uZSBhZnRlciBhbm90aGVyXG5jb25zdCBzZXRTbGlkZVBvc2l0aW9uID0gKHNsaWRlLCBpbmRleCkgPT4ge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgc2xpZGUuc3R5bGUubGVmdCA9IGAke3NsaWRlV2lkdGggKiBpbmRleH1weGA7XG59O1xuc2xpZGVzLmZvckVhY2goc2V0U2xpZGVQb3NpdGlvbik7XG5cbi8vIEZ1bmN0aW9uIGZvciBtb3ZpbmcgdGhlIHNsaWRlcyBvbiBjbGljayBvZiBhcnJvd3Mgb3IgbmF2IGRvdHNcbmNvbnN0IG1vdmVUb1NsaWRlID0gKHRyYWNrLCBjdXJyZW50U2xpZGUsIHRhcmdldFNsaWRlKSA9PiB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICB0cmFjay5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlKC0ke3RhcmdldFNsaWRlLnN0eWxlLmxlZnR9KWA7XG4gIC8vIFVwZGF0ZSBhY3RpdmUgY3VycmVudCBzbGlkZVxuICBjdXJyZW50U2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnY3VycmVudC1zbGlkZScpO1xuICB0YXJnZXRTbGlkZS5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXNsaWRlJyk7XG59O1xuXG4vLyBGdW5jdGlvbiBmb3IgdXBkYXRpbmcgdGhlIGRvdHNcbmNvbnN0IHVwZGF0ZURvdHMgPSAoY3VycmVudERvdCwgdGFyZ2V0RG90KSA9PiB7XG4vLyBVcGRhdGUgdGhlIGluZGljYXRvciBzaGFkaW5nIHNvIHVzZXIgY2FuIHNlZSB3aGljaCBzbGlkZSB0aGV5IGFyZSBvblxuICBjdXJyZW50RG90LmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtc2xpZGUnKTtcbiAgdGFyZ2V0RG90LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtc2xpZGUnKTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbmNvbnN0IGhpZGVTaG93QXJyb3dzID0gKHNsaWRlcywgcHJldkJ1dHRvbiwgbmV4dEJ1dHRvbiwgdGFyZ2V0SW5kZXgpID0+IHtcbiAgaWYgKHRhcmdldEluZGV4ID09PSAwKSB7XG4gICAgcHJldkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpc0hpZGRlbicpO1xuICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXNIaWRkZW4nKTtcbiAgfSBlbHNlIGlmICh0YXJnZXRJbmRleCA9PT0gc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICBwcmV2QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzSGlkZGVuJyk7XG4gICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdpc0hpZGRlbicpO1xuICB9IGVsc2Uge1xuICAgIHByZXZCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaXNIaWRkZW4nKTtcbiAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2lzSGlkZGVuJyk7XG4gIH1cbn07XG5cbi8vIE9uIGxlZnQgYnV0dG9uIGNsaWNrLCBtb3ZlIHNsaWRlcyB0byB0aGUgbGVmdFxucHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gR2V0IHRoZSBjdXJyZW50IHNsaWRlXG4gIGNvbnN0IGN1cnJlbnRTbGlkZSA9IGNhcm91c2VsVHJhY2sucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcbiAgLy8gRmluZCB0aGUgbmV4dCBzbGlkZVxuICBjb25zdCBwcmV2U2xpZGUgPSBjdXJyZW50U2xpZGUucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgLy8gTW92ZSB0byB0YXJnZXRlZCBzbGlkZVxuICBtb3ZlVG9TbGlkZShjYXJvdXNlbFRyYWNrLCBjdXJyZW50U2xpZGUsIHByZXZTbGlkZSk7XG4gIC8vIFVwZGF0ZSB0aGUgZG90c1xuICBjb25zdCBjdXJyZW50RG90ID0gZG90c05hdi5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xuICBjb25zdCBwcmV2RG90ID0gY3VycmVudERvdC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICB1cGRhdGVEb3RzKGN1cnJlbnREb3QsIHByZXZEb3QpO1xuICAvLyBVcGRhdGUgdGhlIGFycm9zXG4gIGNvbnN0IHByZXZJbmRleCA9IHNsaWRlcy5maW5kSW5kZXgoKHNsaWRlKSA9PiBzbGlkZSA9PT0gcHJldlNsaWRlKTtcbiAgaGlkZVNob3dBcnJvd3Moc2xpZGVzLCBwcmV2QnV0dG9uLCBuZXh0QnV0dG9uLCBwcmV2SW5kZXgpO1xufSk7XG5cbi8vIE9uIHJpZ2h0IGJ1dHRvbiBjbGljaywgbW92ZSBzbGlkZXMgdG8gdGhlIHJpZ2h0XG5uZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAvLyBHZXQgdGhlIGN1cnJlbnQgc2xpZGVcbiAgY29uc3QgY3VycmVudFNsaWRlID0gY2Fyb3VzZWxUcmFjay5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xuICAvLyBGaW5kIHRoZSBuZXh0IHNsaWRlXG4gIGNvbnN0IG5leHRTbGlkZSA9IGN1cnJlbnRTbGlkZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIC8vIE1vdmUgdG8gdGFyZ2V0ZWQgc2xpZGVcbiAgbW92ZVRvU2xpZGUoY2Fyb3VzZWxUcmFjaywgY3VycmVudFNsaWRlLCBuZXh0U2xpZGUpO1xuICAvLyBVcGRhdGUgdGhlIGRvdHNcbiAgY29uc3QgY3VycmVudERvdCA9IGRvdHNOYXYucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtc2xpZGUnKTtcbiAgY29uc3QgbmV4dERvdCA9IGN1cnJlbnREb3QubmV4dEVsZW1lbnRTaWJsaW5nO1xuICB1cGRhdGVEb3RzKGN1cnJlbnREb3QsIG5leHREb3QpO1xuICAvLyBVcGRhdGUgdGhlIGFycm9zXG4gIGNvbnN0IG5leHRJbmRleCA9IHNsaWRlcy5maW5kSW5kZXgoKHNsaWRlKSA9PiBzbGlkZSA9PT0gbmV4dFNsaWRlKTtcbiAgaGlkZVNob3dBcnJvd3Moc2xpZGVzLCBwcmV2QnV0dG9uLCBuZXh0QnV0dG9uLCBuZXh0SW5kZXgpO1xufSk7XG5cbi8vIFdoZW4gbmF2IGJ1YmJsZSBidXR0b24gaXMgY2xpY2tlZCwgbW92ZSB0byB0aGF0IHNsaWRlXG5kb3RzTmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgLy8gRGV0ZXJtaW5lIHdoaWNoIGluZGljYXRvciB3YXMgY2xpY2tlZFxuICBjb25zdCB0YXJnZXREb3QgPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKTtcbiAgLy8gSWYgY2xpY2tlZCBpbiBjb250YWluZXIgYnV0IG5vdCBhIGJ1dHRvbiwgZG9uJ3QgdXBkYXRlIFVJXG4gIGlmICghdGFyZ2V0RG90KSByZXR1cm47XG4gIC8vIEdldCBhbmQgc2F2ZSBlbGVtZW50IG9mIGN1cnJlbnQgc2xpZGVcbiAgY29uc3QgY3VycmVudFNsaWRlID0gY2Fyb3VzZWxUcmFjay5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xuICAvLyBHZXQgYW5kIHNhdmUgZWxlbWVudCBvZiBjdXJyZW50IGRvdFxuICBjb25zdCBjdXJyZW50RG90ID0gZG90c05hdi5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1zbGlkZScpO1xuICAvLyBHZXQgYW5kIHNhdmUgaW5kZXggb2YgY3VycmVudCBkb3RcbiAgY29uc3QgdGFyZ2V0SW5kZXggPSBkb3RzLmZpbmRJbmRleCgoZG90KSA9PiBkb3QgPT09IHRhcmdldERvdCk7XG4gIC8vIEJhc2VkIG9uIGRvdChpbmRleCBvZiBkb3QpIHRoYXQgd2FzIGNsaWNrZWQsIGdvIHRvIHRoYXQgc2xpZGUgaW4gdGhlIGNhcm91c2VsXG4gIGNvbnN0IHRhcmdldFNsaWRlID0gc2xpZGVzW3RhcmdldEluZGV4XTtcbiAgLy8gVXBkYXRlIHRoZSBzbGlkZVxuICBtb3ZlVG9TbGlkZShjYXJvdXNlbFRyYWNrLCBjdXJyZW50U2xpZGUsIHRhcmdldFNsaWRlKTtcbiAgLy8gVXBkYXRlIHRoZSBkb3RzXG4gIHVwZGF0ZURvdHMoY3VycmVudERvdCwgdGFyZ2V0RG90KTtcbiAgLy8gVXBkYXRlIHRoZSBhcnJvd3NcbiAgaGlkZVNob3dBcnJvd3Moc2xpZGVzLCBwcmV2QnV0dG9uLCBuZXh0QnV0dG9uLCB0YXJnZXRJbmRleCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
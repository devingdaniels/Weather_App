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

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const prevButton = document.querySelector('.carousel__container__button--left');
const nextButton = document.querySelector('.carousel__container__button--right');

let slideWidth = slides[0].getBoundingClientRect().width;



const setSlide = (desiredSlide) => {
  const currentSlide = track.querySelector('.current');

  currentSlide.classList.remove('current');
  dotsNav.querySelector('.current').classList.remove('current');

  slides[desiredSlide - 1].classList.add('current');
  dots[desiredSlide - 1].classList.add('current');

  slides.forEach((slide, index) => {
    slide.style.left = (slideWidth * index) - (slideWidth * (desiredSlide - 1)) + 'px';
  });
};

setSlide(1);



const nextSlide = () => {
  const currentSlide = track.querySelector('.current');
  const nextSlide = slides[slides.indexOf(currentSlide) + 1];
  if (nextSlide === undefined) {setSlide(1); return;}
  setSlide(slides.indexOf(nextSlide) + 1);
}



nextButton.addEventListener('click', e => {
  nextSlide();
});



prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current');
  const prevSlide = slides[slides.indexOf(currentSlide) - 1];
  if (prevSlide === undefined) {setSlide(slides.length); return;}
  setSlide(slides.indexOf(prevSlide) + 1);
});



dotsNav.addEventListener('click', e => {
  const targetDot = e.target.closest('button');
  if (!targetDot) return;
  const currentDot = dotsNav.querySelector('.current');
  const currentIndex = dots.indexOf(currentDot);
  const desiredDot = dots.findIndex(dot => dot === targetDot);
  if (currentIndex !== desiredDot) setSlide(desiredDot + 1);
});



const onResize = () => {
  slideWidth = slides[0].getBoundingClientRect().width
  const currentSlide = track.querySelector('.current');
  setSlide(slides.indexOf(currentSlide) + 1);
}
let delay;
window.addEventListener('resize', e => {
  clearTimeout(delay);
  delay = setTimeout(onResize, 100);
});
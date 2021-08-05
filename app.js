let slidePosition = 0;
const slides = document.getElementsByClassName('card');
const totalSlides = slides.length;
const prev = document.querySelector('.prev')
console.log(prev)
const next = document.querySelector('.next')

prev.addEventListener('click',() => {
    prevSlide();
    console.log('prev')
})

next.addEventListener('click',() => {
    nextSlide()
    console.log('next')
})



function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('visible');
    slide.classList.add('hide');
  }

  slides[slidePosition].classList.add('visible');
}

function nextSlide() {
  if (slidePosition == totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function prevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}
let currentIndex = 0;
const slides = document.querySelectorAll('.tm-special-item-slide');

function changeSlide(newIndex) {
  slides[currentIndex].style.opacity = 0;
  slides[currentIndex].style.display = 'none';

  currentIndex = (newIndex + slides.length) % slides.length;

  slides[currentIndex].style.display = 'block';
  slides[currentIndex].style.opacity = 1;
}

function showPreviousSlide() {
  changeSlide(currentIndex - 1);
}

function showNextSlide() {
  changeSlide(currentIndex + 1);
}

document.getElementById('prevBtn').addEventListener('click', showPreviousSlide);
document.getElementById('nextBtn').addEventListener('click', showNextSlide);

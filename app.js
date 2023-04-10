const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let curSlide = 0;

function showSlide(index) {
  slides[curSlide].classList.remove("active"); // hide current side
  curSlide = index;
  slides[curSlide].classList.add("active"); // show new slide
}

prevBtn.addEventListener("click", () => {
  if (curSlide > 0) {
    showSlide(curSlide - 1);
  } else {
    showSlide(slides.length - 1);
  }
});

nextBtn.addEventListener("click", () => {
  if (curSlide !== slides.length - 1) {
    showSlide(curSlide + 1);
  } else {
    showSlide(0);
  }
});

showSlide(curSlide);

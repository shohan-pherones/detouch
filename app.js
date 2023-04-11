const frame = document.querySelector(".frame");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let curSlide = 0;

prevBtn.addEventListener("click", () => {
  if (curSlide === 0) {
    curSlide = 2;
    frame.style.transform = `translateX(-200vw)`;
  } else {
    curSlide--;
    frame.style.transform = `translateX(-${100 * curSlide}vw)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (curSlide === 2) {
    curSlide = 0;
    frame.style.transform = `translateX(0vw)`;
  } else {
    curSlide++;
    frame.style.transform = `translateX(-${100 * curSlide}vw)`;
  }
});

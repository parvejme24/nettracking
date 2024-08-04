// script responsive nav nemu
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("menu-hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");
    });
  });
});

// dark light toggle
const toggle = document.getElementById("toggle");
const dot = document.querySelector(".dot");
const block = document.querySelector(".block");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    dot.classList.add("transform", "translate-x-6");
    block.classList.remove("bg-gray-600");
    block.classList.add("bg-gray-700");
  } else {
    dot.classList.remove("transform", "translate-x-6");
    block.classList.remove("bg-gray-700");
    block.classList.add("bg-gray-600");
  }
});

// for slider
let startX;
let currentTranslate = 0;
let prevTranslate = 0;

const slider = document.querySelector(".testimonial-slider");
const slides = Array.from(document.querySelectorAll(".testimonial-slide"));

slider.addEventListener("touchstart", touchStart);
slider.addEventListener("touchmove", touchMove);
slider.addEventListener("touchend", touchEnd);

function touchStart(event) {
  startX = event.touches[0].clientX;
}

function touchMove(event) {
  const currentX = event.touches[0].clientX;
  const diffX = startX - currentX;

  slider.style.transform = `translateX(${currentTranslate - diffX}px)`;
}

function touchEnd(event) {
  const endX = event.changedTouches[0].clientX;
  const diffX = startX - endX;

  if (diffX > 50) {
    moveToNextSlide();
  } else if (diffX < -50) {
    moveToPrevSlide();
  } else {
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }
}

function moveToNextSlide() {
  const slideWidth = slides[0].clientWidth + 16; // 16 is the space between slides (space-x-4)
  prevTranslate = currentTranslate;
  currentTranslate -= slideWidth;
  currentTranslate = Math.max(
    currentTranslate,
    -slideWidth * (slides.length - 1)
  );
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

function moveToPrevSlide() {
  const slideWidth = slides[0].clientWidth + 16; // 16 is the space between slides (space-x-4)
  prevTranslate = currentTranslate;
  currentTranslate += slideWidth;
  currentTranslate = Math.min(currentTranslate, 0);
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

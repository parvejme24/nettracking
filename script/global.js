// script responsive nav nemu
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("menu-hidden");
});


document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        navLinks.forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
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

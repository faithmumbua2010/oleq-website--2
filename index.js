const viewAllBtn = document.getElementById("view-all-btn");

viewAllBtn.onclick = function () {
  window.location.href = "blog.html";
};

//Initialize Swiper
const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true, // the hand like cursor
  spaceBetween: 25, // space between the slides to not overlap

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // make the dots clickable
    dynamicBullets: true, // the descending-disappering like dots
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next", //the >
    prevEl: ".swiper-button-prev", // the <
  },

  //Responsive breakpoints

  breakpoints: {
    // it is like a min-width in css but a bit different in js such that on screen size:
    0: {
      slidesPerView: 1, // 0-767 show one slide
    },
    768: {
      slidesPerView: 2, // 768-1023 show two slides
    },
    1024: {
      slidesPerView: 3, // 1024+ show 3 slides
    },
  },
});

const openButton = document.getElementById("open-button");
const closeButton = document.getElementById("close-button");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu .nav-link");

openButton.addEventListener("click", () => {
  navMenu.classList.add("active");
  openButton.style.display = "none";
  closeButton.style.display = "flex";
});

closeButton.addEventListener("click", () => {
  navMenu.classList.remove("active");
  closeButton.style.display = "none";
  openButton.style.display = "flex";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    closeButton.style.display = "none";
    openButton.style.display = "flex";
  });
});

const header = document.querySelector("header");
const contactBtn = document.querySelector(".contact-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    contactBtn.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    contactBtn.classList.remove("scrolled");
  }
});

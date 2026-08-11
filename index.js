const viewAllBtn = document.getElementById("view-all-btn");

if (viewAllBtn) {
  viewAllBtn.addEventListener("click", () => {
    window.location.href = "blog.html";
  });
}

const menuToggle = document.querySelector(".open-close-btn");
const header = document.querySelector(".website-header");

if (menuToggle && header) {
  menuToggle.addEventListener("click", () => {
    header.classList.toggle("menu-open");
    const isOpen = header.classList.contains("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".navbar-pill-links a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1024) {
      header.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

//Initialize Swiper
const sliderWrapper = document.querySelector(".slider-wrapper");

if (typeof Swiper !== "undefined" && sliderWrapper) {
  new Swiper(sliderWrapper, {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
}

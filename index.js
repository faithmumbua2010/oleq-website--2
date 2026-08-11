const viewAllBtn = document.getElementById("view-all-btn");

viewAllBtn.onclick = function () {
    window.location.href = "blog.html";
};




//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor:true,// the hand like cursor
  spaceBetween:25,// space between the slides to not overlap

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,  // make the dots clickable
    dynamicBullets:true,// the descending-disappering like dots
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next', //the >
    prevEl: '.swiper-button-prev', // the <
  },

  //Responsive breakpoints

  breakpoints: { // it is like a min-width in css but a bit different in js such that on screen size:
    0:{
        slidesPerView:1// 0-767 show one slide
    },
    768:{
     slidesPerView:2 // 768-1023 show two slides
  },
   1024:{
     slidesPerView:3// 1024+ show 3 slides
  }
}
});
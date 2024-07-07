// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: "auto",
  slidesPerView: 3,
  spaceBetween: 20,
  autoplay: {
    delay: 3000, // 1 second delay
    disableOnInteraction: false, // Keep autoplay running even if the user interacts with the slider
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

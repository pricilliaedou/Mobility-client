//Intersection Observer
const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.animate(
        [
          { transform: "translateX(-100px)", opacity: 0 },
          { transform: "translateX(0)", opacity: 1 },
        ],
        { duration: 500, fill: "forwards" }
      );
      // observer.unobserve(entry.target);
    }
  }
});
observer.observe(document.querySelector("#application"));
observer.observe(document.querySelector("#demo"));
observer.observe(document.querySelector("#techno"));
// observer.disconnect();

//Diapo
let swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

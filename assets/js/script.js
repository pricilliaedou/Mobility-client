//Intersection Observer
(() => {
  const targets = document.querySelectorAll("#application, #demo, #techno");
  if (!targets.length) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  if (reduceMotion) {
    targets.forEach((el) => el.classList.add("visible"));
    return;
  }
  const showRatio = 0.35;
  const hideWhenNotIntersecting = true;

  const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          if (entry.intersectionRatio >= showRatio) {
            entry.target.classList.add("visible");
          }
        } else if (hideWhenNotIntersecting) {
          entry.target.classList.remove("visible");
        }
    },
    {
      root: null,
      rootMargin: "-10px 0px -10% 0px",
      threshold: thresholds,
    }
  );

  targets.forEach((t) => observer.observe(t));
})();

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

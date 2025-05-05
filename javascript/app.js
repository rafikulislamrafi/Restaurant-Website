AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  delay: 300, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them
});
// Initialize AOS
AOS.refresh();
// Initialize GSAP
gsap.from('.navbarContainer', {
  y: '-50',
  duration: 0.8,
  opacity: 0,
  ease: 'power2.inOut',
  stagger: 1,
});

window.addEventListener('wheel', function (dets) {
  if (dets.deltaY > 0) {
    gsap.to('.marque', {
      duration: 6,
      x: '-200%',
      ease: 'none',
      repeat: -1,
    });
  }else {
    gsap.to('.marque', {
      duration: 6,
      x: '0%',
      ease: 'none',
      repeat: -1,
    });
  }
});

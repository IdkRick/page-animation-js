const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector("#logo");
const hamburger = document.querySelector(".hamburger");
const headline = document.querySelector(".headline");
const container = document.querySelector("#container");
const navMenu = document.querySelectorAll(".nav-menu .nav-item");

const tlm = new TimelineMax();
const tl = new TimelineLite({ paused: true, reversed: true });

tlm.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
   .fromTo(
      hero,
      1.2,
      { width: "100%" },
      { width: "80%", ease: Power2.easeInOut }
   )
   .fromTo(
      slider,
      1.2,
      { x: "-100%" },
      { x: "0%", ease: Power2.easeInOut },
      "-=1.2"
   )
   .fromTo(logo, 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 30 }, "-=0.5")
   .fromTo(hamburger, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5")
   .fromTo(headline, 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 30 }, "-=0.5");

//navMenu
tl.fromTo(
   container,
   1,
   { width: "100%" },
   { width: "85%", ease: Power2.easeInOut }
).fromTo(
   navMenu,
   0.3,
   {
      opacity: 0,
      x: 100,
      ease: Power2.easeInOut
   },
   {
      opacity: 1,
      x: 0,
      pointerEvents: "auto"
   },
   "-=0.3"
);

hamburger.addEventListener("click", () => {
   toggleTween(tl);
});

function toggleTween(tween) {
   tween.reversed() ? tween.play() : tween.reverse();
}

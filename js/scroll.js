scroll();

function scroll() {
  ScrollReveal().reveal(".box1", {
    reset: false,
    duration: 1000,
    easing: "ease-out",
    interval: 100,
    opacity: 0,
    origin: "top",
    distance: "100px",
  });

  ScrollReveal().reveal(".box2", {
    reset: true,
    distance: "100px",
    duration: 1000,
    easing: "ease-out",
    interval: 100,
    opacity: 0,
    origin: "bottom",

    afterReveal: function () {
      ScrollReveal().clean(".box2");
    },
  });

  ScrollReveal().reveal(".box_b21", {
    reset: false,
    distance: "100px",
    duration: 1000,
    easing: "ease-out",
    interval: 100,
    opacity: 0,
    origin: "bottom",
  });
}

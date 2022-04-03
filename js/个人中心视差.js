const banner = document.querySelector(".banner");

var transtion;

banner.addEventListener("mouseenter", (e) => {
  transtion = e.clientX;
  banner.classList.add("moving");
});

banner.addEventListener("mouseout", (e) => {
  banner.classList.remove("moving");
  banner.style.setProperty("--percentage", 0.5);
});

banner.addEventListener("mousemove", (e) => {
  let percentage = (e.clientX - transtion) / 1200 + 0.5;

  banner.style.setProperty("--percentage", percentage);
});

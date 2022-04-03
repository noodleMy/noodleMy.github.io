const bugger = document.querySelector(".bugger");
var nav = document.querySelector(".nav2");
const nav_ul = document.querySelector(".na");
var nav_lis = document.querySelectorAll(".na li");

bugger.addEventListener("click", function () {
  bugger.classList.toggle("active");

  nav_ul.classList.toggle("open");

  nav_lis.forEach(function (item, index) {
    if (item.style.animation) {
      item.style.animation = "";
    } else {
      item.style.animation = `0.3s ease-in anm forwards ${index * 0.1 + 0.3}s`;
    }
  });
});

window.onscroll = function () {
  var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;

  if (scrolltop == 0) {
    nav.style.backgroundColor = "rgba(0,0,0,0.6)";
  } else {
    nav.style.backgroundColor = "rgba(255,255,255,0)";
  }
};

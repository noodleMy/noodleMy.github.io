var pic = document.querySelectorAll(".box21 .img img");
var html = document.querySelector("html");
var imgx = document.querySelector(".imgx");
var y_img = document.querySelector(".img_xs img");
var quash = document.querySelector(".quash");

for (let i = 0; i < pic.length; i++) {
  pic[i].onclick = function () {
    html.style.overflowY = "hidden";
    imgx.style.display = "block";
    y_img.src = pic[i].src;
  };
}

$(".box22 .k_img img").each(function (index) {
  $(this).on("click", function () {
    html.style.overflowY = "hidden";
    imgx.style.display = "block";
    y_img.src = $(this)[0].src;
  });
});

quash.onclick = function () {
  html.style.overflowY = "initial";
  imgx.style.display = "none";
  y_img.src = "";
};

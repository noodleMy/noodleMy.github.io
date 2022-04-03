$(".box21 .img")
  .eq(6)
  .on("mouseenter", function () {
    $(".dw").css("display", "block");
    $(".zuiho").css("display", "block");
  });

var img = document.getElementsByClassName("img")[6];
img.onmousemove = function (e) {
  var _event = e || window.event;

  console.log(_event.clientX, _event.clientY);
  var x_w = document.getElementsByClassName("dw")[0].offsetWidth;
  var x_h = document.getElementsByClassName("dw")[0].offsetHeight;

  var d_w = this.offsetWidth;
  var d_h = this.offsetHeight;
  var left = parseInt(
    _event.clientX - this.getBoundingClientRect().left - x_w / 2
  );
  var top = parseInt(
    _event.clientY - this.getBoundingClientRect().top - x_h / 2
  );

  if (0 >= top) {
    top = 0;
  }
  if (0 >= left) {
    left = 0;
  }
  if (d_h - top <= x_h) {
    top = d_h - x_h;
  }
  if (d_w - left <= x_w) {
    left = d_w - x_w;
  }
  $(".dw").css({ top: top + "px", left: left + "px" });
  var w = 5064 / (d_w - x_w);
  var h = 3240 / (d_h - x_h);
  $(".zuiho img").css({
    top: -top * h + "px",
    left: -left * w + "px",
  });
};

$(".box21 .img")
  .eq(6)
  .on("mouseleave", function () {
    $(".dw").css("display", "none");
    $(".zuiho").css("display", "none");
  });

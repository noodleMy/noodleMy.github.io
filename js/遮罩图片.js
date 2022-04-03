$(".box21 .img").each(function (index) {
  $(this).on("mouseenter", function () {
    $(this).children(".zh").css({ transform: "translateX(-60%)" });
  });
});
$(".box21 .img").each(function (index) {
  $(this).on("mouseenter", function () {
    $(this).children(".zh1").css({ transform: "translateX(-80%)" });
  });
});
$(".box21 .img").each(function (index) {
  $(this).on("mouseleave", function () {
    $(this).children(".zh").css({ transform: "translateX(-100%)" });
  });
});
$(".box21 .img").each(function (index) {
  $(this).on("mouseleave", function () {
    $(this).children(".zh1").css({ transform: "translateX(-100%)" });
  });
});

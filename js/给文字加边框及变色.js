var a = 1;
$(".nav2 h1").each(function (index) {
  $(this).on("click", function () {
    if (a == 1) {
      a = 0;
      $(this).css({
        animation: ".4s ntb forwards",
      });
    } else {
      $(this).css({ animation: "" });
      a = 1;
    }
  });
});

$(".box121 ul li").each(function (index) {
  $(this).on("mouseenter", function () {
    $(this)
      .css({
        "background-color": "rgb(247, 107, 113)",
        "box-shadow": "0px 0px 15px rgb(247, 107, 113)",
      })
      .append(
        "<style>.box121 ul li:nth-child(" +
          (index + 1) +
          ")::after { height: 97%;width:97%}</style>" +
          "<style>.box121 ul li:nth-child(" +
          (index + 1) +
          ")::before { height: 96%;width:97%}</style>"
      );
  });
});
$(".box121 ul li").each(function (index) {
  $(this).on("mouseleave", function () {
    $(this)
      .css({
        "background-color": "",
        "box-shadow": "",
      })
      .append(
        "<style>.box121 ul li:nth-child(" +
          (index + 1) +
          ")::after { height: 10px;width:10px}</style>" +
          "<style>.box121 ul li:nth-child(" +
          (index + 1) +
          ")::before { height:10px;width:10px}</style>"
      );
  });
});

$(".box22 .k_img").mouseenter(function (e) {
  e.stopPropagation();
  var a = $(this).children("img").attr("src");
  //   //记录当前时间戳
  //   var start_time = new Date().getTime();
  //   //图片地址 后面加时间戳是为了避免缓存
  //   var img_url = a + start_time;
  //   //创建对象
  //   var img = new Image();
  //   //改变图片的src
  //   img.src = img_url;
  //   //定时执行获取宽高
  //   var width;
  //   var height;
  //   var check = function () {
  //     //只要任何一方大于0
  //     //表示服务器已经返回宽高
  //     if (img.width > 0 || img.height > 0) {
  //       width = img.width;
  //       height = img.width;
  //       clearInterval(set);
  //     }
  //   };
  //   var set = setInterval(check, 40);
  //   console.log(width);

  var img_url = a;
  //创建对象
  var img = new Image();
  //改变图片的src
  img.src = img_url;
  //定时执行获取宽高
  var width;
  var height;
  //判断浏览器是否缓存
  if (img.complete) {
    width = img.width;
    height = img.height;
  } else {
    //没缓存先加载
    img.onload = function () {
      width = img.width;
      height = img.height;
    };
  }

  var child = $(this).parent(".box22").children(".k_img").length;
  var siblings_length = $(this).siblings().length;

  var width_d = width / siblings_length;
  var per = (siblings_length / child) * 100;

  console.log(width_d);
  $(this)
    .css("width", width + "px")
    .siblings()
    .css("width", "calc(" + per + "%" + width_d + "px)");
});
$(".box22 .k_img").mouseleave(function (e) {
  e.stopPropagation();
  var child = $(this).parent(".box22").children(".k_img").length;
  var per = 100 / child;
  $(this)
    .parent()
    .find(".k_img")
    .css("width", per + "%");

  // $(this).css("width", "40%").siblings().css("width", "15%");
});
var child = $(".box22 .k_img").parent(".box22").children(".k_img").length;
var per = 100 / child;
$(".box22 .k_img")
  .parent()
  .find(".k_img")
  .css("width", per + "%");

function CreateHourLines() {
  var html = "";
  var hour = "";
  var val;
  var c = 3;
  for (var i = 0; i < 12; i++) {
    if (c == 13) {
      c = 1;
    }
    val = i * 30;
    hour +=
      "<li style='transform:rotate(" +
      val +
      "deg) translate(58px)'><p style='transform:rotate(" +
      -val +
      "deg'>" +
      c +
      "</p></li>";
    html +=
      "<li style='transform:rotate(" + val + "deg) translate(76px)'></li>";
    c++;
  }
  $(".hour").html(html);
  $(".number").html(hour);
}
CreateHourLines();

function CreateminLines() {
  var html = "";

  var val;
  for (var i = 0; i < 60; i++) {
    val = i * 6;
    if (val % 5 != 0) {
      html +=
        "<li style='transform:rotate(" + val + "deg) translate(80px)'></li>";
    }
  }
  $(".min").html(html);
}
CreateminLines();

function time_now() {
  var timeNow = new Date();

  var hours = timeNow.getHours();
  var minuters = timeNow.getMinutes();
  var seconds = timeNow.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
  }

  var degs = "rotate(" + (seconds * 6 - 90) + "deg)";
  var minsec = parseInt((seconds / 60) * 6);
  var degm = "rotate(" + (minuters * 6 + minsec - 90) + "deg)";
  var hoursmin = parseFloat((minuters / 60) * 30);
  var degh = "rotate(" + (hours * 30 + hoursmin - 90) + "deg)";
  $(".p-sec").css("transform", degs);
  $(".p-min").css("transform", degm);
  $(".p-hour").css("transform", degh);
}

setInterval(time_now, 1000);

// function CreateHourLines() {
//   /* 绘制钟表的时钟刻度线 */
//   var html = "";
//   // key1表示x方向上的偏移量，key2表示y方向上的偏移量
//   var val, key1, key2;
//   for (var i = 0; i < 12; i++) {
//     val = i * 30;
//     key1 = 88;
//     key2 = 0;
//     if (val > 180 && val < 360) {
//       key1 = 90;
//     }
//     if (val > 0 && val < 180) {
//       key1 = 85;
//     }

//     if (val > 90 && val < 270) {
//       key2 = 3;
//     }
//     if (val < 90 || val > 270) {
//       key2 = -3;
//     }
//     html +=
//       "<li style='transform: rotate(" +
//       val +
//       "deg) translate(" +
//       key1 +
//       "px, " +
//       key2 +
//       "px)'></li>";
//   }
//   $(".hour").html(html);
// }

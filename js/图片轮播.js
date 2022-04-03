window.onload = function () {
  (function () {
    var len;
    var begin_index;
    var id;
    var liwidth;
    init();
    auto();
    function init() {
      begin_index = 1;
      var pic_f1 = document.querySelector(".box .box1 .carousel_1 .img1");
      var pic_c1 = pic_f1.cloneNode(true);
      var pic_f2 = document.querySelector(".box .box1 .carousel_1 .img5");
      var pic_c2 = pic_f2.cloneNode(true);

      var carousel = document.querySelector(".box .box1 .carousel_1");
      carousel.appendChild(pic_c1);
      carousel.insertBefore(pic_c2, pic_f1);

      var items = document.querySelectorAll(".carousel_1 li");
      len = items.length;
      liwidth = items[0].offsetWidth;

      carousel.style.width = len * liwidth + "px";
      carousel.style.left = -liwidth + "px";

      document.querySelector(".carousel_1").onmouseover = function () {
        stop();
      };
      document.querySelector(".carousel_1").onmouseout = function () {
        auto();
      };

      var buttus = document.querySelectorAll(".carousel_2 li");

      for (var i = 0; i < buttus.length; i++) {
        buttus[i].onclick = (function (num) {
          return function () {
            currIndex = num + 1;
            slideTo(currIndex);
          };
        })(i);
      }
    }
    function slideprev() {
      begin_index--;
      slideTo(begin_index);
    }

    function slidenext() {
      begin_index++;
      slideTo(begin_index);
    }

    function slideTo(index) {
      var img = document.querySelector(".carousel_1");
      if (index == -1) {
        begin_index = index = len - 3;
        img.style.left = -(len - 2) * liwidth + "px";
      }
      if (index == len) {
        begin_index = index = 2;
        img.style.left = -liwidth + "px";
      }

      var focus1index;
      var buttetls = document.querySelectorAll(".carousel_2 li");
      if (index == 0) {
        focus1index = buttetls.length - 1;
      } else if (index == len - 1) {
        focus1index = 0;
      } else {
        focus1index = index - 1;
      }

      document.querySelector(".b_color").className = "li1";
      buttetls[focus1index].className = "li1 b_color";
      var a = -index * liwidth;

      animate(img, { left: a });
    }

    function auto() {
      clearInterval(id);
      id = setInterval(function () {
        var items = document.querySelectorAll(".carousel_1 li");
        len = items.length;
        liwidth = items[0].offsetWidth;
        var carousel = document.querySelector(".box .box1 .carousel_1");
        carousel.style.width = len * liwidth + "px";
        slidenext();
      }, 3000);
    }

    function stop() {
      clearInterval(id);
    }

    function getstyle(el, property) {
      if (getComputedStyle) {
        return getComputedStyle(el)[property];
      } else {
        return el.currentStyle[property];
      }
    }
    function animate(el, properties) {
      clearInterval(el.timerId);
      el.timerId = setInterval(function () {
        for (var property in properties) {
          var current;
          var target = properties[property];

          if (property == "opacity") {
            current = parseFloat(getstyle(el, property)) * 100;
          } else {
            current = parseInt(getstyle(el, property));
          }
          var speed = (target - current) / 30;
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          if (property == "opacity") {
            el.style[property] = (current + speed) / 100;
          } else {
            el.style[property] = current + speed + "px";
          }
        }
      }, 20);
    }
  })();
};

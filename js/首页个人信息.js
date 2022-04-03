var lun_d2 = document.getElementsByClassName("lun-d2")[0];
var front = document.getElementsByClassName("front")[0];
var back = document.getElementsByClassName("back")[0];
var lun_d11 = document.getElementsByClassName("lun-d11")[0];
var lun_d31 = document.getElementsByClassName("lun-d31")[0];
var p = document.querySelectorAll(".I-am p");
var lun_d = document.getElementsByClassName("lun-d")[0];

var a = 1;
lun_d2.onclick = function () {
  if (a == 1) {
    lun_d.style.transition = "2s ease-in-out";
    front.style.transform = " perspective(500px) rotateY(180deg)";
    back.style.transform = " perspective(500px) rotateY(360deg)";
    lun_d11.style.transform = " perspective(300px) translateX(-320px)";
    lun_d31.style.transform = " perspective(300px) translateX(0px)";

    lun_d.style.backgroundColor = "#3bc2ff";
    for (var b = 0; b < p.length; b++) {
      p[b].style.transform = "translateX(" + (60 - b * 30) + "px)";
    }
    a = 0;
  } else {
    lun_d.style.transition = "2s ease-in-out";
    front.style.transform = "";
    back.style.transform = " perspective(500px) rotateY(180deg)";
    lun_d11.style.transform = " perspective(500px) translateX(0px)";
    lun_d31.style.transform = " perspective(500px) translateX(-320px)";
    lun_d.style.backgroundColor = "#FFFFFF";
    for (var b = 0; b < p.length; b++) {
      p[b].style.transform = "translateX(200px)";
    }
    a = 1;
  }
  setTimeout(function () {
    lun_d.style.transition = "";
  }, 2000);
};

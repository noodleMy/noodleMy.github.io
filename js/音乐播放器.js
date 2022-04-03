//获取audio标签
var audio = document.getElementById("audio");
//获取音量控制的标签
var volume = document.getElementById("volume");
//获取暂停，开始键
var pause = document.getElementsByClassName("box3_332");
//获取上一首图片所在的标签
var Up = document.getElementsByClassName("box3_331");
//获取下一首图片所在的标签
var Next = document.getElementsByClassName("box3_333");
//var source = document.querySelector("#audio source")

//获取歌名与歌手名
var s_n = document.querySelectorAll(".box3_35 p");
//获取显示的图片
var picture = document.querySelector(".box3_312");
//获取列表中所有的li
var li = document.getElementsByClassName("box4_1m");

//所有信息放入数组，最重要的是可以用一个变量操作数据变换，同时可供后期数据更换，及网页显示更换
//为什么不用document操作获取各种信息进行赋值呢？需要获取的节点太多，代码会变得臃肿
//同时在数据更换也会变得麻烦
var musics = [
  "audio/六月的雨.mp3",
  "audio/closer.mp3",
  "audio/L3V3LS - On A Hill.mp3",
  "audio/Sky.mp3",
  "audio/海阔天空.mp3",
  "audio/塞米七 - Tell U Everything.mp3",
  "audio/我爱你不问归期.mp3",
];
var music_name = [
  "六月的雨",
  "closer",
  "On A Hill",
  "Sky",
  "海阔天空",
  "Tell U Everything",
  "我爱你不问归期",
];
var singer = [
  "胡歌",
  "The Chainsmokers",
  "L3V3LS",
  "Little End",
  "BEYOND",
  "塞米七",
  "白小白",
];
var pic = [
  "url(img/R-C.jpg)",
  "url(img/closer.jpg)",
  "url(img/L3V3LS.jpg)",
  "url(./img/Sky.jpg)",
  "url(img/海阔天空.jpg)",
  "url(img/塞米七.jpg)",
  "url(img/白小白.jpg)",
];

pause[0].onclick = function () {
  //判断音乐是否暂停或结束
  if (audio.paused || audio.ended) {
    //图片更换
    pause[0].style.backgroundImage = "url(img/暂停.png)"; //图片的名字是错的，应该是播放
    audio.play();
  } else {
    pause[0].style.backgroundImage = "url(img/播放.png)"; //这个应该是暂停
    audio.pause();
  }
};

//下一首
//设置控制变量
var a = 0;

//为每个li标签添加点击事件，使其具有换歌功能
for (let b = 0; b < li.length; b++) {
  li[b].onclick = function () {
    a = b;
    s_n[0].innerHTML = music_name[a];
    s_n[1].innerHTML = singer[a];
    picture.style.backgroundImage = pic[a];
    audio.src = musics[a];

    pause[0].style.backgroundImage = "url(img/暂停.png)";
    audio.play();
  };
}

Next[0].onclick = function () {
  N();
};
//切换下一首函数
function N() {
  if (a < musics.length - 1) {
    a += 1;
    //数组的好处显示出来了，三行切换内容显示及歌曲
    s_n[0].innerHTML = music_name[a];
    s_n[1].innerHTML = singer[a];
    picture.style.backgroundImage = pic[a];
    audio.src = musics[a];

    pause[0].style.backgroundImage = "url(img/暂停.png)";
    audio.play();
  }
  //大于6时执行else,重新变为0
  else {
    a = 0;
    s_n[0].innerHTML = music_name[a];
    s_n[1].innerHTML = singer[a];
    picture.style.backgroundImage = pic[a];
    audio.src = musics[a];

    pause[0].style.backgroundImage = "url(img/暂停.png)";
    audio.play();
  }
}

//上一首
Up[0].onclick = function () {
  U();
};
//切换上一首函数
function U() {
  a--;
  if (a < musics.length - 1) {
    if (a == -1) {
      a = 6;
    }
    s_n[0].innerHTML = music_name[a];
    s_n[1].innerHTML = singer[a];
    picture.style.backgroundImage = pic[a];
    audio.src = musics[a];
    pause[0].style.backgroundImage = "url(img/暂停.png)";
    audio.play();
  }
}
//自动下一首
function Z() {
  //判断播放是否结束，播放结束自动下一首
  if (audio.ended) {
    N();
  }
}
//每秒执行一次Z(),进行判断
setInterval(Z, 1000);

function setVolume() {
  audio.volume = volume.value;
}

let music = document.querySelector("#val-board__music");
let image = document.querySelector("#image");
let title = document.querySelector(".val-board__title");
let play = document.querySelector("#play");
let pause = document.querySelector("#pause");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let start = document.querySelector("#start");
let end = document.querySelector("#end");
let range = document.querySelector("#range");
let replay = document.querySelector("#replay");
let volume = document.querySelector("#volume");

// Mahnilar
const songs = [
  {
    name: "Don Omar",
    path: "assets/music/Don_omer_-_Danza_kuduro.mp3",
    cover: "assets/images/danza.jpg",
  },
  {
    name: "Gd-X-Taeyang",
    path: "assets/music/gd-x-taeyang-good-boy.mp3",
    cover: "assets/images/g.jpeg",
  },
  {
    name: "Willy-William",
    path: "assets/music/Willy-William-Ego.mp3",
    cover: "assets/images/william-ego.jpg",
  },
];

function musicAdd(x) {
  music.src = x.path;
  title.innerHTML = x.name;
  image.src = x.cover;
}

let songIndex = 0;
var i = 0;
var firstInt;
var secondInt;

window.addEventListener("load", function () {
  musicAdd(songs[songIndex]);
});

const playMusic = function () {
  music.play();
  play.style.display = "none";
  pause.style.display = "block";

  firstInt = setInterval(function () {
    timeRange();
  }, 1000);

  secondInt = setInterval(function () {
    i++;
    image.style.transform = `rotate(${i}deg)`;
  }, 10);
};
const pauseMusic = function () {
  music.pause();
  play.style.display = "block";
  pause.style.display = "none";
  clearInterval(firstInt);
  clearInterval(secondInt);
};

const nextMusic = function () {
  if (songIndex === songs.length - 1) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  musicAdd(songs[songIndex]);
  clearInterval(firstInt);
  clearInterval(secondInt);
  playMusic();
};

const prevMusic = function () {
  if (songIndex === 0) {
    songIndex = songs.length - 1;
  } else {
    songIndex--;
  }
  musicAdd(songs[songIndex]);
  clearInterval(firstInt);
  clearInterval(secondInt);
  playMusic();
};
const changeTime = function () {
  music.currentTime = range.value;
};

const timeRange = function () {
  const minutes = Math.floor(music.duration / 60);

  // 👇️ get remainder of seconds
  const seconds = Math.floor(music.duration % 60) ;


  // ✅ format as MM:SS
  const result =`${(minutes)}:${(seconds)}`;
//   console.log(typeof result); // 👉️ "09:25"

  var musicDuration = Math.floor(music.duration);
  var musicCurrentDuration = Math.floor(music.currentTime);
  start.innerText = musicCurrentDuration;
  end.innerText = musicDuration - musicCurrentDuration;
  
  range.min = 0;
  range.max = musicDuration;
  range.value = musicCurrentDuration; 
};

const againMusic = function () {
  music.currentTime = 0;
};

const muteToggle = function () {
  music.muted = !music.muted;
  if (music.muted) {
    volume.style.textDecoration = "line-through";
  } else {
    volume.style.textDecoration = "none";
  }
};

play.addEventListener("click", playMusic);
pause.addEventListener("click", pauseMusic);
next.addEventListener("click", nextMusic);
prev.addEventListener("click", prevMusic);
range.addEventListener("change", changeTime);
replay.addEventListener("click", againMusic);
volume.addEventListener("click", muteToggle);

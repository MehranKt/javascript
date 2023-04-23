var lettersUpArr = [
  "Q",
  "W",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
var lettersLowArr = [
  "q",
  "w",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
var symbolArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "~",
  "&#60;",
  "&#62;",
  "&#47;",
  "?",
  ":",
  ";",
  ",",
];
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let checkUp = document.querySelector("#up");
let checkLow = document.querySelector("#low");
let checkNum = document.querySelector("#num");
let checkSymbol = document.querySelector("#symbol");
let inputRange = document.querySelector("#input");
let inputGenerator = document.querySelector("#input__group");
let easy = document.querySelector("#easy");
let normal = document.querySelector("#normal");
let hard = document.querySelector("#hard");
let extreme = document.querySelector("#extreme");
let restart = document.querySelector("#restart");
let copyButton = document.querySelector("#copy__button");
let copyBox = document.querySelector(".copy__box");
let clear = document.querySelector(".history__clear");



// let svg = document.querySelector(".svg"); bir bir kopyalamagi yazarsan

let allArray = [];

// shifre terkibi
function generator() {
  allArray = [];
  if (checkUp.checked === true) {
    allArray = allArray.concat(lettersUpArr);
  }
  if (checkLow.checked === true) {
    allArray = allArray.concat(lettersLowArr);
  }
  if (checkNum.checked === true) {
    allArray = allArray.concat(numArr);
  }
  if (checkSymbol.checked === true) {
    allArray = allArray.concat(symbolArr);
  } else {
    inputGenerator.value = "";
  }
}
// inputuma melumatlari gonderir
input.addEventListener("input", () => {
  inputGenerator.value = "";
  if (
    checkUp.checked === false &&
    checkLow.checked === false &&
    checkNum.checked === false &&
    checkSymbol.checked === false
  ) {
    easy.style.fill = "#00F0FF";
    normal.style.fill = "#00F0FF";
    hard.style.fill = "#00F0FF";
    extreme.style.fill = "#00F0FF";
  } else {
    hardLevel();
    generator();
    console.log(inputRange.value);
    for (let i = 0; i < inputRange.value; i++) {
      let count = Math.round(Math.random() * (allArray.length - 1));
      inputGenerator.value += allArray[count];
    }
    history();
  }
});
// cetinlik cubugu
function hardLevel() {
  if (inputRange.value <= 10 && inputRange.value > 0) {
    easy.style.fill = "red";
  } else {
    easy.style.fill = "#00F0FF";
  }
  if (inputRange.value <= 20 && inputRange.value > 10) {
    easy.style.fill = "red";
    normal.style.fill = "red";
  } else {
    normal.style.fill = "#00F0FF";
  }
  if (inputRange.value <= 30 && inputRange.value > 20) {
    easy.style.fill = "red";
    normal.style.fill = "red";
    hard.style.fill = "red";
  } else {
    hard.style.fill = "#00F0FF";
  }
  if (inputRange.value > 30) {
    easy.style.fill = "red";
    normal.style.fill = "red";
    hard.style.fill = "red";
    extreme.style.fill = "red";
  } else {
    extreme.style.fill = "#00F0FF";
  }
}

// sifre yeniden random atilsin
restart.addEventListener("click", () => {
  inputGenerator.value = "";
  if (
    checkUp.checked === false &&
    checkLow.checked === false &&
    checkNum.checked === false &&
    checkSymbol.checked === false
  ) {
    easy.style.fill = "#00F0FF";
    normal.style.fill = "#00F0FF";
    hard.style.fill = "#00F0FF";
    extreme.style.fill = "#00F0FF";
  } else {
    hardLevel();
    generator();
    console.log(inputRange.value);
    for (let i = 0; i < inputRange.value; i++) {
      let count = Math.round(Math.random() * (allArray.length - 1));
      inputGenerator.value += allArray[count];
    }
    history()
  }
}
);

// copy to clipboard
function copyToClipboard(value){
  navigator.clipboard.writeText(value)
  alert("Copied to clipboard  --> " + value);
}
// input value copy
copyButton.addEventListener("click", () => {
  copyToClipboard(inputGenerator.value)
});

// tarixce
function history() {
  const element = document.createElement("div");
  element.classList.add("copy");
  element.innerHTML = `<div class="copy__code">
  <div class="code">${inputGenerator.value}</div>
  <div class="code__history">21.12.2022 20:00</div>
  </div>
<div class="copy__button">
  <svg class="svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.375 22.5H6.375C6.07663 22.5 5.79048 22.3815 5.5795 22.1705C5.36853 21.9595 5.25 21.6734 5.25 21.375V6C5.25 5.80109 5.32902 5.61032 5.46967 5.46967C5.61032 5.32902 5.80109 5.25 6 5.25H21.375C21.6734 5.25 21.9595 5.36853 22.1705 5.5795C22.3815 5.79048 22.5 6.07663 22.5 6.375V21.375C22.5 21.6734 22.3815 21.9595 22.1705 22.1705C21.9595 22.3815 21.6734 22.5 21.375 22.5Z" fill="#FAFAFA"/>
  <path d="M5.25 3.75H18.75V2.625C18.75 2.32663 18.6315 2.04048 18.4205 1.8295C18.2095 1.61853 17.9234 1.5 17.625 1.5H2.8125C2.4644 1.5 2.13056 1.63828 1.88442 1.88442C1.63828 2.13056 1.5 2.4644 1.5 2.8125V17.625C1.5 17.9234 1.61853 18.2095 1.8295 18.4205C2.04048 18.6315 2.32663 18.75 2.625 18.75H3.75V5.25C3.75 4.85218 3.90804 4.47064 4.18934 4.18934C4.47064 3.90804 4.85218 3.75 5.25 3.75Z" fill="#FAFAFA"/>
  </svg>
  </div>`;
  copyBox.prepend(element);
  element.querySelector(".copy__button").addEventListener("click", ()=>{
    const code = element.querySelector(".code").innerHTML
    copyToClipboard(code)
  })
}

clear.addEventListener("click", () => {
  copyBox.innerHTML = "";
});

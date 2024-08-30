import { STEP } from "./constants/data.js";

const runningBtn = document.querySelector(".running-btn");
const runningImg = document.querySelector(".running-img");
const voice = new Audio("./public/voice.mp3");
let offSet = 0;

runningBtn.addEventListener("click", () => {
  voice.currentTime = 0;
  voice.play();

  if (runningImg.getBoundingClientRect().left < 0) {
    alert("よくやった！！");
  } else {
    offSet += STEP;
    runningImg.style.right = `${offSet}%`;
  }
});

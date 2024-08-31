import { SCREEN_EDGE, STEP } from "./constants/data.js";

const runningBtn = document.querySelector(".running-btn");
const runningImg = document.querySelector(".running-img");
const voice = new Audio("src/public/voice.mp3");
let currentPosition = 0;

runningBtn.addEventListener("click", () => {
  voice.currentTime = 0;
  voice.play();

  if (runningImg.getBoundingClientRect().left < SCREEN_EDGE) {
    alert("よくやった！！");
  } else {
    currentPosition += STEP;
    runningImg.style.right = `${currentPosition}%`;
  }
});

const startStopBtn = document.querySelector("#start-stop-btn");
const resetBtn = document.querySelector("#reset-btn");

let second = 0;
let minute = 0;
let hour = 0;

let firstSecond = 0;
let firstMinute = 0;
let firstHour = 0;

let interval = null;
let timerStatus = "stopped";

function timer() {
  second++;

  if (second / 60 === 1) {
    second = 0;
    minute++;

    if (minute / 60 === 1) {
      minute = 0;
      hour++;
    }
  }

  if (second < 10) {
    firstSecond = "0" + second.toString();
  } else {
    firstSecond = second;
  }
  if (minute < 10) {
    firstMinute = "0" + minute.toString();
  } else {
    firstMinute = minute;
  }
  if (hour < 10) {
    firstHour = "0" + hour.toString();
  } else {
    firstHour = hour;
  }

  let displayTimer = (document.getElementById("stopwatch").innerText =
    firstHour + ":" + firstMinute + ":" + firstSecond);
}

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    interval = window.setInterval(timer, 1000);
    document.getElementById(
      "start-stop-btn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearTimeout(interval);
    document.getElementById("start-stop-btn").innerHTML = `
    <i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(interval);
  second = 0;
  minute = 0;
  hour = 0;

  document.getElementById("stopwatch").innerHTML = "00:00:00";
});

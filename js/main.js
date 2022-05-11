// const backgroundColor = document.querySelector("body");
// const btnStart = document.querySelector("#start");
// const btnStop = document.querySelector("#stop");

// const colors = [
//   "#FFFFFF",
//   "#2196F3",
//   "#4CAF50",
//   "#FF9800",
//   "#009688",
//   "#795548",
// ];

// const randomIntegerFromInterval = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// function changeBackground(color) {
//   backgroundColor.style.backgroundColor = color;
// }

// let intervalColors = 0;
// function funcStart() {
//   btnStart.setAttribute("disabled", "disabled");
//   intervalColors = setInterval(() => {
//     const randomColorFromArray = randomIntegerFromInterval(0, 5);
//     changeBackground(colors[randomColorFromArray]);
//     console.log(randomColorFromArray);
//   }, 1000);
// }

// function funcStop() {
//   btnStart.removeAttribute("disabled", "disabled");
//   clearInterval(intervalColors);
//   backgroundColor.style.backgroundColor = "#FFFFFF";
// }

// btnStart.addEventListener("click", funcStart);
// btnStop.addEventListener("click", funcStop);














new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});
const days = Math.floor(time / (1000 * 60 * 60 * 24));
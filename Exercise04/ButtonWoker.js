let intervalId = null;
let colorIndex = 0;
const btncolors = [
  "#ff0000",
  "#ffff00",
  "#00ff00",
  "#0000ff",
  "#FF007F",
  "#8f00ff",
  "#FFA500",
];
const txtColors = [
  "#ffff00",
  "#ff7f00",
  "#0000ff",
  "#ffff00",
  "#FFFFFF",
  "#00ff00",
  "#ff0000",
];

self.addEventListener("message", (event) => {
  if (event.data === "start") {
    intervalId = setInterval(() => {
      const currTime = new Date();
      const currColor = btncolors[colorIndex];
      const currColortext = txtColors[colorIndex];
      colorIndex = (colorIndex + 1) % btncolors.length;
      console.log(currColortext);
      postMessage({
        time: currTime,
        btncolor: currColor,
        txtColor: currColortext,
        style: { position: "fixed", top: "0px", right: "0px" },
      });
    }, 1000);
  } else if (event.data === "stop") {
    clearInterval(intervalId); //stops the interval that was created with setInterval().
    intervalId = null; //set the interval ID variable to null
  }
});

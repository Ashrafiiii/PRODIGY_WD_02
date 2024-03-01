let startTime;
let running = false;
let interval;

function startStop() {
    if (!startTime) {
      startTime = Date.now();
      interval = setInterval(updateDisplay, 10);
      document.getElementById("startStopButton").innerText = "Stop";
      running = true;
    } else {
      clearInterval(interval);
      document.getElementById("startStopButton").innerText = "Start";
      running = false;
      startTime = null;
    }
  }
  

function reset() {
  clearInterval(interval);
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
  document.getElementById("startStopButton").innerText = "Start";
  running = false;
}

function recordLap() {
  const lapTime = document.getElementById("display").innerText;
  const lapItem = document.createElement("li");
  lapItem.innerText = lapTime;
  document.getElementById("laps").appendChild(lapItem);
}

function updateDisplay() {
  const currentTime = Date.now();
  const elapsedTime = new Date(currentTime - startTime);
  const hours = String(elapsedTime.getUTCHours()).padStart(2, '0');
  const minutes = String(elapsedTime.getUTCMinutes()).padStart(2, '0');
  const seconds = String(elapsedTime.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(elapsedTime.getUTCMilliseconds()).padStart(3, '0').slice(0, 2);
  document.getElementById("display").innerText = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

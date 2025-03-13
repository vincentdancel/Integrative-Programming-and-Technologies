const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const monster1 = document.getElementById("monster1");
const monster2 = document.getElementById("monster2");
const monster3 = document.getElementById("monster3");
const track = document.getElementById("track");

let monster1Distance = 0;
let monster2Distance = 0;
let monster3Distance = 0;
let running = false;
var race;

startBtn.addEventListener("click", () => {
  if (!running) {
    startRace();
  }
});
stopBtn.addEventListener("click", () => {
  if (running) {
    stopRace();
  }
});

function startRace() {
  running = true;
  startBtn.classList.remove("enabled");
  startBtn.classList.add("disabled");
  stopBtn.classList.add("enabled");
  stopBtn.classList.remove("disabled");

  monster1.classList.add("startAnimation");
  monster2.classList.add("startAnimation");
  monster3.classList.add("startAnimation");
  race = setInterval(move, 25);
}

function stopRace() {
  running = false;
  startBtn.classList.add("enabled");
  startBtn.classList.remove("disabled");
  stopBtn.classList.remove("enabled");
  stopBtn.classList.add("disabled");

  monster1.classList.remove("startAnimation");
  monster2.classList.remove("startAnimation");
  monster3.classList.remove("startAnimation");
  clearInterval(race);
}

function resetRace() {
  stopRace();
  monster1Distance = 0;
  monster2Distance = 0;
  monster3Distance = 0;
  monster1.style.left = monster1Distance + "px";
  monster2.style.left = monster2Distance + "px";
  monster3.style.left = monster3Distance + "px";
  monster1.classList.remove("startAnimation");
  monster2.classList.remove("startAnimation");
  monster3.classList.remove("startAnimation");
}

function move() {
  const goal = track.clientWidth - 100;

  if (monster1Distance >= goal) {
    clearInterval(race);
    alert("Monster 1 Wins");
    resetRace();
  } else if (monster2Distance >= goal) {
    clearInterval(race);
    alert("Monster 2 Wins");
    resetRace();
  } else if (monster3Distance >= goal) {
    clearInterval(race);
    alert("Monster 3 Wins");
    resetRace();
  }

  let v1 = Math.floor(Math.random() * (Math.random() * 20)) + 1;
  let v2 = Math.floor(Math.random() * (Math.random() * 20)) + 1;
  let v3 = Math.floor(Math.random() * (Math.random() * 20)) + 1;

  console.log(v1);
  console.log(v2);
  console.log(v3);

  monster1Distance += v1;
  monster2Distance += v2;
  monster3Distance += v3;

  monster1.style.position = "relative";
  monster2.style.position = "relative";
  monster3.style.position = "relative";

  monster1.style.left = monster1Distance + "px";
  monster2.style.left = monster2Distance + "px";
  monster3.style.left = monster3Distance + "px";
}
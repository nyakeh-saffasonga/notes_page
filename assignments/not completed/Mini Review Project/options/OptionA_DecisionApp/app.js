// Option A starter — implement the recommendation engine.

const scenarioEl = document.getElementById("scenario");
const minutesEl = document.getElementById("minutes");
const energyEl = document.getElementById("energy");
const runBtn = document.getElementById("runBtn");
const msgEl = document.getElementById("msg");
const outEl = document.getElementById("out");

function setMsg(text){ msgEl.textContent = text; }
function clearOut(){ outEl.innerHTML = ""; }
function addOut(text){
  const li = document.createElement("li");
  li.textContent = text;
  outEl.appendChild(li);
}

// TODO: validate inputs (non-negative whole minutes, energy 1-5)
function getInputs(){
  return null;
}

// TODO: return an array of recommendation strings based on scenario + inputs
// Requirements:
// - at least 2 decision points
// - at least 1 loop to generate a plan (ex: 3-step plan)
function recommend(scenario, minutes, energy){
  return ["TODO: implement recommend()"];
}

runBtn.addEventListener("click", () => {
  clearOut();
  const data = getInputs();
  if(!data){
    setMsg("Fix inputs and try again.");
    return;
  }
  setMsg("");
  const recs = recommend(data.scenario, data.minutes, data.energy);
  for(const r of recs) addOut(r);
});

// Day 5 starter — implement the TODOs using conditionals, loops, and functions.

const scoreInput = document.getElementById("score");
const runBtn = document.getElementById("runBtn");
const categoryEl = document.getElementById("category");
const reportEl = document.getElementById("report");

function clearReport(){
  reportEl.innerHTML = "";
}

function addLine(text){
  const li = document.createElement("li");
  li.textContent = text;
  reportEl.appendChild(li);
}

// TODO: return a category string based on score
// Example categories:
// 90-100: "Advanced"
// 70-89: "Proficient"
// 50-69: "Developing"
// 0-49: "Beginning"
function categorize(score){
  return "—";
}

// TODO: create a mini report of 5 lines using a loop
// Example:
// - "Next goal: reach 90"
// - "You are 3 points away from Proficient" (depending on current band)
// - Include at least 1 line that uses a compound condition (&& or ||)
function buildReport(score){
  clearReport();

  // your loop here
}

runBtn.addEventListener("click", () => {
  const score = Number(scoreInput.value);

  if(!Number.isInteger(score) || score < 0 || score > 100){
    categoryEl.textContent = "Category: Invalid score";
    clearReport();
    addLine("Enter a whole number from 0 to 100.");
    return;
  }

  categoryEl.textContent = "Category: " + categorize(score);
  buildReport(score);
});

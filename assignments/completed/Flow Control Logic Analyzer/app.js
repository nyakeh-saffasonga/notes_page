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

function categorize(score) {

  if (score >= 90 && score <= 100) {
    return "Advanced";
  } else if (score >= 70 && score < 90) {
    return "Proficient";
  } else if (score >= 50 && score < 70) {
    return "Developing";
  } else if (score >= 0 && score < 50) {
    return "Beginning";
  }

  return "—";

}

// TODO: create a mini report of 5 lines using a loop
// Example:
// - "Next goal: reach 90"
// - "You are 3 points away from Proficient" (depending on current band)
// - Include at least 1 line that uses a compound condition (&& or ||)

function buildReport(score) {
  clearReport();
  
  if (score >= 90 && score <= 100) {
      addLine("Great job! You are already in the highest category.");
      addLine("Keep up the good work!");
      addLine("Challenge yourself with harder material.");
      addLine("Consider helping others to improve.");
      addLine("Set new goals to maintain your level.");
      return;
  } else if (score >= 70 && score < 90) {
      addLine("You are " + (90 - score + i - 1) + " points away from Advanced");
      addLine("Keep practicing to reach the next level.");
      addLine("You are " + (score - 70) + " points into Proficient.");
      addLine("Focus on your weak areas to improve.");
      addLine("Stay consistent with your studies.");
      return;
  } else if (score >= 50 && score < 70) {
      addLine("You are " + (70 - score + i - 1) + " points away from Proficient");
      addLine("Keep working hard to improve your skills.");
      addLine("You are " + (score - 50) + " points into Developing.");
      addLine("Identify areas where you can improve.");
      addLine("Practice regularly to boost your score.");
      return;
  } else if (score >= 0 && score < 50) {
      addLine("You are " + (50 - score + i - 1) + " points away from Developing");
      addLine("Don't be discouraged, keep trying!");
      addLine("You are " + score + " points into Beginning.");
      addLine("Focus on foundational concepts.");
      addLine("Seek help when needed to improve.");
      return;
  }

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

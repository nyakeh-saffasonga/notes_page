// Option B starter — implement quiz engine.
// Requirements:
// - question bank array of objects: { text, choices[], answerIndex, explanation }
// - render question + choices
// - allow user to pick 1 answer per question
// - scoring
// - review list at end showing correct/incorrect
// Stretch: localStorage high score

const qText = document.getElementById("qText");
const choicesEl = document.getElementById("choices");
const msgEl = document.getElementById("msg");
const scoreEl = document.getElementById("score");
const progressPill = document.getElementById("progressPill");
const reviewEl = document.getElementById("review");
const restartBtn = document.getElementById("restartBtn");

// TODO: build your question bank
const questions = [
  // Example:
  // { text: "What does HTML stand for?", choices:["..."], answerIndex:0, explanation:"..." }
];

let index = 0;
let score = 0;
let userAnswers = []; // store chosen index per question

function setMsg(t){ msgEl.textContent = t; }
function clear(el){ el.innerHTML = ""; }

function render(){
  // TODO
}

function selectAnswer(choiceIndex){
  // TODO: lock selection, score if correct, move to next, or finish with review
}

function renderReview(){
  // TODO: show each question with user answer + correct answer + explanation
}

restartBtn.addEventListener("click", () => {
  index = 0;
  score = 0;
  userAnswers = [];
  setMsg("");
  clear(reviewEl);
  render();
});

render();

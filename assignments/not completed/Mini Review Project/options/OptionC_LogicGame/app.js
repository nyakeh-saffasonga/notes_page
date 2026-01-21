// Option C starter — Number Guess game
const guessEl = document.getElementById("guess");
const attemptsEl = document.getElementById("attempts");
const startBtn = document.getElementById("startBtn");
const guessBtn = document.getElementById("guessBtn");
const msgEl = document.getElementById("msg");
const historyEl = document.getElementById("history");

let secret = null;
let remaining = 0;
let over = true;

function setMsg(t){ msgEl.textContent = t; }
function clearHistory(){ historyEl.innerHTML = ""; }
function addHistory(t){
  const li = document.createElement("li");
  li.textContent = t;
  historyEl.appendChild(li);
}

function startGame(){
  // TODO: initialize secret + remaining + state
}

function submitGuess(){
  // TODO: validate guess, compare, update remaining, add history, end game
}

startBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", submitGuess);

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
  if (secret == null || over) {
    over = false;
    remaining = attemptsEl.value;
    secret = Math.floor(Math.random() * 100) + 1;
    console.log(secret);
    msgEl.textContent = "The game has started! Good luck...";
  } else {
    msgEl.textContent = "You may not restart the game at this time. Finish the current game first!";
  }
}

function submitGuess(){
  // TODO: validate guess, compare, update remaining, add history, end game
  let guess = guessEl.value;
  if (guess != secret) {

    remaining--;

    if (remaining == 0) {
    msgEl.textContent = "You ran out of attempts! The number was " + secret + ". Game over.";
    over = true;
    } else {

      let aboveOrBelowMessage = "";

      if (guess > secret) {
        aboveOrBelowMessage = "You went above the secret number. ";
      } else {
        aboveOrBelowMessage = "You went below the secret number. ";
      }

      if (Math.abs(guess - secret) >= 5) {
        msgEl.textContent = "Almost... " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 10) {
        msgEl.textContent = "That's very close! " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 20) {
        msgEl.textContent = "You're getting there! " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 30) {
        msgEl.textContent = "Not quite... " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 40) {
        msgEl.textContent = "Yeah, that's way off. " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
    }

  } else {

    msgEl.textContent = "Correct! The number was " + secret + ". Game over.";
    over = true;

  }

}

startBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", submitGuess);

// computer problem solving
// computer applications
// impromptu speaking
// graphic design
// 

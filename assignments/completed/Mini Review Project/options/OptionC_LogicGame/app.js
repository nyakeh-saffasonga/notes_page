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
  if (secret == null || over) { // checks if game is over or hasn't started yet
    over = false;
    remaining = attemptsEl.value;
    secret = Math.floor(Math.random() * 100) + 1;
    clearHistory(); // clears history
    msgEl.textContent = "The game has started! Good luck...";
  } else {
    msgEl.textContent = "You may not restart the game at this time. Finish the current game first!";
  }
}

function submitGuess(){
  // TODO: validate guess, compare, update remaining, add history, end game

  if (secret == null) {
    msgEl.textContent = "You need to start a game first!";
    return;
  }

  let guess = guessEl.value;
  if (guess != secret) {

    remaining--;

    if (remaining <= 0) { // checks if you are out of attempts

    msgEl.textContent = "You ran out of attempts! The number was " + secret + ". Game over.";
    over = true; // ends the game

    } else {

      let aboveOrBelowMessage = (guess > secret) ? "You went above the secret number. " : "You went below the secret number. "; // checks if guess is above or below secret number so it can be used in MESSAGES

      // the if statements below give different messages based on how close the guess is to the secret number

      if (Math.abs(guess - secret) > 0) { // within 1-9
        msgEl.textContent = "Almost... " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 10) { // within 10-19
        msgEl.textContent = "That's pretty close! " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 20) { // within 20-29
        msgEl.textContent = "You're getting there! " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 30) { // within 30-39
        msgEl.textContent = "Not quite... " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
      if (Math.abs(guess - secret) >= 40) { // within 40 or more
        msgEl.textContent = "Yeah, that's way off. " + aboveOrBelowMessage + "(Attempts remaining: " + remaining + ")";
      }
    }

    let aboveOrBelow = (guess > secret) ? "above" : "below"; // checks if guess is above or below secret number so it can be used in HISTORY

    // the if statements below give different history messages based on how close the guess is to the secret number

    if (Math.abs(guess - secret) >= 40) { // within 40 or more
        addHistory(guess + " was WAY off. It was " + aboveOrBelow + " the secret number.");
    } else if (Math.abs(guess - secret) >= 30) { // within 30-39
        addHistory(guess + " was not correct. It was " + aboveOrBelow + " the secret number.");
    } else if (Math.abs(guess - secret) >= 20) { // within 20-29
      addHistory(guess + " was getting there. It was " + aboveOrBelow + " the secret number.");
    } else if (Math.abs(guess - secret) >= 10) { // within 10-19
      addHistory(guess + " was pretty close to being correct. It was " + aboveOrBelow + " the secret number.");
    } else if (Math.abs(guess - secret) > 0) { // within 1-9
      addHistory(guess + " was ALMOST correct. It was " + aboveOrBelow + " the secret number.");
    }

  } else {

    msgEl.textContent = "Correct! The number was " + secret + ". Game over.";
    addHistory(guess + " was correct. You win!");
    over = true; // ends the game

  }

}

startBtn.addEventListener("click", startGame);
guessBtn.addEventListener("click", submitGuess);
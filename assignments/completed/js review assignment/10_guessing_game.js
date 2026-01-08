// Title: Simple Guessing Game
// Goal: Use random numbers and comparisons.
// Description: Random number between 1..10; ask the user to guess; respond high/low/correct.
// Run: node 10_guessing_game.js
//
// TODOs:
// 1) Generate a random integer from 1 to 10 (inclusive).
// 2) Read a guess from the user.
// 3) If guess <, >, or === target, log the appropriate message.
//
// // const target = /* TODO: random int 1..10 */;
// // const guess = /* TODO */;
// // TODO: compare and log

const target = Math.floor(Math.random() * 10) + 1;
const guess = Number(prompt("guess a number from 1-10"));

if (guess == target) {
    console.log("You were on point! The number was " + target + ".");
} else if (guess > target) {
    console.log("You went above the number. The number was " + target + ".");
} else if (guess < target) {
    console.log("You went below the number. The number was " + target + ".");
}




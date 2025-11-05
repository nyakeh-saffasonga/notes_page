// Title: Math Quiz Generator
// Goal: Randomized arithmetic + answer checking.
// Description: Generate two numbers (1..10) and ask "What is X + Y?" Compare user answer.
// Run: node 13_math_quiz_generator.js
//
// TODOs:
// 1) Generate random integers for X and Y (1..10).
// 2) Ask the user for the sum.
// 3) Compare and log "Correct!" or "Try again."
// 4) Bonus: track score across multiple rounds.
//
// // const x = /* TODO */;
// // const y = /* TODO */;
// // const userAnswer = /* TODO */;
// // TODO: compare and log

const x = Math.floor(Math.random() * 10) + 1;
const y = Math.floor(Math.random() * 10) + 1;
const actualAnswer = x + y;
const userAnswer = Number(prompt("what is " + x + " + " + y + "?"));

if (actualAnswer == userAnswer) {
    console.log("Correct!");
} else {
    console.log("Try again.");
}

// Title: Power & Root
// Goal: Use exponentiation (**) and roots.
// Description: Ask for a number; output squared, cubed, and square root.
// Run: node 02_power_root.js
//
// TODOs:
// 1) Read a single number from the user.
// 2) Compute square (n ** 2), cube (n ** 3), and square root (Math.sqrt(n)).
// 3) Log results with clear labels.
//
// Notes:
// - Consider non-negative input for square root (or handle negatives).
//
// const n = /* TODO */;
// // TODO: compute and log

const n = Number(prompt("enter a number"));

var squared = n ** 2;
var cubed = n ** 3;
var squareRoot = Math.sqrt(n);

console.log("squared: " + squared);
console.log("cubed: " + cubed);
console.log("square root: " + squareRoot);

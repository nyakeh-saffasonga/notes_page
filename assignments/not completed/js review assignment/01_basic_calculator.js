// Title: Basic Calculator
// Goal: Practice arithmetic operators (+, -, *, /, %).
// Description: Ask for two numbers and display sum, difference, product, quotient, and remainder.
// Run: node 01_basic_calculator.js
//
// TODOs:
// 1) Prompt the user for two numbers (as strings) and convert them with Number().
// 2) Compute sum, difference, product, quotient, and remainder.
// 3) Log each result on its own line, matching the labels below.
// 4) Handle division by zero gracefully (optional).
//
// Sample Output:
// Sum: 13
// Difference: 7
// Product: 30
// Quotient: 3.33
// Remainder: 1
//
// Notes:
// - You can use prompt-sync (Node) or prompt() (browser).
// - Avoid hard-coding values; read from the user.
//
// const a = /* TODO: get first number */;
// const b = /* TODO: get second number */;
// // TODO: compute and log results

const a = Number(prompt("enter the first number"));
const b = Number(prompt("enter the second number"));

var sum = a + b;
var difference = a - b;
var product = a * b;
var quotient = a / b;
var remainder = a % b;

console.log("sum: " + sum);
console.log("difference: " + difference);
console.log("product: " + product);
console.log("quotient: " + quotient);
console.log("remainder: " + remainder);




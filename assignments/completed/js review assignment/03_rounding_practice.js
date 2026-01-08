// Title: Rounding Practice
// Goal: Use Math.floor(), Math.ceil(), Math.round().
// Description: Ask for a decimal and show: down, up, nearest integer.
// Run: node 03_rounding_practice.js
//
// TODOs:
// 1) Read a decimal number from the user.
// 2) Log floor, ceil, and round values.
// 3) Include labels for each.
//
// const x = /* TODO */;
// // TODO: compute floor/ceil/round and log

const x = Number(prompt("enter a decimal"));

var floor = Math.floor(x);
var ceil = Math.ceil(x);
var round = Math.round(x);

console.log("floor: " + floor);
console.log("ceiling: " + ceil);
console.log("round: " + round);





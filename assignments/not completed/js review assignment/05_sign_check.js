// Title: Positive, Negative, or Zero
// Goal: Use if/else (or Math.sign) to classify a number.
// Description: Ask for a number and print whether it’s positive, negative, or zero.
// Run: node 05_sign_check.js
//
// TODOs:
// 1) Read one number from the user.
// 2) Decide: positive / negative / zero.
// 3) Log a clear message.
//
// const n = /* TODO */;
// // TODO: classification and log

const n = Number(prompt("enter a number"));

if (Math.sign(n) == 1) {
    console.log("The number " + n + " is positive.");
} else if (Math.sign(n) == -1) {
    console.log("The number " + n + " is negative.");
} else {
    console.log("The number " + n + " is zero.");
}



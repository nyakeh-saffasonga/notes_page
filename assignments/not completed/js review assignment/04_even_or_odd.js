// Title: Even or Odd
// Goal: Use the modulo operator (%) and if/else.
// Description: Prompt for a number and log whether it's even or odd.
// Run: node 04_even_or_odd.js
//
// TODOs:
// 1) Read one integer from the user.
// 2) If n % 2 === 0 -> "even", else "odd".
// 3) Log: "The number <n> is <even|odd>."
//
// const n = /* TODO */;
// // TODO: condition and log

const n = Number(prompt("enter a number"));

if (n % 2 == 0) {
    console.log("The number " + n + " is even");
} else {
    console.log("The number " + n + " is odd");
}

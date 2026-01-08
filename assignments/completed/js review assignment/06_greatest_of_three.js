// Title: Greatest of Three
// Goal: Use comparisons or Math.max().
// Description: Ask for three numbers and output the largest. Mention ties (optional).
// Run: node 06_greatest_of_three.js
//
// TODOs:
// 1) Read three numbers from the user.
// 2) Determine the largest value.
// 3) Log the largest (and note ties if you choose).
//
// const a = /* TODO */;
// const b = /* TODO */;
// const c = /* TODO */;
// // TODO: find largest and log

const a = Number(prompt("enter the first number"));
const b = Number(prompt("enter the second number"));
const c = Number(prompt("enter the third number"));

var largestNumber = a;

if (b > largestNumber) {
    largestNumber = b;
}

if (c > largestNumber) {
    largestNumber = c;
}

console.log("The largest number out of the 3 is " + largestNumber + ".");



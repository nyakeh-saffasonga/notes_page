// Title: Leap Year Checker
// Goal: Practice compound boolean logic.
// Description: Year is leap if divisible by 4 but not 100, unless divisible by 400.
// Run: node 09_leap_year.js
//
// TODOs:
// 1) Read a year from the user.
// 2) Implement leap-year rules with if/else logic.
// 3) Log a clear true/false or message.
//
// const year = /* TODO */;
// // TODO: leap logic and log

const year = Number(prompt("enter a year"));

if (year % 4 == 0 && year % 100 != 0) {
    console.log("It is a leap year.");
} else if (year % 400 == 0) {
    console.log("It is a leap year.");
} else {
    console.log("It is not a leap year.");
}

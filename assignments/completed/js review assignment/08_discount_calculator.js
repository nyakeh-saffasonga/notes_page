// Title: Discount Calculator
// Goal: Combine math with conditional ranges.
// Description: Apply discounts based on purchase total: >100 => 20%, 50–100 => 10%, else none.
// Run: node 08_discount_calculator.js
//
// TODOs:
// 1) Read purchase total from the user.
// 2) Decide discount rate (0, 0.10, or 0.20).
// 3) Compute discounted total and log both original and final totals.
//
// const total = /* TODO */;
// // TODO: compute discount and log

const total = Number(prompt("enter a purchase total"));

var discount = 0;

if (total > 100) {
    discount = 0.80; // 1 - 0.2
} else if (total >= 50 && total <= 100) {
    discount = 0.90; // 1 - 0.1
}

console.log("original total: " + total + " || discounted total : " + (total*discount));


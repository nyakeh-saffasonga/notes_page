// Title: Tip Calculator
// Goal: Conditionals + percentage math.
// Description: Read meal total and service quality (good/average/poor) to compute tip and total.
// Run: node 12_tip_calculator.js
//
// TODOs:
// 1) Read meal total and service (good/average/poor).
// 2) Map quality to tip rate: good=0.20, average=0.15, poor=0.10.
// 3) Compute tip and grand total; log both.
//
// const meal = /* TODO */;
// const quality = /* TODO */;
// // TODO: map rate, compute tip, log results

const meal = Number(prompt("enter the meal total"));
const quality = prompt("enter the service quality (good/average/poor)");

var tip = 0;

if (quality == "good") {
    tip = meal + (meal * 0.20);
} else if (quality == "average") {
    tip = meal + (meal * 0.15);
} else if (quality == "poor") {
    tip = meal + (meal * 0.10);
}

console.log("Tip: " + (tip - meal) + " Grand total: " + tip);





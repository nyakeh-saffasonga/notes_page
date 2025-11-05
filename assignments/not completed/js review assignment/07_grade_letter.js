// Title: Pass/Fail & Letter Grade
// Goal: Use comparison ranges and else-if chains.
// Description: Read a grade (0–100). Output Pass/Fail, then A/B/C/D/F scale.
// Run: node 07_grade_letter.js
//
// TODOs:
// 1) Read a grade from the user.
// 2) Print "Pass" if >= 70, otherwise "Fail".
// 3) Also print letter grade: A 90–100, B 80–89, C 70–79, D 60–69, F < 60.
// 4) Validate the input is within 0–100 (optional).
//
// const grade = /* TODO */;
// // TODO: pass/fail + letter grade

const grade = Number(prompt("enter a grade (in percent)"));

var letterGrade = "none";
var havePassed = "dont know";

if (grade < 60) {
    letterGrade = "F";
    havePassed = "Fail";
} else if (grade >= 60) {
    letterGrade = "D";
    havePassed = "Fail";
} else if (grade >= 70) {
    letterGrade = "C";
    havePassed = "Pass";
} else if (grade >= 80) {
    letterGrade = "B";
    havePassed = "Pass";
} else if (grade >= 90) {
    letterGrade = "A";
    havePassed = "Pass";
}

console.log("STATUS: " + havePassed + " || Letter Grade: " +  letterGrade);

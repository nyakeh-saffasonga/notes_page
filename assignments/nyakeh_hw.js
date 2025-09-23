// Part I, 1.
let _xPosition = 1;
let _yPosition = 2;
let webScroll = 0;
let $shirtsBrought = 9;
let age = 16;

var $moneyLeft = 2450;
var gameNumber = 4;
var gradeLevel = 11;
var daysRemaining = 2817;
var isEliminated = false;

const myLastName = "Saffa-Songa";
const speedOfLight = 299792458;
const username = "cybersp_";
const lovesToCode = true;
const isJavaScript = true; 

// Part I, 2.
let a = 6;
let b = 7;
let product = a * b;
let remainder = a % b;
let aPowerB = a ** b;

// Part I, 3.
let myString = "whats up everybody i am a random string value";
let myNumber = 67;
let myBoolean = true;
let thjeString = String(myNumber);

console.log(`The variable myNumber (${myNumber}) is a ${typeof(myNumber)} variable. The variable thjeString (${thjeString}) is a ${typeof(thjeString)} variable.`)

// Part I, 4.
let stringNumber = "42";
let actualNumber = Number(stringNumber);
let numberString = 100;
let actualString = String(numberString);

console.log(`The variable actualNumber (${actualNumber}) is a ${typeof(actualNumber)} variable. The variable actualString (${actualString}) is a ${typeof(actualString)} variable.`)


// Part II, 1.

let nameInput = prompt("what is your name?");
let ageInput = Number(prompt("how old are you?"));

if (ageInput == 21) {
    console.log("ageInput == 21 is true");
}

if (ageInput === 21) {
    console.log("ageInput === 21 is true");
    // this is different from the previous check, because it not only compares if the value itself is true, but it also checks if the value *TYPE* is true.
}

let over18 = Number(confirm("are you over 18?"));

if (over18) {
    alert("Welcome aboard!");
} else {
    alert("You must be 18 or older to proceed.");
}


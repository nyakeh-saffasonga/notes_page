function addThis() {
    return `${Math.floor(((Math.random() * 1000) + 1)+((Math.random() * 1000) + 1))}`;
}

function actuallyAddThis(number1, number2) {
    return number1+number2;
    console.log("hello"); // does not execute because of the return keyword already ending that fucntion
}

addThis(1, 2763);

function number1(number1) {
    return (number*4) + 13;
}


function answerOutput() {
    document.getElementById("answer").innerHTML = addThis();
}

function bggColor() {
    document.body.style.backgroundColor = 'red';
    document.getElementById("button").style.borderRadius = '10px';
}

function moveTheText() {
    document.getElementById("answer").style.position = 'absolute'
    document.getElementById("answer").style.bottom = 0
    document.getElementById("answer").style.right = 0

    
    document.getElementById("button").style.fontSize = '100px';
    document.getElementById("button").style.borderRadius = '100px';
    document.getElementById("button").style.backgroundColor = 'orange';
    document.getElementById("button").style.fontWeight = '9px';
    document.getElementById("button").style.fontWeight = '9px';
    // center that button on the page


}

let names = ["Derek", "Mike", "Taylor", "Addison"]
console.log(names)
console.log(names[3])
names[3] = "Bailey"
console.log(names)
let startup = [];
startup[0] = "Name"
console.log()

let box1[] = [1, 3, 5, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31]
let box2[] = [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31]
let box3[] = [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31]
let box4[] = [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31]
let box5[] = [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]





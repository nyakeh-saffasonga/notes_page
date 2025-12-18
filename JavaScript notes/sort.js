/*
    .sort() - At its core, this function will automatically sort based on alphabetical order
    the JS will convert the elements in an array into strings, and sorts the strings using Unicode alphabetical order
*/

let num = ["10", "2", "3"];
console.log(num.sort());
num = [10, 200, 32, 55, 3, 22, 5, 12];
console.log(num.sort((a,b)=> b - a));
/* a is the beginning and b is the end
its always going to be a and b
a-b is ASCENDING from least to greatest
b-a is DESCENDING from greatest to least
*/

console.log(num);
let list = ["Rap", "Jazz", "Blues", "EDM", "Heavy Metal"];
console.log(list.sort())

const students = [
    {name: "Jarome", score: 89},
    {name: "Monty", score: 77},
    {name: "Sven", score: 45},
]

students.sort((a,b) => b.score - a.score);
console.log(students);
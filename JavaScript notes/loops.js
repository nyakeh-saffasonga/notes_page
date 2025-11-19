// let x = 1;
// for (let i = 0; i < 5; i++) {
//     console.log(`This has printed ${i} times`)
// }

// for (let i = 200; i >= 150; i-=5) {
//     console.log(`${i}`)
// }

// for (let a = 0; a < 140; a+=2) {
//     console.log(`${a}`)
// }

// for (i = 5; i <= 13; i+=2) {
//     console.log(`${i}`)
// }

// for (i = 1; i <= 5; i++) {
//     console.log(`${(i+3) + i}`)
// }



/* THIS IS THE HOMEWORK */

let output = "";
for (let i = 0; i < 5; i++) {
    output += `${(Math.floor(Math.random() * 100)) + 1}`
    if (i != 4) {
        output += ', '
    }
}
console.log(output);




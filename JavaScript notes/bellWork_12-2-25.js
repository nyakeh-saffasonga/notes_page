let music = ["jazz", "blues"];
music.push("R&B");
if (music.length % 2 == 1) {
    let middle = Math.floor(music.length/2);
    music[middle] = "none";
}
music.unshift("rap");
music.unshift("acapella");

/* splice function (ACTUAL NOTES) */


// array.spice(position, remove, added);

let num = [1, 2, 3, 4, 5];
console.log(num);
num.splice(2 /*starting position*/, 0 /*how many items are bing removed*/, 13 /*what to replace with*/);
console.log(num);

let num2 = [2, 13];
num.splice(1, 2, (256, 411));

let random = "We are going to take over the World Pinkie";
let change = random.split(" ");
console.log(change);

let reconstitute = change.join(" ");
console.log(reconstitute);
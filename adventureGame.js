alert("lets play a game!");
alert("basically, im gonna make you fight a dragon");
let playerIsReady = confirm("ready?");
let characterName = "";
let health = 100;
let baseDamage = 25;

if (playerIsReady) {
    alert("awesome! lets begin.");
    characterName = prompt("enter the players name:");
} else {
    alert("too bad!");
    characterName = prompt("enter the players name:");
}

alert(characterName + ". what a nice name!");
alert(`lets move on.`);


alert("now, we're going to choose a class for your character.");
let characterClass = Number(prompt(`What would you like your class to be?
    
type the number "1" for WARRIOR
type the number "2" for MAGE
type the number "3" for ROGUE`));

if (characterClass == "1") {
    alert(`okay then! WARRIOR it is!`);
    characterClass = "WARRIOR";
} else if (characterClass == "2") {
    alert(`okay then! MAGE it is!`);
    characterClass = "MAGE";
} else if (characterClass == "3") {
    alert(`okay then! ROGUE it is!`);
    characterClass = "ROGUE";
} else {
    alert(`what on gods green earth is ${characterClass} supposed to mean...`);
    alert(`alright you know what im just gonna give you a random class`);
    characterClass = Math.floor(Math.random() * 3) + 1;
    if (characterClass == "1") {
        characterClass = "WARRIOR";
    } else if (characterClass == "2") {
        characterClass = "MAGE";
    } else if (characterClass == "3") {
        characterClass = "ROGUE";
    }
}

alert(`okay cool! weclome, welcome, ${characterName} the ${characterClass}! you have ${health} health and your base damage is ${baseDamage}.`);

let randomVariable = "hello!!!!!!!!!!!!!!!!";
// this is the css addon branch
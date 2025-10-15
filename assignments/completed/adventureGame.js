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
    
type "1" for WARRIOR
type "2" for MAGE
type "3" for ROGUE`));

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

alert(`okay cool! welcome, ${characterName} the ${characterClass}! you have ${health} health and your base damage is ${baseDamage}.`);


let action = prompt("You encounter a fearsome dragon! Do you want to (fight) or (run)?");
if (action == "fight") {
    while (dragonHealth > 0 && health > 0) {
        alert(`DRAGON IS THINKNG...`);
        dragonDamage = Math.floor(Math.random() * 50);
        health -= dragonDamage;
        alert(`THE DRAGON ATTACKS! you took ${dragonDamage} damage! your health is now ${health} HP.`);
        
        if (dragonHealth <= 0 || health <= 0) {
            break;
        }
        
        action = Number(prompt(`what do you do?
            type "1" to ATTACK
            type "2" to HEAL
            type "3" to RUN`));
            
            if (action == 1) {
                dragonHealth -= baseDamage;
                alert(`YOU ATTACK THE DRAGON! the dragon took took ${baseDamage} damage! its health is now ${dragonHealth} HP.`);
            } else if (action == 2) {
                alert(`HEALING...`)
                playerHeal = Math.floor(Math.random() * 75);
                health += playerHeal;
                alert(`YOU HEAL ${playerHeal} HP! your health is now ${health} HP.`);
            } else if (action == 3) {
                alert(`you bravely run away, leaving the dragon in your dust. your adventure continues...`);
                alert("GAME ENDED | You survived the adventure.");
                break;
            } else {
                alert(`you simply stand there. the dragon prepares to attack...`)
            }
        
    }
    
    if (dragonHealth <= 0) {
        alert("GAME ENDED | You survived the adventure.");
    }
    
    if (health <= 0) {
        alert(`GAME ENDED | You died.`);
    } 
    
} else if (action == "run") {
    alert(`you bravely run away, leaving the dragon in your dust. your adventure continues...`);
    alert("GAME ENDED | You survived the adventure.");
} else {
    alert("invalid action. the dragon gets confused and flies away.");
    alert("GAME ENDED | You survived the adventure.");
    
}

if (health % 2 == 0) {
    confirm("Your health is an even number. Press OK to continue.");
} else {
    confirm("Your health is an odd number. Press OK to continue.")
}

let bonusScore = baseDamage ** 2;
alert(`SCORE BONUS: ${bonusScore}`);

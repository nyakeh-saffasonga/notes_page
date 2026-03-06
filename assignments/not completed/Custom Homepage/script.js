// "cyber's corner" typewriter animation

let titleElement = document.querySelector("h1");
let fullText = ">> cyber's corner <<" // stores the original text
titleElement.innerText = ">"; // clears it to start the animation
let index = 0;

setInterval(() => {
    if (index < fullText.length) {
        titleElement.innerText = fullText.slice(0, index + 1) + "|";
        index++;
    } else {
        // where it stops
        titleElement.innerText = fullText;
        clearInterval();
    }
}, 100);





// time updater

let timeElement = document.getElementById("time");
let currentDateElement = document.getElementById("date")
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function updateTime() {

    let date = new Date();

    currentDateElement.innerText = `${days[date.getDay() - 1]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} | ${date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`; // current day

}

updateTime();
setInterval(updateTime , 1000);





// welcoming message randomizer

let date = new Date();
let welcomerElement = document.getElementById("welcome");
let timeOfDay = "";
let messageRandomizer = Math.floor(Math.random() * 5) + 1;
let message = "";

if (date.getHours() >= 0 && date.getHours() <= 5) {
  timeOfDay = 'midnight';
} else if (date.getHours() >= 6 && date.getHours() <= 11) { // After 12 PM and before 6 PM
  timeOfDay = 'morning';
} else if (date.getHours() >= 12 && date.getHours() <= 18) {
  timeOfDay = 'afternoon';
} else {
  timeOfDay = 'evening';
}

console.log(timeOfDay);


if (messageRandomizer == 1) {
  message = (timeOfDay == 'midnight') ? `You should probably go to bed, Nyakeh.` : (timeOfDay == 'morning') ? `You Good morning, Nyakeh.` : (timeOfDay == 'afternoon') ? `Good afternoon, Nyakeh.` : `Good evening, Nyakeh.`
} else if (messageRandomizer == 2) {
  message = (timeOfDay == 'midnight') ? `Staying up yet again, Nyakeh?` : (timeOfDay == 'morning') ? `You Good morning, Nyakeh.` : (timeOfDay == 'afternoon') ? `How has your day been, Nyakeh?` : `Good evening, Nyakeh.`
} else if (messageRandomizer == 3) {
  message = (timeOfDay == 'midnight') ? `Have a nice sleep, Nyakeh.` : (timeOfDay == 'morning') ? `You Good morning, Nyakeh.` : (timeOfDay == 'afternoon') ? `Good afternoon, Nyakeh.` : `Good evening, Nyakeh.`
} else if (messageRandomizer == 4) {
  message = (timeOfDay == 'midnight') ? `Have a nice sleep, Nyakeh.` : (timeOfDay == 'morning') ? `You Good morning, Nyakeh.` : (timeOfDay == 'afternoon') ? `Good afternoon, Nyakeh.` : `Good evening, Nyakeh.`
} else {
  message = (timeOfDay == 'midnight') ? `Have a nice sleep, Nyakeh.` : (timeOfDay == 'morning') ? `You Good morning, Nyakeh.` : (timeOfDay == 'afternoon') ? `Good afternoon, Nyakeh.` : `Good evening, Nyakeh.`
}

welcomerElement.innerText = message;





// tabs

let buttons = document.querySelectorAll('button[data-target]');
let sections = document.querySelectorAll('.sectionContent');

buttons.forEach(button => {
    button.addEventListener('click', () => {

        let targetId = button.getAttribute('data-target');
        
        sections.forEach(section => {
            section.classList.remove('active');
        });

        let targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    });
});







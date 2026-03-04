// "cyber's corner" typewriter animation

let titleElement = document.querySelector("h1");
let fullText = titleElement.innerText; // stores the original text
titleElement.innerText = ""; // clears it to start the animation
let index = 0;

setInterval(() => {
    if (index < fullText.length) {
        titleElement.innerText = fullText.slice(0, index + 1) + "|";
        index++;
    } else {
        // where it stops
        titleElement.innerText = fullText;
        clearInterval(titleAnimation);
    }
}, 100);





// time updater

let timeElement = document.getElementById("time");
let currentDateElement = document.getElementById("date")
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

function updateTime() {

    let date = new Date();

    currentDateElement.innerText = `${days[date.getDay() - 1]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`; // current day

    timeElement.innerText = `${date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`; // live clock

}

updateTime();
setInterval(updateTime , 1000);





// welcoming message




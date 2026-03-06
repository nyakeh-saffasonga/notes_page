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

    currentDateElement.innerText = `${days[date.getDay() - 1]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}
    ${date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}`; // current day

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
  message = (timeOfDay == 'midnight') ? `You should probably go to bed, NAME.` : (timeOfDay == 'morning') ? `Good morning, NAME.` : (timeOfDay == 'afternoon') ? `Good afternoon, NAME.` : `Good evening, NAME.`
} else if (messageRandomizer == 2) {
  message = (timeOfDay == 'midnight') ? `Staying up yet again, NAME?` : (timeOfDay == 'morning') ? `It's a new day, NAME.` : (timeOfDay == 'afternoon') ? `How has your day been, NAME?` : `The evening is so nice, isn't it, NAME?`
} else if (messageRandomizer == 3) {
  message = (timeOfDay == 'midnight') ? `Sweet dreams, NAME.` : (timeOfDay == 'morning') ? `Rise and shine, NAME!` : (timeOfDay == 'afternoon') ? `Hope you're having a great day, NAME.` : `Time to wind down, NAME.`
} else if (messageRandomizer == 4) {
  message = (timeOfDay == 'midnight') ? `Burning the midnight oil, NAME?` : (timeOfDay == 'morning') ? `Coffee time, NAME?` : (timeOfDay == 'afternoon') ? `Afternoon slump hitting you yet, NAME?` : `Almost the end of the day, NAME.`
} else {
  message = (timeOfDay == 'midnight') ? `NAME, go to bed!` : (timeOfDay == 'morning') ? `Good morning to you, NAME!` : (timeOfDay == 'afternoon') ? `Still going strong, NAME?` : `Evening vibes, NAME.`
}

welcomerElement.innerText = message;





// quick tabs

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


document.addEventListener('keydown', (event) => {
    let key = event.key;
    if (key >= '1' && key <= '5') {
        let index = parseInt(key) - 1;
        if (buttons[index]) {
            buttons[index].click();
        }
    }
});





// note saving

let notesElement = document.getElementById('notes');

notesElement.value = localStorage.getItem('userNotes') || '';
notesElement.addEventListener('input', () => {
    localStorage.setItem('userNotes', notesElement.value);
});





// recent tabs list

let recentTabs = JSON.parse(localStorage.getItem('recentTabs')) || [];
let maxRecentTabs = 7;


function addRecentTab(title, url, imageUrl) {

    if (url === '#') return; 

    recentTabs = recentTabs.filter(tab => tab.url !== url);
    recentTabs.unshift({ title, url, imageUrl, timestamp: new Date().toLocaleTimeString() });
    if (recentTabs.length > maxRecentTabs) {
        recentTabs.pop();
    }
    localStorage.setItem('recentTabs', JSON.stringify(recentTabs));
    
    updateRecentDisplay();
    attachTabListeners();
}


function updateRecentDisplay() {
    for (let i = 1; i <= 7; i++) {
        let element = document.getElementById(`recentTab${i}`);
        if (element) {
            element.innerHTML = '';
        }
    }
    
    let validTabs = recentTabs.filter(tab => tab.imageUrl && tab.url && tab.url !== '#');
    
    validTabs.forEach((tab, index) => {
        let element = document.getElementById(`recentTab${index + 1}`);
        if (element) {
            element.innerHTML = `
                <button class="tabButton">
                    <a href="${tab.url}" target="_blank" title="${tab.title} (${tab.timestamp})">
                        <img src="${tab.imageUrl}" alt="${tab.title}">
                    </a>
                </button>
            `;
        }
    });
}

function attachTabListeners() {
    document.querySelectorAll('.tabButton a').forEach(link => {
        link.removeEventListener('click', handleTabClick);
        link.addEventListener('click', handleTabClick);
    });
}

function handleTabClick(e) {
    let title = this.querySelector('img').alt;
    let url = this.href;
    let imageUrl = this.querySelector('img').src;
    addRecentTab(title, url, imageUrl);
}


attachTabListeners();
updateRecentDisplay();





// theme toggler

let themeButton = document.getElementById('themeSwitch');

if (themeButton) {
  themeButton.addEventListener('click', () => {
    document.body.classList.toggle('alternate-theme');
  });
}







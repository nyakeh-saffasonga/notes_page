// typewriter animation of the page

let titleElement = document.querySelector("h1");
let fullText = titleElement.innerText; // stores the original text
titleElement.innerText = ""; // clear it to start the animation
let index = 0;

let titleAnimation = setInterval(() => {
    if (index < fullText.length) {
        titleElement.innerText = fullText.slice(0, index + 1) + "|";
        index++;
    } else {
        // Remove the cursor and stop
        titleElement.innerText = fullText;
        clearInterval(titleAnimation);
    }
}, 100);
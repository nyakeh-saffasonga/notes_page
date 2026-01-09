// Day 1 starter
// BUGS to find:
// - event is not attaching properly
// - update function has an issue
// - bonus: make sure the text shows online/offline correctly

const statusEl = document.querySelector("#status strong");
const toggleBtn = document.querySelector("#toggleBtn");

let isOnline = false;

function render(){
  // BUG: wrong operator used
  statusEl.textContent = (isOnline ? "online" : "offline");
  statusEl.style.color = isOnline ? "var(--accent)" : "var(--danger)";
}

// BUG: wrong event name
toggleBtn.addEventListener("click", () => {
  isOnline = !isOnline;
  render();
});

// Should run once on load
render();

// Day 6 broken starter — fix the bugs and refactor for clarity.

const input = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const msg = document.getElementById("msg");
const countEl = document.getElementById("count");
let taskId = 0; // i made a separate id counter to avoid collisions

let tasks = []; // each: { id, text, done }

function setMessage(text){
  msg.textContent = text;
}

function renderCount(){
  // the way this was written was wrong (length - 1), so i changed it to be just length
  countEl.textContent = tasks.length;
}

function makeTaskElement(task){
  const li = document.createElement("li");
  li.className = "item";
  if(task.done) li.classList.add("done");

  // it was task.textContent instead of task.text
  li.textContent = task.text;

  const trash = document.createElement("button");
  trash.className = "trash";
  trash.innerHTML = "🗑";

  // pop only removes the last element, so changed to splice and accounted for index by making a variable
  trash.addEventListener("click", () => {
    let theIndex = tasks.indexOf(task);
    if (tasks.length >= 0) {
      tasks.splice(theIndex, 1);
    } else {
      tasks.pop();
    }
    render();
  });

  li.appendChild(trash);

  // it was "clicked" instead of "click"
  li.addEventListener("click", () => {
    task.done = !task.done;
    render();
  });

  return li;
}

function render(){
  list.innerHTML = "";
  // it was tasks.length - 1 instead of just tasks.length, making it off by one
  for(let i = 0; i < tasks.length; i++){
    const el = makeTaskElement(tasks[i]);
    if(el) list.appendChild(el);
  }
  renderCount();
}

addBtn.addEventListener("click", () => {
  const text = input.value;

  // the task's length cant be less than 0, changed it to equal 0
  if(text.length <= 0){
    setMessage("Task cannot be empty.");
    return;
  }

  // made a separate variable (taskId) that constantly counts up to avoid collisions
  const task = { id: taskId, text, done: false };

  tasks.push(task);
  input.value = "";
  taskId++;
  setMessage("Added!");
  render();
});

render();

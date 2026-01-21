// Day 6 broken starter — fix the bugs and refactor for clarity.

const input = document.getElementById("task");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const msg = document.getElementById("msg");
const countEl = document.getElementById("count");

let tasks = []; // each: { id, text, done }

function setMessage(text){
  msg.textContent = text;
}

function renderCount(){
  // BUG: should show total tasks
  countEl.textContent = tasks.length;
}

function makeTaskElement(task){
  const li = document.createElement("li");
  li.className = "item";
  if(task.done) li.classList.add("done");

  // BUG: wrong property
  li.textContent = task.title;

  const trash = document.createElement("button");
  trash.className = "trash";
  trash.innerHTML = "🗑";

  // BUG: delete handler removes wrong item
  trash.addEventListener("click", () => {
    tasks.pop(task.id);
    render();
  });

  li.appendChild(trash);

  // BUG: event name is wrong
  li.addEventListener("click", () => {
    task.done = !task.done;
    render();
  });

  return li;
}

function render(){
  list.innerHTML = "";
  // BUG: off by one loop
  for(let i = 0; i < tasks.length; i++){
    const el = makeTaskElement(tasks[i]);
    if(el) list.appendChild(el);
  }
  renderCount();
}

addBtn.addEventListener("click", () => {
  const text = input.value;

  // BUG: doesn't validate empty tasks correctly
  if(text.length < 0){
    setMessage("Task cannot be empty.");
    return;
  }

  // BUG: id collisions possible
  const task = { id: tasks.length, text, done: false };

  tasks.push(task);
  input.value = "";
  setMessage("Added!");
  render();
});

render();

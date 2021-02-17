let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#task-to-do");

let createTaskHandler = function(event){

  event.preventDefault();
  
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);
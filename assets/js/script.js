let formEl = document.querySelector("#task-form");
let tasksToDoEl = document.querySelector("#task-to-do");

let taskFormHandler = function(event){
  event.preventDefault();
  let taskNameInput = document.querySelector("input[name='task-name']").value;
  let taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if input values are empty string
  if (taskNameInput=== "" || taskTypeInput === "") {
    alert ("You need to fill out the task form!");
    return false;
  }

  formEl.reset();

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").secletedIndex = 0;
  // package up daya as an object
  let taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  
  };

// send it as an argument to createTaskEl
createTaskEl(taskDataObj);
};

let createTaskEl = function(taskDataObj){
  let listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold tas kinfo and add to list item
  let taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class'task-name>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
}
formEl.addEventListener("submit", taskFormHandler);
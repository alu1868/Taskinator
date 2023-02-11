var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do"); 

var taskFormHandler = function(event) {

  event.preventDefault();

  var taskNameInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  createTaskEl(taskDataObj)

};

var createTaskEl = function (taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item & give div a class name
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML elements w/ content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

  // take <div> element we just create, shove it in a <li> element
  listItemEl.appendChild(taskInfoEl);

  // add <li> element to <ul> element
  tasksToDoEl.appendChild(listItemEl);
}

formEl.addEventListener("submit", taskFormHandler);
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", newTask);
});

const newTask = function(event) {
  event.preventDefault();
  const tasks = document.getElementById("tasks");
  const inputBox = document.getElementById("new-task-description");
  console.log(inputBox)
  debugger
  const task = document.createElement("li");
  task.innerText = inputBox.value;
  tasks.appendChild(task);
  event.target.reset();

}

//Plan
// create variable for the form
//     add an event listener to form submit
//     capture the input on submit 

// Get the form input element
//     get value of the input box

// set tasks to a variable 

// create a function 
//     create a new Li element
//     set inner text of Li element equal to the value in the description box
//     put the new Li on to the page
//     clearing the input box

//Action
// create variable for the form
// add an event listener to form submit
// capture the input on submit 
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", newTask);
});

// Get the form input element
//     get value of the input box

// create a function 
const newTask = function(event) {
  event.preventDefault();
  // set tasks to a variable 
  const tasks = document.getElementById("tasks");
  const inputBox = document.getElementById("new-task-description");
  console.log(inputBox)
  debugger
  //     create a new Li element
  const task = document.createElement("li");
  //     set inner text of Li element equal to the value in the description box
  task.innerText = inputBox.value;
  //     put the new Li on to the page
  tasks.appendChild(task);
  //     clearing the input box
  event.target.reset();

}
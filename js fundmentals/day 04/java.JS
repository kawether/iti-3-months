var newTask = document.getElementById("enter");
function addNewTask() {
  if (!newTask.value) {
    alert("your input is empty");
  } else {
    var tasks = document.getElementById("tasks");
    var myNewTask = document.createElement("div");
    myNewTask.innerHTML = `
    <div class="container">
    <div> ${newTask.value}</div>
    <button  onclick='deleteTask(this)'>delete</button>
    <button  onclick='doneTask(this)'>Done</button>
    </div>
    `;
  
    tasks.appendChild(myNewTask);
    console.log("Task Added");
    newTask.value = "";
  }
}
function deleteTask(x) {
  x.parentElement.parentElement.remove();
  x.remove();
}
function doneTask(x) {
  y = x.parentElement;
  console.log(y);
  y.classList.toggle("done");
}

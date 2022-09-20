var newTask = document.getElementById("enter");

function addNewTask() {
  if (!newTask.value) {
    alert("your input is empty");
  } else {
    var tasks = document.getElementById("tasks");
    var myNewTask = document.createElement("div");

  myNewTask.innerHTML = `
    <div id= "x"> ${newTask.value}</div>
    <div class="btns"><button class='btn' onclick='deleteTask(this)'>delete</button></div>
    <br/>
    <div><button class='btn' onclick='doneTask(this)'>Done</button></div>
    `;
    myNewTask.classList.add("task");
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
  x.parentElement.parentElement.classList.add("done")
 }
 
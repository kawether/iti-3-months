var taskInputVal 
 var  newTask 
 var addTask 
 var boxx 

$("#btn").click (function(){ 
   taskInputVal = $("#enter").val();
   addTask = $("#enterTask");
   boxx = $("#box");
 
if(taskInputVal){
newTask = `
 <div class="container">
    <div> ${taskInputVal}</div>
    <div>
    <button id="done">Done</button>
    <button id="deleteTask">Delete</button>
    </div>
    </div>
    `;  
 addTask.append(newTask);
 console.log("Task Added");
}else{
  alert("your input is empty");
}});

addTask = $("#enterTask");
addTask.on('click','#done',
    function(){
        $(this).parent().prev().css("background-color","rgb(153, 51, 90)");
    }
);

addTask.on('click','#deleteTask',
    function(){
        $(this).parent().parent()[0].remove();
    }
);  

var taskList = document.getElementById('taskList');
document.addEventListener("DOMContentLoaded", (e) => {
    var taskList = document.getElementById('taskList');

    if (localStorage.getItem("tasks")) {
        JSON.parse(localStorage.getItem("tasks")).forEach(function (value) {
            let li = document.createElement('li');
            li.innerHTML = "<input class='multiple-selection' type='checkbox'>"+"<p>"+value+"</p>" + '<button class="task-remove-btn">X</button>';
            taskList.appendChild(li);
        });
    }
});

    function addTask() {
        var taskInput = document.getElementById('taskInput');
        if (taskInput.value.trim() !== '') {
            let li = document.createElement('li');
            li.innerHTML = "<input class='multiple-selection' type='checkbox'>"+"<p>"+taskInput.value+"</p>" + '<button class="task-remove-btn">X</button>';
            taskList.appendChild(li);
            saveTaskToLocalStorage(taskInput.value);
            taskInput.value = '';
            
        }
    }
    function saveTaskToLocalStorage(task) {
        let tasks = [];
      
        if (localStorage.tasks) {
     
          tasks = JSON.parse(localStorage.tasks);
        }
      
        tasks.push(task);
      
        localStorage.tasks = JSON.stringify(tasks);
      }
taskList.addEventListener("click",e=>{
    if(e.target.classList.contains("task-remove-btn"))
    {   
        let value =e.target.parentElement.children[1].innerText;
        console.log(value);
       removeTask(value);
       e.target.parentElement.remove();
    }

});
document.querySelector("#delete-selected-btn").addEventListener("click",function(event){
    let selectionList = document.querySelectorAll(".multiple-selection:checked");
    if(selectionList.length===0)
    {
        alert("Nothing Is Selected");
    }
    selectionList.forEach(el=>{
        let value =el.parentElement.children[1].value;
        console.log(value);
        removeTask(value);
        el.parentElement.children[1].parentElement.remove();
    });
});
function removeTask(value)
{
    let tasks = [];
      
    if (localStorage.tasks) {
 
      tasks = JSON.parse(localStorage.tasks);
    }
  
    tasks = tasks.filter((task) => task !== value);
    localStorage.tasks = JSON.stringify(tasks);
    
}



var taskList = document.getElementById('taskList');
document.addEventListener("DOMContentLoaded", (e) => {
    var taskList = document.getElementById('taskList');

    if (localStorage.getItem("tasks")) {
        JSON.parse(localStorage.getItem("tasks")).forEach(function (value) {
            let li = document.createElement('li');
            li.innerHTML = value + '<button class="task-remove-btn">Remove</button>';
            taskList.appendChild(li);
        });
    }
});

    function addTask() {
        var taskInput = document.getElementById('taskInput');
        if (taskInput.value.trim() !== '') {
            let li = document.createElement('li');
            li.innerHTML = taskInput.value + '<button class="task-remove-btn">Remove</button>';
            taskList.appendChild(li);
            saveTaskToLocalStorage(taskInput.value);
            taskInput.value = '';
            
        }
    }
    function saveTaskToLocalStorage(task) {
      
        var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
taskList.addEventListener("click",e=>{
    if(e.target.classList.contains("task-remove-btn"))
    {
        e.target.parentElement.remove();
    }
});




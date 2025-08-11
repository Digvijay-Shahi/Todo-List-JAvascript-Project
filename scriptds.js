document.addEventListener('DOMContentLoaded' , () => {
    const todoInput = document.getElementById("todo-input")
const addTaskBtn = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")

let tasks = JSON.parse(localStorage.getItem(tasks))  || [];

  tasks.forEach((task) => renderTask(task));

addTaskBtn.addEventListener("click", () => {

    const taskText = todoInput.value.trim()
    if (taskText === "") return;
    
    const newTask ={
        id: Date.now(),
        text: taskText,
        completed : false 
    }
    task.push(newTask);
    storingData();
    todoInput.value= "";
    console.log(tasks)

});

function renderTask(task){
    console.log(task)
}


function storingData(){
    localStorage.setItem("task", JSON.stringify(tasks));
}
})
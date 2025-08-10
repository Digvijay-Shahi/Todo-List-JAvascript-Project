const todoInput = document.getElementById("todo-input")
const addTaskBtn = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")

let task = []

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
    console.log(task)

});



function storingData(){
    localStorage.setItem("task", JSON.stringify(task));
}
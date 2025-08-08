const todoInput = document.getElementById("todo-input")
const addTaskBtn = document.getElementById("add-task-btn")
const todoList = document.getElementById("todo-list")

const task = []

addTaskBtn.addEventListener('click', () => {

    const taskText = todoInput.Value.trim()
    if (taskText === "") return;
    
    const newTask ={
        id: Date.now(),
        text: taskText,
        completed : false 
    }
})
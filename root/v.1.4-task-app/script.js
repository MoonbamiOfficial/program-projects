
const taskInput = document.querySelector('#task-input')
taskInput.addEventListener('keydown', (event) => handleUserInput(event));
const taskList = document.querySelector('#list-container')
taskList.addEventListener('click', (element) => {
    if(element.target.tagName === "LI") {
        element.target.classList.toggle("checked");
    }
    else if(element.target.tagName === "IMG") {
        element.target.parentElement.remove();
    }
}, false);
const addBtn = document.querySelector('.js-add-btn')
    .addEventListener('click', () => addTask());

function handleUserInput(event) {
    if(event.key === 'Enter') addTask();
}

function addTask() {
    if(taskInput.value === '') alert("Write something first!");
    else {
        let list = document.createElement("li");
        list.textContent = taskInput.value;
        taskList.appendChild(list);
        let deleteTask = document.createElement("img");
        deleteTask.src = "assets/delete.png";
        list.appendChild(deleteTask);
    }
    taskInput.value = '';
}






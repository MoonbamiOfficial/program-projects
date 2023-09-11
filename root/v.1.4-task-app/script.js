
const taskInput = document.querySelector('#task-input');
const taskList = document.querySelector('#list-container');
const addBtn = document.querySelector('.js-add-btn')
    .addEventListener('click', () => addTask());


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






function addTask() {
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'task';
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="completeTask(this)">Done</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
    newTaskInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskItem.remove();
}

const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function createTaskElement(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';

    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text';
    taskTextSpan.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn-delete';
    deleteButton.textContent = 'Delete';

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

function handleCheckboxChange(event) {
    const taskItem = event.target.closest('.task-item');

    if (event.target.checked) {
        taskItem.classList.add('completed');
    } else {
        taskItem.classList.remove('completed');
    }
}

function handleDeleteClick(event) {
    const taskItem = event.target.closest('.task-item');
    taskItem.remove();
}

function handleFormSubmit(event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText === '') {
        return;
    }

    const taskElement = createTaskElement(taskText);
    taskList.appendChild(taskElement);

    taskInput.value = '';
    taskInput.focus();
}

taskForm.addEventListener('submit', handleFormSubmit);

taskList.addEventListener('change', (event) => {
    if (event.target.classList.contains('task-checkbox')) {
        handleCheckboxChange(event);
    }
});

taskList.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-delete')) {
        handleDeleteClick(event);
    }
});
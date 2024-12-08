function AddTask() {
    const inputTask = document.querySelector(".addTask input").value.trim();
    if (inputTask !== '') {
        const taskList = document.querySelector(".task-list");
        const taskItem = document.createElement('div');
        taskItem.classList.add("task");

        const taskContent = document.createElement('h5');
        taskContent.textContent = inputTask;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');

        taskItem.appendChild(taskContent);
        taskItem.appendChild(completeButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);


        document.querySelector(".addTask input").value = '';

        completeButton.addEventListener('click', () => {
            if (!taskContent.textContent.startsWith("✓ ")) {
                taskContent.textContent = "✓ " + taskContent.textContent;
            }
        });

        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
    }
}

document.querySelector('.addTask').addEventListener('click', AddTask);
document.querySelector('.addTask input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        AddTask();
    }
});

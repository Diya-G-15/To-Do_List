document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskInput = document.getElementById("taskInput");
  const pendingTasksList = document.getElementById("pendingTasksList");
  const completedTasksList = document.getElementById("completedTasksList");

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const taskItem = createTaskItem(taskText);
      pendingTasksList.appendChild(taskItem);
      taskInput.value = "";
    }
  });

  function createTaskItem(taskText) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
      taskItem.classList.toggle("completed-task");
      const targetList = taskItem.classList.contains("completed-task")
        ? completedTasksList
        : pendingTasksList;
      targetList.appendChild(taskItem);
    });
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newTaskText = prompt("Edit the task:", taskText);
      if (newTaskText !== null && newTaskText.trim() !== "") {
        taskItem.textContent = newTaskText.trim();
        taskItem.appendChild(completeButton);
        taskItem.appendChild(editButton); 
        taskItem.appendChild(deleteButton); 
      }
    });
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      taskItem.remove();
    });
    taskItem.appendChild(completeButton);
    taskItem.appendChild(editButton);
    taskItem.appendChild(deleteButton);
    return taskItem;
  }
});


const addButton = document.querySelector(".main__button");
const tasksContainer = document.querySelector(".tasks");
const mainContainer = document.querySelector(".main");

const noElements = document.createElement("p");
noElements.textContent = "No tasks yet";
mainContainer.appendChild(noElements);

addButton.addEventListener("click", addTask);
tasksContainer.addEventListener("click", (e) => deleteTask(e.target));

function addTask() {
  if (tasksContainer.children.length === 0) updateEmptyState("delete")

  const task = document.createElement("div");
  const taskText = document.createElement("p");
  taskText.textContent = `Task #${tasksContainer.children.length + 1}`;

  const taskDeleteButton = document.createElement("button");
  taskDeleteButton.textContent = "Delete";
  taskDeleteButton.className = "task__button";

  task.appendChild(taskText);
  task.appendChild(taskDeleteButton);
  task.className = "task";

  tasksContainer.appendChild(task);
}

function deleteTask(target) {
  if (target.matches(".task__button")) {
    const taskToDelete = target.parentElement;
    tasksContainer.removeChild(taskToDelete);

    Array.from(tasksContainer.children).forEach((child, i) => {
      child.children[0].textContent = `Task #${i + 1}`
    })
  }

  if(!tasksContainer.children.length) updateEmptyState("add")
}

function updateEmptyState(str) {
  switch (str) {
    case "delete":
      mainContainer.removeChild(noElements)
      break;
    case "add":
      mainContainer.appendChild(noElements);
      break;
    default:
      break;
  }
}

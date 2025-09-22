let tasksCounter = 0;

const addButton = document.querySelector(".main__button");
const tasksContainer = document.querySelector(".tasks");
const mainContainer = document.querySelector(".main");

const noElements = document.createElement("p");
noElements.textContent = "No tasks yet";
mainContainer.appendChild(noElements);

addButton.addEventListener("click", addTask);
tasksContainer.addEventListener("click", (e) => deleteTask(e.target));

function addTask() {
  if (tasksCounter === 0) mainContainer.removeChild(noElements);

  tasksCounter += 1;
  const task = document.createElement("div");

  const taskText = document.createElement("p");
  taskText.textContent = `Task #${tasksCounter}`;

  const taskDeleteButton = document.createElement("button");
  taskDeleteButton.setAttribute("id", `${tasksCounter}`);
  taskDeleteButton.textContent = "Delete";
  taskDeleteButton.className = "task__button";

  task.appendChild(taskText);
  task.appendChild(taskDeleteButton);
  task.className = "task";

  tasksContainer.appendChild(task);
}

function deleteTask(target) {
  if (target.tagName === "BUTTON") {
    tasksCounter -= 1;
    const taskToDelete = target.parentElement;
    tasksContainer.removeChild(taskToDelete);
  }

  if (!tasksCounter) {
    mainContainer.appendChild(noElements);
  }
}

/*
  Еще уточнение, если бы у меня обработчики навешивались на кнопки delete, то да, 
  в таком случае нужно их удалять при удалении самой кнопки, но разве при делегировании событий нужно удалять
  главный обработчик, который работает на протяжении всей программы?
*/
const tasks = document.querySelector(".tasks");

tasks.addEventListener("click", (e) => {
  console.log();
  if (e.target.closest(".task__button").className === "task__button task__button--up") {
    raiseElement(e.target.closest(".task"));
  } else if (e.target.closest(".task__button").className === "task__button task__button--down") {
    lowerElement(e.target.closest(".task"));
  }
});

function raiseElement(el) {
  const previousSibling = el.previousElementSibling;
  if (previousSibling) {
    tasks.insertBefore(el, previousSibling);
  }
}

function lowerElement(el) {
  tasks.insertBefore(el, el.nextElementSibling?.nextElementSibling || null)
}

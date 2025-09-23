const tasks = document.querySelector(".tasks");

tasks.addEventListener("click", (e) => {
  if (e.target.textContent.replace(/\s+/g, "") === "Вверх") {
    raiseElement(e.target.closest(".task"));
  } else if (e.target.textContent.replace(/\s+/g, "") === "Вниз") {
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
  const nextSibling = el.nextElementSibling;
  if (nextSibling) {
    if (!nextSibling.nextElementSibling) {
      tasks.appendChild(el);
    } else {
      tasks.insertBefore(el, nextSibling.nextElementSibling)
    }
  }
}

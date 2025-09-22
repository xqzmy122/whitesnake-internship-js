const form = document.querySelector(".form")
const nameInput = document.getElementById("name")
const emailInput = document.getElementById("email")
const commentInput = document.getElementById("comments")
const errorContainer = document.querySelector(".errors")

form.addEventListener("submit", (e) => validate(e))

function validate(e) {
  let errors = []

  if (nameInput.value === "" || nameInput.value === null) {
    errors.push("Name is required")
  }

  if (emailInput.value === "" || emailInput.value === null) {
    errors.push("Email is required")
  }

  if (commentInput.value === "" || commentInput.value === null) {
    errors.push("Comment is required")
  }

  if(errors.length > 0) {
    e.preventDefault()  
    errorContainer.textContent = errors.join(", ")
  } else {
    alert("Data was sent")
    nameInput.value = ""
    emailInput.value = ""
    commentInput.value = ""
  }
}
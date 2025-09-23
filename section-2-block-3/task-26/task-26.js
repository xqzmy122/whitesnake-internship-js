const toggleThemeButton = document.querySelector(".toggle-theme")
const initialTheme = localStorage.getItem("theme")

toggleThemeButton.addEventListener("click", () => toggleTheme(localStorage.getItem("theme")))

if(initialTheme === "dark") {
  document.body.classList.add("dark")
  toggleThemeButton.textContent = "Светлая тема"
} else {
  toggleThemeButton.textContent = "Темная тема"
}

function toggleTheme(theme) {
  if(theme === "dark") {
    toggleThemeButton.textContent = "Темная тема"
    document.body.classList.toggle("dark")
    localStorage.setItem("theme", "light")
  } else {
    toggleThemeButton.textContent = "Светлая тема"
    document.body.classList.toggle("dark")
    localStorage.setItem("theme", "dark")
  }
}
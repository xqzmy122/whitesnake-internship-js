const toggleThemeButton = document.querySelector(".toggle-theme");

toggleThemeButton.addEventListener("click", () =>
  toggleTheme(document.body.classList.contains("dark"))
);

if (localStorage.getItem("theme")) {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    toggleThemeButton.textContent = "Светлая тема";
  }

  toggleThemeButton.textContent = "Темная тема";
} else {
  if (window.matchMedia("prefers-color-scheme: dark")) {
    document.body.classList.add("dark");
    toggleThemeButton.textContent = "Светлая тема";
  } 

  toggleThemeButton.textContent = "Темная тема";
}

function toggleTheme(containsDark) {
  if (containsDark) {
    toggleThemeButton.textContent = "Темная тема";
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    toggleThemeButton.textContent = "Светлая тема";
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

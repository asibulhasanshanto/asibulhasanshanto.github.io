// dom assignment to variables
var button = document.getElementById("mobile-menu-button");
var menu = document.getElementById("mobile_menu");
var three_bar = document.getElementById("three_bar");
var cross = document.getElementById("x_mark");
var body = document.getElementById("body");
var moon = document.getElementById("moon");
var sun = document.getElementById("sun");
var dark_mode_toggle_button = document.getElementById("dark_mode_toggle_button");

// mobile and desktop menu toggle
button.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("block");
    three_bar.classList.add("hidden");
    cross.classList.remove("hidden");
    cross.classList.add("block");
  } else {
    menu.classList.remove("block");
    menu.classList.add("hidden");
    cross.classList.remove("block");
    cross.classList.add("hidden");
    three_bar.classList.remove("hidden");
    three_bar.classList.add("block");
  }
});

// night mode toggle
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  enableDarkMode();
} else {
    disableDarkMode();
}

//click event to toggle dark mode
dark_mode_toggle_button.addEventListener("click", function () {
    if (body.classList.contains("dark")) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});

// function to enable dark mode
function enableDarkMode() {
    body.classList.add("dark");
    moon.classList.add("hidden");
    sun.classList.remove("hidden");
    sun.classList.add("block");
    localStorage.theme = "dark";
}

// function to disable dark mode
function disableDarkMode() {
    body.classList.remove("dark");
    sun.classList.remove("block");
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    localStorage.theme = "light";
}


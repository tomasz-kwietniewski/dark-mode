console.log("hello test");

let isDark = false;

const change = document.querySelector(".body--js");
change.addEventListener("click", () => {
  if (isDark) {
    document.documentElement.style.setProperty("--background-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
    isDark = false;
  } else {
    document.documentElement.style.setProperty("--background-color", "black");
    document.documentElement.style.setProperty("--text-color", "white");
    isDark = true;
  }
  
});



/*const change = document.querySelector('.body--js');

change.addEventListener('click', () => {
  const darkMode = document.querySelector('.body');
  darkMode.classList.toggle('body--dark')
})*/

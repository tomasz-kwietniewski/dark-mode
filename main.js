console.log("hello test");

let isDark = false;

const change = document.querySelector(".body--js");
change.addEventListener("click", () => {
  if ((isDark = false)) {
    document.documentElement.style.setProperty("--background-color", "white"),
      document.documentElement.style.setProperty("--text-color", "black");
  } else {
    document.documentElement.style.setProperty("--background-color", "black"),
      document.documentElement.style.setProperty("--text-color", "white");
  }
  
});



/*const change = document.querySelector('.body--js');

change.addEventListener('click', () => {
  const darkMode = document.querySelector('.body');
  darkMode.classList.toggle('body--dark')
})*/

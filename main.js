console.log('hello test')

const change = document.querySelector('.body--js');

change.addEventListener('click', () => {
  const darkMode = document.querySelector('.body');
  darkMode.classList.toggle('body--dark')
})
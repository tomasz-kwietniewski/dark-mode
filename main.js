console.log('hello test')

const darkMode = document.querySelector('.button-js');

darkMode.addEventListener('click', () => {
  const change = document.querySelector('.body');
  change.classList.toggle('body--js')
})
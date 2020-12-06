import './js/templating.js';
import './styles.css';

console.log('hello from index.js');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.checkbox.addEventListener('change', checkboxChange);

function checkboxChange(e) {
  e.preventDefault();
  if (
    !refs.body.classList.value ||
    refs.body.classList.value === 'dark-theme'
  ) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);
  } else {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);
  }

  localStorage.setItem('Theme', refs.body.classList.value);
}

const savedTheme = localStorage.getItem('Theme');

if (savedTheme !== 'dark-theme') {
  refs.body.classList.add('light-theme');
} else if (savedTheme !== 'light-theme') {
  refs.body.classList.add('dark-theme');
  refs.checkbox.setAttribute('checked', true);
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const savedTheme = localStorage.getItem('theme');
const inputForCheck = document.querySelector('.js-switch-input');
const body = document.querySelector('body');

export function themeChangeHandler(e) {
  if (e.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

export function checkLocalStorage() {
  if (savedTheme) {
    body.classList.add(savedTheme);
    savedTheme === Theme.DARK ? (inputForCheck.checked = true) : '';
  }
}

import './styles.css';
import markup from './tamplating';
import { checkLocalStorage, themeChangeHandler } from './themeServices';

const jsMenu = document.querySelector('.js-menu');
const inputForListener = document.querySelector('.js-switch-input');

checkLocalStorage();

jsMenu.insertAdjacentHTML('beforeend', markup);

inputForListener.addEventListener('change', themeChangeHandler);

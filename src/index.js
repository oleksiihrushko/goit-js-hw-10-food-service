import './styles.css';
import markup from './tamplating';
import { checkLocalStorage } from './themeServices';

const jsMenu = document.querySelector('.js-menu');
jsMenu.insertAdjacentHTML('beforeend', markup);

checkLocalStorage();

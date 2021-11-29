import './style.css';
import { makeThisDropdown } from './dropdowns';

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');

const mobileWidth = window.matchMedia('(max-width: 480px)');
function checkMedia(mediaQuery) {
    if (mediaQuery.matches) {

    } else {

    }
}

makeThisDropdown(dropdownMenuBtn, dropdownMenu);

//create mobile dropdown
//create desktop dropdown
//check which one it is
//create appropriate dropdown
import './style.css';
import { makeThisDropdownStd, makeThisDropdownMob } from './dropdowns';

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');

const mobileWidth = window.matchMedia('(max-width: 480px)');

function chooseDropdown(mediaQuery) {
    if (mediaQuery.matches) {
        makeThisDropdownMob(dropdownMenuBtn, dropdownMenu);
    } else {
        makeThisDropdownStd(dropdownMenuBtn, dropdownMenu);
    }
}
chooseDropdown(mobileWidth);
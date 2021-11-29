import './style.css';
import { chooseDropdown, makeThisDropdownMob, makeThisDropdownStd } from './dropdown_responsive';



const mobileWidth = window.matchMedia('(max-width: 480px)');
const dropdownDiv = document.getElementById('dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');


chooseDropdown(dropdownMenuBtn, dropdownMenu, dropdownDiv, mobileWidth, 'indigo');
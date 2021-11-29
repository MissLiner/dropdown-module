import './style.css';
import { chooseDropdown } from './dropdown_responsive';

//const mobileWidth = window.matchMedia('(max-width: 480px)');
let mobileWidth = (window.innerWidth <= 480);
// function testWidth(resultVar) {
//     window.innerWidth <= 480 ?
//     }
// }
const dropdownDiv = document.getElementById('dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');

chooseDropdown(dropdownMenuBtn, dropdownMenu, dropdownDiv, mobileWidth, 'indigo');
import './style.css';
import { mtDropdownResp } from './dropdown_responsive';

let mobileWidth = (window.innerWidth <= 480);
const dropdownDiv = document.getElementById('dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');

mtDropdownResp(dropdownMenuBtn, dropdownMenu, dropdownDiv, mobileWidth, 'indigo');
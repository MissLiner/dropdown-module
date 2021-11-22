import './style.css';
import { makeThisDropdown } from './dropdown';

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');

makeThisDropdown(dropdownMenuBtn, dropdownMenu);
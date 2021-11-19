import './style.css';

const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');

function makeDropdown(button, menu) {
    function show(divName) {
        divName.classList.remove('hidden');
    }
    function hide(divName) {
        divName.classList.add('hidden');
    }

    button.addEventListener('click', () => {
        if (menu.classList.contains('hidden')) {
            show(menu);
        } else {
            hide(menu);
        }
    })
}

makeDropdown(dropdownMenuBtn, dropdownMenu);

export {
    makeDropdown,
}
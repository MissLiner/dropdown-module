function makeThisDropdown(button, menu) {
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

export {
    makeThisDropdown,
}
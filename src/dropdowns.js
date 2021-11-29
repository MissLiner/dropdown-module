

function makeThisDropdownStd(button, menu) {
    function show(divName) {
        divName.classList.remove('hidden');
    }
    function hide(divName) {
        divName.classList.add('hidden');
    }
    function addClickOutListener(button, menu) {
        document.addEventListener(
          "click",
          (e) => {
            hide(menu);
            if (e.target === button) {
              e.stopPropagation();
            }
          },
          {
            once: true,
            capture: true,
          }
        );
      }

    button.addEventListener('click', () => {
        if (menu.classList.contains('hidden')) {
            show(menu);
            addClickOutListener(button, menu);
        }
    })
}

function makeThisDropdownMob(button, menu, div, color) {
  function convertStyle(el) {
    el.style.color = 'white';
    el.style.backgroundColor = 'transparent';
    el.style.border = 'none';
  }
  function getChildArray(parentEl) {
    return Array.from(parentEl.children);
  }
  makeThisDropdownStd(button, menu);
  div.style.backgroundColor = color;
  convertStyle(button);
  let menuBtns = getChildArray(menu);
  menuBtns.forEach(element => {
    convertStyle(element);
  });
}
function chooseDropdown(button, menu, div, mediaQuery, color) {
  if (mediaQuery.matches) {
      makeThisDropdownMob(button, menu, div, color);
  } else {
      makeThisDropdownStd(button, menu);
  }
}

export {
    makeThisDropdownStd,
    makeThisDropdownMob,
    chooseDropdown,
}
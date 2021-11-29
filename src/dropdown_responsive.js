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
  if (button) {
    button.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        show(menu);
        addClickOutListener(button, menu);
      }
    })
  }
}

function setBtnStyle(button, menu) {
  button.textContent = '+';
  const childEls = Array.from(menu.children);
  childEls.push(button);
  childEls.forEach (element => {
    element.style.color = 'white';
    element.style.backgroundColor = 'transparent';
    element.style.border = 'none';
    element.style.fontSize = '2em';
  })
}
function setMenuStyle(div, color) {
  div.style.backgroundColor = color;
  document.body.style.marginLeft = '0px';
}

function makeThisDropdownMob(button, menu, div, color) {
  setBtnStyle(button, menu);
  setMenuStyle(div, color);
}

function chooseDropdown(button, menu, div, isMobile, color) {
  makeThisDropdownStd(button, menu);
  if (isMobile === true) {
      makeThisDropdownMob(button, menu, div, color);
  }
}

export {
    //makeThisDropdownStd,
    //makeThisDropdownMob,
    chooseDropdown,
}
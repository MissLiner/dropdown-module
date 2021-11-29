function show(divName) {
  divName.classList.remove('hidden');
}
function hide(divName) {
  divName.classList.add('hidden');
}

function makeThisDropdownStd(button, menu) {
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

function setBtnStyle(div) {
  const childEls1 = Array.from(div.children);
  const childEls2 = [];
  childEls1.forEach(element => {
    if (div.children) {
      const newArr = Array.from(div.children);
      childEls2.concat(newArr);
    }
  })
  childEls1.concat(childEls2);
  //childEls.push(button);
  childEls1.forEach (element => {
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
  //ADD OPEN MENU ICON, HIDE MAIN BUTTON
  const openMenuBtn = document.createElement('div');
  div.appendChild(openMenuBtn);
  openMenuBtn.textContent = '+';
  openMenuBtn.addEventListener('click', () => {
    if (button.classList.contains('hidden')) {
      show(button);
      show(menu);
    } else {
      hide(button);
      hide(menu);
    }
  })
  setBtnStyle(div);
  setBtnStyle(menu);
  setMenuStyle(div, color);
  hide(button);
}

function chooseDropdown(button, menu, div, isMobile, color) {
  
  if (isMobile === true) {
    makeThisDropdownMob(button, menu, div, color);
  } else {
    makeThisDropdownStd(button, menu);
  }
}

export {
    //makeThisDropdownStd,
    //makeThisDropdownMob,
    chooseDropdown,
}
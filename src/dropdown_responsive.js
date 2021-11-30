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
  //GET ARRAY OF ALL BUTON ELEMENTS
  const childEls = Array.from(div.children);
  childEls.forEach(element => {
    if (element.firstChild) {
      const newArr = Array.from(element.children);
      childEls.push.apply(childEls, newArr);
    }
  })
  //APPLY WEB STYLING
  childEls.forEach (element => {
    element.style.color = 'white';
    element.style.backgroundColor = 'transparent';
    element.style.border = 'none';
    element.style.fontSize = 'larger';
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
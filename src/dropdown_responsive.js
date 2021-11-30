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

function setBtnStyle(div, color) {
  //GET ARRAY OF ALL BUTON ELEMENTS

  // childEls.forEach(element => {
  //   if (element.firstChild) {
  //     const newArr = Array.from(element.children);
  //     childEls.push.apply(childEls, newArr);
  //   }
  // })
  //APPLY WEB STYLING
  div.style.backgroundColor = color;
  const childEls = Array.from(div.children);
  childEls.forEach (element => {
    element.style.color = 'white';
    element.style.backgroundColor = 'transparent';
    element.style.border = 'none';
    element.style.fontSize = 'larger';
  })
}

// function setMenuStyle(div, color) {
//   //div.style.backgroundColor = color;
//   document.body.style.marginLeft = '0px';
// }

function makeThisDropdownMob(button, menu, div, color) {
  //ADD OPEN MENU ICON, HIDE MAIN BUTTON
  div.style.position = 'absolute';
  div.style.bottom = '15px';
  div.style.right = '15px';
  hide(button);
  const openMenuBtn = document.createElement('div');
  div.appendChild(openMenuBtn);

  //OPEN MENU BUTTON - STYLE 
  openMenuBtn.textContent = '+';
  openMenuBtn.style.textAlign = 'right';
  openMenuBtn.style.backgroundColor = 'transparent';
  openMenuBtn.style.color = 'indigo';
  openMenuBtn.style.fontSize = '4em';
  openMenuBtn.style.fontWeight = 'boldest';
  //openMenuBtn.style.marginRight = '5px';
  //OPEN MENU BUTTON - ADD FUNCTIONALITY
  openMenuBtn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
      //show(button);
      show(menu);
    } else {
      //hide(button);
      hide(menu);
    }
  })
  setBtnStyle(menu, color);
  //setMenuStyle(div);
  //hide(button);
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
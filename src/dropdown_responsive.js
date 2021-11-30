function show(divName) {
  divName.classList.remove('hidden');
}
function hide(divName) {
  divName.classList.add('hidden');
}

function mtDropdownStd(button, menu) {
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
  div.style.backgroundColor = color;
  const childEls = Array.from(div.children);
  childEls.forEach (element => {
    element.style.color = 'white';
    element.style.backgroundColor = 'transparent';
    element.style.border = 'none';
    element.style.fontSize = 'larger';
  })
}

function mtDropdownMob(button, menu, div, color) {
  //MENU - ADD WEB STYLING
  div.style.position = 'absolute';
  div.style.bottom = '15px';
  div.style.right = '15px';
  setBtnStyle(menu, color);

  //OPEN MENU BUTTON - REPLACE MAIN BUTTON
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

  //OPEN MENU BUTTON - ADD FUNCTIONALITY
  openMenuBtn.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
      show(menu);
    } else {
      hide(menu);
    }
  })
}

function mtDropdownResp(button, menu, div, isMobile, color) {
  
  if (isMobile === true) {
    mtDropdownMob(button, menu, div, color);
  } else {
    mtDropdownStd(button, menu);
  }
}

export {
    //mtDropdownStd,
    //mtDropdownMob,
    mtDropdownResp,
}
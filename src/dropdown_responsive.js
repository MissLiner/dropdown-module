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
  if (button && !button.classList.contains('has-listener')) {
    button.addEventListener('click', () => {
      button.classList.add('has-listener');
      if (menu.classList.contains('hidden')) {
        show(menu);
        addClickOutListener(button, menu);
      }
    })
  }
}

let styleProfile = {
  color: 'white',               //white
  backgroundColor: 'default',   //#79658F
  border: 'default',            //none
  fontSize: 'default',          //larger
}

function setStyle(subDiv, mainDiv, mobileQuery, style) {
  subDiv.style.backgroundColor = style.bgColor;
  const subEls = Array.from(subDiv.children);
  const mainEls = Array.from(mainDiv.children);
  const allEls = mainEls.concat(subEls);
  allEls.forEach(element => {
    if (mobileQuery === true) {
      element.classList.add('mobile-btn');
      if (element.classList.contains('reg-btn')) {

        element.classList.remove('reg-btn');
      }
    } else {
      element.classList.add('reg-btn');
      if (element.classList.contains('mobile-btn')) {
        element.classList.remove('mobile-btn');
      }
    }
  })
  for (const key in style) {
    if (style[key] === 'default') { 
      return;
    } else {
      allEls.forEach (element => {
        `${element}.style.${key} = ${style[key]}`;
      })
    }
  }
}

function mtDropdownMob(button, menu, div) {
  //MENU - ADD WEB STYLING
  // div.style.position = 'absolute';
  // div.style.bottom = '15px';
  // div.style.right = '15px';
  //setStyle(menu, mobileQuery, style);

  if (!document.getElementById('open-menu-btn')) {
    //OPEN MENU BUTTON - REPLACE MAIN BUTTON
    hide(button);
    const openMenuBtn = document.createElement('div');
    openMenuBtn.id = 'open-menu-btn';
    div.appendChild(openMenuBtn);

    //OPEN MENU BUTTON - STYLE 
    openMenuBtn.textContent = '+';
    openMenuBtn.style.textAlign = 'right';
    // openMenuBtn.style.backgroundColor = 'transparent';
    // openMenuBtn.style.color = color;
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
}

function mtDropdownResp(button, menu, div, mobileWidth, style) {
  function checkSize(button, menu, div, mobileWidth, style) {
    if (window.innerWidth <= mobileWidth) {
      mtDropdownMob(button, menu, div);
      const openMenuBtn = getElementById('open-menu-btn');
      setStyle(openMenuBtn, menu, mobileWidth, style);
    } else {
      mtDropdownStd(button, menu);
      if (button.classList.contains('hidden')) {
        show(button);
        const openMenuBtn = document.getElementById('open-menu-btn');
        openMenuBtn.parentElement.removeChild(openMenuBtn);
        div.style.position = 'inline';
      }
    }
    setStyle(menu, div, mobileWidth, style);
  }
  checkSize(button, menu, div, mobileWidth, style);
  let timeout;
  window.onresize = function() {
    clearTimeout(timeout);
    timeout = setTimeout(checkSize(button, menu, div, mobileWidth, style), 400);
    ;
  }
}

export {
    //mtDropdownStd,
    //mtDropdownMob,
    mtDropdownResp,
    styleProfile,
}
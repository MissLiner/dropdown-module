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

function setStyle(subDiv, mainDiv, mobileQuery, styleP) {
  subDiv.style.backgroundColor = styleP.backgroundColor;
  const subEls = Array.from(subDiv.children);
  const mainEls = Array.from(mainDiv.children);
  const allEls = mainEls.concat(subEls);
  if (mobileQuery === true) {
    mainDiv.classList.add('mobile-menu');
    if (mainDiv.classList.contains('reg-menu')) {
      mainDiv.classList.remove('reg-menu');
    }
  } else {
    mainDiv.classList.add('reg-menu');
    if (mainDiv.classList.contains('mobile-menu')) {
      mainDiv.classList.remove('mobile-menu');
    }
  }
  allEls.forEach(element => {
    element.classList.add('reg-btn');
  })
  for (const key in styleP) {
    if (styleP[key] === 'default') { 
      return;
    } else {
      allEls.forEach (element => {
        //`${element}.style.${key} = ${style[key]}`;
        element.style[key] = styleP[key];
      })
    }
  }
}

function mtDropdownMob(button, menu, div) {
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

function mtDropdownResp(button, menu, div, mobileWidth, styleP) {
  function checkSize(button, menu, div, mobileWidth, styleP) {
    if (window.innerWidth <= mobileWidth) {
      mtDropdownMob(button, menu, div);
      const openMenuBtn = getElementById('open-menu-btn');
      setStyle(openMenuBtn, menu, mobileWidth, styleP);
    } else {
      mtDropdownStd(button, menu);
      if (button.classList.contains('hidden')) {
        show(button);
        const openMenuBtn = document.getElementById('open-menu-btn');
        openMenuBtn.parentElement.removeChild(openMenuBtn);
        div.styleP.position = 'inline';
      }
    }
    setStyle(menu, div, mobileWidth, styleP);
  }
  checkSize(button, menu, div, mobileWidth, styleP);
  let timeout;
  window.onresize = function() {
    clearTimeout(timeout);
    timeout = setTimeout(checkSize(button, menu, div, mobileWidth, styleP), 400);
    ;
  }
}

export {
    //mtDropdownStd,
    //mtDropdownMob,
    mtDropdownResp,
    styleProfile,
}
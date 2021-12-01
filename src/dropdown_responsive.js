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
  color: 'default',               //white
  backgroundColor: 'default',   //#79658F
  border: 'default',            //none
  fontSize: 'default',          //larger
}

function setStyle(subDiv, mainDiv, mobileQuery, styleP) {
  mainDiv.style.backgroundColor = styleP['backgroundColor'];
  const subEls = Array.from(subDiv.children);
  const mainEls = Array.from(mainDiv.children);
  const allEls = mainEls.concat(subEls);
  if (window.innerWidth <= mobileQuery) {
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
        element.style[key] = styleP[key];
      })
    }
  }
}

function addOpenBtn(button, menu, div) {
  if (!document.getElementById('open-menu-btn')) {
    //REPLACE MAIN BUTTON
    hide(button);
    const openMenuBtn = document.createElement('div');
    openMenuBtn.id = 'open-menu-btn';
    div.appendChild(openMenuBtn);

    //STYLE 
    openMenuBtn.textContent = '+';
    openMenuBtn.style.textAlign = 'right';
    openMenuBtn.style.fontSize = '4em';
    openMenuBtn.style.fontWeight = 'boldest';

    //ADD FUNCTIONALITY
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
  function createDropdown(button, menu, div, mobileWidth, styleP) {
    if (window.innerWidth <= mobileWidth) {
      addOpenBtn(button, menu, div);
    } else {
      mtDropdownStd(button, menu);
      if (button.classList.contains('hidden')) {
        show(button);
        const openMenuBtn = document.getElementById('open-menu-btn');
        if (openMenuBtn) {
          openMenuBtn.parentElement.removeChild(openMenuBtn);
        }
      }
    }
    setStyle(menu, div, mobileWidth, styleP);
  }
  createDropdown(button, menu, div, mobileWidth, styleP);
  let timeout;
  window.addEventListener('resize', function() {
    clearTimeout(timeout);
    timeout = setTimeout(createDropdown.bind(null, button, menu, div, mobileWidth, styleP), 600);
  }, true) 
}

export {
    //mtDropdownStd,
    mtDropdownResp,
    styleProfile,
}
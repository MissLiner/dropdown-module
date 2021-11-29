//import { makeThisDropdownStd } from './dropdown_standard';



function chooseDropdown(button, menu, div, mediaQuery, color) {
  function makeThisDropdownStd(bu, me) {
    function show(divName) {
        divName.classList.remove('hidden');
    }
    function hide(divName) {
        divName.classList.add('hidden');
    }
    function addClickOutListener(btn, mnu) {
      document.addEventListener(
        "click",
        (e) => {
          hide(mnu);
          if (e.target === btn) {
            e.stopPropagation();
          }
        },
        {
          once: true,
          capture: true,
        }
      );
    }
    if (bu) {
      bu.addEventListener('click', () => {
        if (me.classList.contains('hidden')) {
          show(me);
          addClickOutListener(bu, me);
        }
      })
    }
  }
  function makeThisDropdownMob(button, menu, div, color) {
    makeThisDropdownStd(button, menu);
    function setBtnStyle(button, menu, color) {
      button.style.backgroundColor = color;
      let childEls = Array.from(menu.children);
      childEls.forEach (element => {
        element.style.color = 'white';
        element.style.backgroundColor = 'transparent';
        element.style.border = 'none';
      })
    }
    function setMenuStyle(div) {
      div.style.backgroundColor = color;
    }
  
    setBtnStyle(button, menu, color);
    setMenuStyle(div);
  }
  if (mediaQuery.matches) {
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
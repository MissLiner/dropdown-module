



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
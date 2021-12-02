function mtImageSlider(element, picArray) {
    picArray.forEach(pic => {
        element.append(pic);
        pic.style.display = 'none';
    });
    picArray[0].style.display = 'initial';
}

export {
    mtImageSlider,
}
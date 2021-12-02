function mtImageSlider(frame, element, leftBtn, rightBtn, picArray) {
    let currentIndex = 0;
    // add pics to slider, display first pic
    picArray.forEach(pic => {
        element.append(pic);
        pic.style.display = 'none';
        pic.classList.add('slider-pic');

    });
    picArray[currentIndex].style.display = 'initial';

    function shiftSlider(direction) {
        picArray[currentIndex].style.display = 'none';
        if (direction === 'left') {
            currentIndex -= 1;
        } else {
            currentIndex += 1;
        }
        picArray[currentIndex].style.display = 'initial';
        const whiteSpace = frame.scrollWidth - picArray[currentIndex].width;
        if (whiteSpace > 0) {
            picArray[currentIndex].style.marginLeft = whiteSpace / 2;
        }
        }
    leftBtn.addEventListener('click', () => {
        if (currentIndex !== 0) {
            shiftSlider('left');
        }
    })
    rightBtn.addEventListener('click', () => {
        if (currentIndex !== picArray.length - 1) {
            shiftSlider('right');
        }
    })
}

export {
    mtImageSlider,
}
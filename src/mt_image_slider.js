function mtImageSlider(element, leftBtn, rightBtn, picArray) {
    let frameWidth = 0;
    picArray.forEach(pic => {
        element.append(pic);
        pic.style.display = 'none';
        if (pic.width > frameWidth) {
            frameWidth = pic.width;
        }
    });
    let currentIndex = 0;
    picArray[currentIndex].style.display = 'initial';

    function shiftSlider(direction) {
        const currentPosition = slider.style.left;
        picArray[currentIndex].style.display = 'none';
        if (direction === 'left') {
            currentIndex -= 1;
        } else {
            currentIndex += 1;
        }
        picArray[currentIndex].style.display = 'initial';
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
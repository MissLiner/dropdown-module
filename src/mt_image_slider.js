function mtImageSlider(frame, element, leftBtn, rightBtn, picArray) {
    let currentIndex = 0;
    // add pics to slider, display first pic
    picArray.forEach(pic => {
        element.append(pic);
        pic.style.display = 'none';
        pic.classList.add('slider-pic');

    });
    picArray[currentIndex].style.display = 'initial';

    function shiftSlider(direction, element) {
        function toggleDisplay(element) {
            if (element.style.display === 'none') {
                element.style.display = 'initial';
            } else {
                element.style.display = 'none';
            }
        }
        function toggleEffect(element, effect) {
            element.classList.add(effect);
            //let timeout = 3000;
            setTimeout(() => {
                element.classList.remove(effect);
            }, 3000);
            // if (element.classList.contains(effect)) {
            //     element.classList.remove(effect);
            // } else {
            //     element.classList.add(effect);
            // }
        }
        function transition(element, effect) {
            toggleDisplay(element);
            toggleEffect(element, effect);
        }
        transition(picArray[currentIndex], 'hide-effect')
        if (direction === 'left') {
            currentIndex -= 1;
        } else {
            currentIndex += 1;
        }
        transition(picArray[currentIndex], 'show-effect')
        //picArray[currentIndex].style.display = 'initial';
        const whiteSpace = frame.scrollWidth - picArray[currentIndex].width;
        if (whiteSpace > 0) {
            picArray[currentIndex].style.marginLeft = whiteSpace / 2;
        }
    }
    leftBtn.addEventListener('click', () => {
        if (currentIndex !== 0) {
            shiftSlider('left', picArray[currentIndex]);
        }
    })
    rightBtn.addEventListener('click', () => {
        if (currentIndex !== picArray.length - 1) {
            shiftSlider('right', picArray[currentIndex]);
        }
    })
}

export {
    mtImageSlider,
}
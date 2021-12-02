function mtImageSlider(frame, element, leftBtn, rightBtn, picArray) {
    // add pics to slider, display first pic
    picArray.forEach(pic => {
        element.append(pic);
        pic.style.display = 'none';
        pic.classList.add('slider-pic');

    });
    let currentIndex = 0;
    //let newIndex = 1;
    picArray[currentIndex].style.display = 'initial';

    function shiftSlider(direction, arr) {
        function dissolve(element) {
            element.classList.add('fade-out');
            function hide() {
                element.classList.remove('fade-out');
                element.style.display === 'none';
            }
            let delayHide = setTimeout(hide, 3000);
            delayHide;
        }
        dissolve(arr[currentIndex]);
        if (direction === 'left') {
            currentIndex -= 1;
            arr[currentIndex].style.display = 'initial';

        } else {
            currentIndex += 1;
            arr[currentIndex].style.display = 'initial';
        }
        const whiteSpace = frame.scrollWidth - picArray[currentIndex].width;
        if (whiteSpace > 0) {
            picArray[currentIndex].style.marginLeft = whiteSpace / 2;
        }
        //arr[currentIndex].style.opacity = '0';
    }
    leftBtn.addEventListener('click', () => {
        if (currentIndex !== 0) {
            shiftSlider('left', picArray);
        }
    })
    rightBtn.addEventListener('click', () => {
        if (currentIndex !== picArray.length - 1) {
            shiftSlider('right', picArray);
        }
    })
}

export {
    mtImageSlider,
}
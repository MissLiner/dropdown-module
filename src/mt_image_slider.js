function mtImageSlider(frame, element, leftBtn, rightBtn, picArray) {
    // add pics to slider, display first pic
    picArray.forEach(pic => {
        element.append(pic);
        pic.classList.add('hidden');
        pic.classList.add('slider-pic');

    });
    let currentIndex = 0;
    let newIndex;
    picArray[currentIndex].classList.remove('hidden');

    function shiftSlider(direction, arr) {
        function dissolve(element) {
            element.classList.add('fade-out');
            function hide(element) {
                element.classList.remove('fade-out');
                element.classList.add('hidden');
            }
            setTimeout(function() { hide(element) }, 3000);
        }
        function appear(element) {
            function show(element) {
                element.classList.remove('hidden');
                element.classList.add('fade-in');
            }
            setTimeout(function() { show(element) }, 3000);
        }

        if (direction === 'left') {
            newIndex = currentIndex - 1;
        } else {
            newIndex = currentIndex + 1; 
        }
        dissolve(arr[currentIndex]);
        appear(arr[newIndex]);
        currentIndex = newIndex;
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
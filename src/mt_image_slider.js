function mtImageSlider(frame, element, leftBtn, rightBtn, dotHolder, picArray) {
    // add pics to slider
    let currentIndex = 0;
    let newIndex;
    function dissolve(element) {
        element.classList.add('fade-out');
        function hide(element) {
            element.classList.remove('fade-out');
            element.classList.add('hidden');
        }
        setTimeout(function() { hide(element) }, 2000);
    }
    function appear(element) {
        function show(element) {
            element.classList.remove('hidden');
            setTimeout(() => {
                centerPic(picArray[currentIndex], frame);
            }, 1000);
            element.classList.add('fade-in');
        }
        setTimeout(function() { show(element) }, 2000);
    }

    picArray.forEach((pic, i) => {
        element.append(pic);
        pic.classList.add('hidden');
        pic.classList.add('slider-pic');
        //CREATE NAV DOTS
        const navDot = document.createElement('input');
        navDot.id = 'nav-dot-' + i;
        navDot.class = 'nav-dot';
        navDot.type = 'radio';
        navDot.name = 'nav-dot' + picArray;
        dotHolder.appendChild(navDot);
        //navigate w. nav dots
        navDot.addEventListener('click', () => {
            dissolve(picArray[currentIndex]);
            appear(pic);
        })
    });
    //display first pic
    picArray[currentIndex].classList.remove('hidden');
    const navDot0 = document.getElementById('nav-dot-0');
    navDot0.checked = 'true';
    //CENTER PICS IF FRAME IS WIDER
    function centerPic(element, container) {
        const whiteSpace = container.scrollWidth - element.width;
        if (whiteSpace > 0) {
            element.style.marginLeft = whiteSpace / 2;
        }
    }
    setTimeout(() => {
        centerPic(picArray[currentIndex], frame);
    }, 1000);
    //CHANGE PIC
    function shiftSlider(direction, arr) {
        if (direction === 'left') {
            newIndex = currentIndex - 1;
        } else {
            newIndex = currentIndex + 1; 
        }
        dissolve(arr[currentIndex]);
        appear(arr[newIndex]);
        currentIndex = newIndex;
    }
    //USE L/R BUTTONS TO NAVIGATE PICS
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
    //FILL IN DOT CORRESPDNDING WITH EACH SLIDE WHEN SHOWING

    //ADD SLIDESHOW OPTION
}

export {
    mtImageSlider,
}
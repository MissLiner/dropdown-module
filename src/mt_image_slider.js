function mtImageSlider(frame, element, leftBtn, rightBtn, dotHolder, picArray) {
    // add pics to slider
    let currentIndex = 0;
    let newIndex;
    let currentDot;
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
                centerPic(element, frame);
            }, 250);
            element.classList.add('fade-in');
        }
        setTimeout(function() { show(element) }, 2000);

    }

    picArray.forEach((pic, i) => {
        element.append(pic);
        pic.classList.add('hidden');
        pic.classList.add('slider-pic');
        pic.id = 'pic-' + i;
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
            currentIndex = parseInt(pic.id.charAt(pic.id.length - 1));
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
        currentIndex = newIndex;
        appear(arr[currentIndex]);

        //select current nav dot
        currentDot = document.getElementById('nav-dot-' + currentIndex);
        currentDot.checked = 'true';
        //currentIndex = newIndex;
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

    //ADD SLIDESHOW OPTION
}

export {
    mtImageSlider,
}
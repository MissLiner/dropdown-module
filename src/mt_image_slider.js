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
            currentDot = document.getElementById('nav-dot-' + currentIndex);
            currentDot.checked = 'true';
            setTimeout(() => {
                centerPic(element, frame);
            }, 250);
            element.classList.add('fade-in');
        }
        setTimeout(function() { show(element) }, 2000);
    }
    function stopTimer() {
        clearInterval(playShow);
        playShow = null;
        isTimer = false;
        playBtn.textContent = 'PLAY';
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
            stopTimer();
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
    }
    //USE L/R BUTTONS TO NAVIGATE PICS
    leftBtn.addEventListener('click', () => {
        if (currentIndex !== 0) {
            stopTimer();
            shiftSlider('left', picArray);
        }
    })
    rightBtn.addEventListener('click', () => {
        if (currentIndex !== picArray.length - 1) {
            stopTimer();
            shiftSlider('right', picArray);
        }
    })
    //ADD SLIDESHOW OPTION
    const playBtn = document.getElementById('play-btn');
    let lastIndex;
    let isTimer = false;
    function advanceShow(arr) {
        isTimer = true;
        dissolve(arr[currentIndex]);
        if (currentIndex !== arr.length - 1) {
            if (lastIndex && lastIndex > currentIndex && currentIndex !== 0) {
                lastIndex = currentIndex;
                currentIndex -= 1;
            }
            else {
                currentIndex += 1;
            }
        } else {
            lastIndex = currentIndex;
            currentIndex -= 1;
        }
        appear(arr[currentIndex]);
    }
    let playShow = setInterval(advanceShow, 5000, picArray);
    playBtn.addEventListener('click', () => {
        if (playShow === null) {
            playBtn.textContent = 'PAUSE';
            playShow = setInterval(advanceShow, 5000, picArray);
        } 
        else if (isTimer === true) {
            stopTimer();
        } else {
            playBtn.textContent = 'PAUSE';
            playShow;
        }
    })
}

export {
    mtImageSlider,
}
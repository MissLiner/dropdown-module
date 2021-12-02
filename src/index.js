import './style.css';
import { mtDropdownResp, styleProfile } from './dropdown_responsive';

let mobileWidth = 480;
const dropdownDiv = document.getElementById('dropdown');
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownMenuBtn = document.getElementById('dropdown-menu-btn');

mtDropdownResp(dropdownMenuBtn, dropdownMenu, dropdownDiv, mobileWidth, styleProfile);

import { mtImageSlider } from './mt_image_slider';

import nbpic01 from './pic_newborn-01.jpg';
import nbpic02 from './pic_newborn-02.jpg';
import nbpic03 from './pic_newborn-03.jpg';
import nbpic04 from './pic_newborn-04.jpg';
import nbpic05 from './pic_newborn-05.jpg';
import { doc } from 'prettier';

const pic1 = new Image();
const pic2 = new Image();
const pic3 = new Image();
const pic4 = new Image();
const pic5 = new Image();

pic1.src = nbpic01;
pic2.src = nbpic02;
pic3.src = nbpic03;
pic4.src = nbpic04;
pic5.src = nbpic05;

const slider = document.getElementById('slider');
const picFrameInner = document.getElementById('pic-frame-inner');

const sliderPics = [pic1, pic2, pic3, pic4, pic5];
const sliderBtnLeft = document.getElementById('slider-btn-left');
const sliderBtnRight = document.getElementById('slider-btn-right');

mtImageSlider(picFrameInner, slider, sliderBtnLeft, sliderBtnRight, sliderPics);
'use strict';
import greet from './js/greet.js';
//main stilius
import './css/main.css';
import img from './images/img1.jpg';
import bart from './images/bart.png';

const image = document.createElement('img');
const bartPng = document.createElement('img');

image.src = img;
bartPng.src = bart;

document.body.appendChild(image);
document.body.appendChild(bartPng);

const whatHeSaid = 'Laba diena, kaip gyvenate?';
console.log(greet(whatHeSaid));

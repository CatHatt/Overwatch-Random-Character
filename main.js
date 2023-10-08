"use strict";
//import { characters } from "./characters/characters.js";
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.drawImage(getHTMLImage('./characters/images/ana.png'), 0, 0);

function getHTMLImage(src) {
    let img = document.createElement('img');
    img.src = src;
    return img;
}
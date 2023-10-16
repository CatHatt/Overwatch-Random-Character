"use strict";

// Create starting variables
const SPACING = 5;
const IMAGE_SIZE = {
    WIDTH: 256,
    HEIGHT: 256
}
let speed = 0.01;
const characters = [];
const currentCharacters = [];
let offset = 0;
let midpoint;


function preload() {
    //Load in all images for p5.js
    for (const character of ogCharacters) {
        let tempCharacter = {...character};
        tempCharacter.loadedImage = loadImage(character.imageSrc);
        characters.push(tempCharacter);
    }
}

function setup() {
    //Create canvas and edit variables that require p5.js to have started
    createCanvas(1500, IMAGE_SIZE.HEIGHT, document.getElementById('canvas'));
    document.getElementsByClassName('canvasHolder')[0].style.height = height+'px';
    midpoint = width/(IMAGE_SIZE.WIDTH + SPACING)/2;
}

function draw() {
    background(color('#151515'));
    if (speed > 0) speed-=0.0001;
    offset-=speed;
    while (offset < -1 && currentCharacters.length > 0) {
        console.log(currentCharacters.shift().name);
        offset = offset % 1;
    }
    while (currentCharacters.length < width/(IMAGE_SIZE.WIDTH+SPACING)+1) {
        currentCharacters.push(characters[floor(random(0, characters.length))])
    }

    for (let i = 0; i < currentCharacters.length; i++) {
        if (!(i - midpoint > -0.5 && i - midpoint < 0.5)) {tint(255, 50)} else noTint();
        image(currentCharacters[i].loadedImage, (IMAGE_SIZE.WIDTH + SPACING)*i + offset*(IMAGE_SIZE.WIDTH + SPACING), 0, IMAGE_SIZE.WIDTH, IMAGE_SIZE.HEIGHT);
    }
}

document.addEventListener('keydown', (key) => {
    if (key.code != 'Space') return;
    speed+=0.01;
})
"use strict";

// Create starting variables
const SPACING = 5;
const IMAGE_SIZE = {
    WIDTH: 256,
    HEIGHT: 256
}
let characters = [];
let currentCharacters;
let offset = 0;


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
    createCanvas((IMAGE_SIZE.WIDTH + SPACING)*3, IMAGE_SIZE.HEIGHT);
    currentCharacters = [...characters]
}

function draw() {
    background(225);
    offset-=0.01;
    console.log(offset)
    /*if (offset > 0) {
        currentCharacters.pop();
        offset = offset % 1;
    } else*/ if (offset < -1) {
        currentCharacters.shift();
        offset = offset % 1;
    }
    for (let i = 0; i < currentCharacters.length; i++) {
        image(currentCharacters[i].loadedImage, (IMAGE_SIZE.WIDTH + SPACING)*i + offset * (IMAGE_SIZE.WIDTH + SPACING), 0, IMAGE_SIZE.WIDTH, IMAGE_SIZE.HEIGHT);
    }
}
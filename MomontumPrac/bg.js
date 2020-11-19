const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImg(randomNumber){
    const image = new Image();
    image.src = `../images/${randomNumber}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom(){
    const randomNumber = Math.floor(Math.random()*IMG_NUMBER+1);
    return randomNumber;
}

function init(){
    const randomNumber = genRandom();
    paintImg(randomNumber);
}

init();
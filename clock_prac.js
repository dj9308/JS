const clockClass = document.querySelector(".js-clock");
const clockH1 = clockClass.querySelector("h1");

function getClock(){
    let date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockH1.innerText = `${hours < 10 ? `0${hours}`:hours}:${
        minutes < 10 ? `0${minutes}`:minutes}:${
            seconds < 10 ? `0${seconds}`:seconds}`;
    
}

function init(){
    getClock();
    setInterval(getClock,1000);
}

init();
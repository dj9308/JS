const weatherSpan = document.querySelector(".js-weather");

const COORDS = "coords",
    API_KEY = "";

function getWeather(lat,lng) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function(response){
            return response.json();
        }).then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weatherSpan.innerText = `${temperature} @ ${place}`;
        });
}

function saveCoords(Obj){
    localStorage.setItem(COORDS,JSON.stringify(Obj));
}

function getSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function getFail(){
    console.log("can't access geo location");
}

function askForcoords(){
    navigator.geolocation.getCurrentPosition(getSuccess,getFail);
}

function loadCoords(){
    const coords = localStorage.getItem(COORDS);
    if(coords!==null){
        const parsedCoords = JSON.parse(coords);
        getWeather(parsedCoords.latitude,parsedCoords.longitude);
    }else{
        askForcoords();
    }
}

function init(){
    loadCoords();
}

init();
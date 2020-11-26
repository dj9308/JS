const weather = document.querySelector(".js-weather");

const API_KEY = "";
const COORDS = `coords`;

function getWeather(lat,lon){
    //fetch : 데이터를 가져올때 사용하는 함수
    //then : 데이터가 넘어왔을때(성공 시)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    const coordsObj ={
        // 변수와 파라미터가 같을 경우 이렇게 써도 됨.
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log("cant access geo location");
}

function askForcoords(){
    //navigator api 사용
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);
    if(loadedCords ===null){
        askForcoords();
    }else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude,parseCoords.longitude)
    }
}

function init(){
    loadCoords();
}

init();
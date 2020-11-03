const API_KEY = "";
console.log(API_KEY);
const COORDS = `coords`;

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

    }
}

function init(){
    loadCoords();
}

init();
const select = document.querySelector("select");

const KEY = "country";

function loadCountry(){
    const loadedCountry = localStorage.getItem(KEY);
    if(loadedCountry!= null){
        select.value=loadedCountry;
    }
 }

function saveCountry(value){
    localStorage.setItem(KEY,value);
}

function changeHandler(event){
    const value = event.target.value;
    saveCountry(value);
}

function init(){
    loadCountry();
    select.addEventListener("change",changeHandler);
}

init(); 
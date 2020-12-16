const greetingForm = document.querySelector(".js-form"),
    greetingInput = greetingForm.querySelector("input");
    greetingH4 = document.querySelector(".js-greetings");

const NAME_KEY = 'name',
    SHOWING_ON = 'showing',
    SHOWING_OFF = 'form';

function saveName(name){
    localStorage.setItem(NAME_KEY,name);
}

function handleSubmit(event){
    event.preventDefault();
    const name = greetingInput.value;
    paintGreeting(name);
    saveName(name);
}

function askForName(){
    greetingForm.classList.add(SHOWING_ON);
    greetingForm.addEventListener('submit',handleSubmit);
    
}

function paintGreeting(name){
    greetingForm.classList.remove(SHOWING_ON);
    greetingH4.classList.add(SHOWING_ON);
    greetingH4.innerText = `Hello ${name}!`;
}

function init(){
    const loadedName = localStorage.getItem(NAME_KEY);
    if(loadedName != null){
        paintGreeting(loadedName);
    }else{
        askForName();
    }
}

init();
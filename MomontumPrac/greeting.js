const container = document.querySelector(".js-greeting"),
input = form.querySelector("input");
greetingH4 = container.querySelector("h4");

const USERNAME = "name";

function askName(){

}

function paintGreeting(){
    greetingH4.innerText = `Hello! ${currentUser}`;
    container.classList.remove("i")
}

function loadName(){
    const currentUser = localStorage.getItem(USERNAME);
    if(currentUser === null){
        askName();
    }else{
        paintGreeting();
    }
}

function init(){
    loadName();
}

init();
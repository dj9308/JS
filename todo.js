const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoLIst = document.querySelector(".js-todoList");

const TODO_LS = 'toDos';

const toDos = [];

function saveToDos(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length+1;
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    toDoLIst.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    const toDoObj = { // local Storage에도 todolist 저장위해.
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function loadToDos(){
    const loadedToDos= localStorage.getItem(TODO_LS);
    if(loadedToDos!==null){
     const parsedToDos = JSON.parse(loadedToDos);
     parsedToDos.forEach(function(toDo){
         console.log(toDo.text);
     })   
    }
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();

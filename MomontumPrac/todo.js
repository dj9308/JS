const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TD_LIST = "todoList";

let toDos = []; 

function saveToDos(){
    localStorage.setItem(TD_LIST,JSON.stringify(toDos));
}

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    todoList.removeChild(li);
    const cleanToDo = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDo;
    saveToDos();
}

function paintToDo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
    span.innerText = text;
    newId = toDos.length+1;

    todoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;

    const toDoObj = {
        id : newId,
        text : text
    };

    toDos.push(toDoObj);
    saveToDos();
}

function loadToDos(){
    const storageList = localStorage.getItem(TD_LIST);

    if(storageList!==null){
        const parsedList = JSON.parse(storageList);
        parsedList.forEach(function(toDo){
            paintToDo(toDo.text);
        });   
    }
}

function submitHandler(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",submitHandler);
}

init();
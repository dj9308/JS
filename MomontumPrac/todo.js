const toDoForm = document.querySelector(".js-todoLForm"),
    toDoInput = toDoForm.querySelector("input"),
    todoList = document.querySelector(".js-todoList");

const TODOLIST = "todolist";

let toDos = [];

function saveToDos(){

}

function deleteToDo(){
    
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length+1;
    delBtn.innerText = "💥";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    span.innerText=text;
    todoList.appendChild(li);
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    const toDoObj = {
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadToDos(){
    const loaderToDos = localStorage.getItem(TODOLIST);
    if(loaderToDos!==null){
        const parsedToDos = JSON.parse(loaderToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();
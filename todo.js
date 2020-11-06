const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoLIst = document.querySelector(".js-todoList");

const TODO_LS = 'toDos';

function filterFn(toDo){
    return toDo.id ===1
}

let toDos = [];

function deleteToDo(event){
    const btn= event.target;
    const li = btn.parentNode;
    toDoLIst.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== 	(li.id);
    });
    //filter: array의 모든 아이템을 통해 함수를 실행함
    //filter의 파라미터는 함수로, 참인 것만 return해서 array를 채움
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const newId = toDos.length+1;
    delBtn.innerText = "❌";
    delBtn.addEventListener("click",deleteToDo);
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
         paintToDo(toDo.text); 
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

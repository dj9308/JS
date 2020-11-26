const toDoForm = document.querySelector(".js-toDoForm"),
    toDoForm_input = toDoForm.querySelector("input"),
    toDoLi = document.querySelector(".js-todoList");

const TODOLIST = "todolist";

const ToDos = [];

function deleteList(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoLi.removeChild(li);
    const cleanToDos = ToDos.filter(
        function(list){W
            return list.id !== parseInt(li.id);
        }
    )
    console.log(cleanToDos[0].text);
    ToDos = cleanToDos;
    SaveToDos();
}


function loadList(){
    const storageList = localStorage.getItem(TODOLIST);
    if(storageList!==null){
       const parsedList = JSON.parse(storageList);
       parsedList.forEach(function(toDo){
        paintList(toDo.text);
       });
    }
}

function SaveToDos(){
    localStorage.setItem(TODOLIST,JSON.stringify(ToDos));
}

function paintList(text){
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const id = ToDos.length+1;
    li.id=id;
    span.innerText = text;
    btn.innerText="❌";
    btn.addEventListener("click", deleteList);
    toDoLi.appendChild(li);
    li.appendChild(btn);
    li.appendChild(span);

    const toDoObj = {
        text : text,
        id : id
    };
    ToDos.push(toDoObj);
    SaveToDos();
}

function submitHandler(event){
    console.log("hi");
    event.preventDefault();
    const form_value = toDoForm_input.value;
    paintList(form_value);
    toDoForm_input.value = "";
    
}

function init(){
    loadList();
    toDoForm.addEventListener("submit",submitHandler);
};

init();
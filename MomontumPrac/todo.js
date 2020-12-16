const form = document.querySelector('.js-toDoForm'),
    input = form.querySelector('input'),
    ul = document.querySelector('.js-todoList');

    
    const TODO_KEY = 'toDo';
    
    let listAry = [];
    
function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    ul.removeChild(li);
    const cleanToDos = listAry.filter(function(toDo){
        return toDo.id != parseInt(li.id);
    });
    listAry = cleanToDos;
    saveToDo();
}

function saveToDo(){
    localStorage.setItem(TODO_KEY,JSON.stringify(listAry));
}

function paintToDo(toDo){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    
    li.id = listAry.length+1;
    span.innerText = toDo;
    delBtn.innerText = "❌";
    delBtn.addEventListener('click',deleteToDo);
    li.appendChild(span);
    li.appendChild(delBtn);
    ul.appendChild(li);
    
    const toDoObj = {
        text : toDo,
        id  : li.id
    };
    listAry.push(toDoObj);
    saveToDo();
}

function submitHandler(event){
    event.preventDefault();
    const content = input.value;
    paintToDo(content);
    input.value='';
}

function init(){
    form.addEventListener('submit',submitHandler);
    const loadedList = localStorage.getItem(TODO_KEY);
    const parsedList = JSON.parse(loadedList);
    if(parsedList!=null){
        parsedList.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
    
}

init();


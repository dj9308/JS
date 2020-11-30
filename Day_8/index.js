const pendingUl = document.querySelector("#Pending"),
  finishedUl = document.querySelector("#Finished"),
  taskForm = document.querySelector(".toDoForm"),
  taskInput = taskForm.querySelector("input");

const PENDINGKEY = "pendingList";
const FINISHEDKEY = "finishedList";

let pend = [],
  finish = [];

function deletePendingList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingUl.removeChild(li);
  const cleanPend = pend.filter(function (list) {
    return list.id !== li.id;
  });
  pend = cleanPend;
  savePendingList();
}

function deleteFinishedList(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedUl.removeChild(li);
  const cleanFinish = finish.filter(function (list) {
    return list.id !== li.id;
  });
  finish = cleanFinish;
  saveFinishedList();
}

function saveFinishedList() {
  localStorage.setItem(FINISHEDKEY, JSON.stringify(finish));
}

function savePendingList() {
  localStorage.setItem(PENDINGKEY,JSON.stringify(pend));
}

function paintPendingList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const doneBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = "pend-" + pend.length + 1;
  span.innerText = text;
  li.id = newId;
  delBtn.innerText = "❌";
  doneBtn.innerText = "✅";
  delBtn.addEventListener("click", deletePendingList);
  doneBtn.addEventListener("click", function (event) {
    paintFinishedList(text);
    deletePendingList(event);
  });
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(doneBtn);
  pendingUl.appendChild(li);
  const pendingObj = {
    text: text,
    id: newId
  };
  pend.push(pendingObj);
  savePendingList();
}

function paintFinishedList(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const backBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = "finish-" + finish.length + 1;
  li.id = newId;
  span.innerText = text;
  delBtn.innerText = "❌";
  backBtn.innerText = "⏪";
  delBtn.addEventListener("click", deleteFinishedList);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  finishedUl.appendChild(li);
  backBtn.addEventListener("click", function (event) {
    paintPendingList(text);
    deleteFinishedList(event);
  });
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  const finishObj = {
    text: text,
    id: newId
  };
  finish.push(finishObj);
  saveFinishedList();
}

function loadList() {
  const pendingList = localStorage.getItem(PENDINGKEY);
  const finishedList = localStorage.getItem(FINISHEDKEY);

  if (pendingList != null) {
    const parsedPending = JSON.parse(pendingList);
    parsedPending.forEach(function (pending) {
      paintPendingList(pending.text);
    });
  }
  if (finishedList != null) {
    const parsedFinished = JSON.parse(finishedList);
    parsedFinished.forEach(function (Finished) {
      paintFinishedList(Finished.text);
    });
  }
}

function submitHandler(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintPendingList(currentValue);
  taskInput.value = "";
}

function init() {
  loadList();
  taskForm.addEventListener("submit", submitHandler);
}

init();

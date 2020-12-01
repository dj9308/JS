const h2 = document.querySelector("#H2"),
  range = document.querySelector("#range"),
  formNum = document.querySelector("#formNum"),
  form = document.querySelector("form"),
  chknumber = document.querySelector("#chkNum"),
  chkWin = document.querySelector("#chkWin");

let ran_number = range.value;

function changeRanNum() {
  ran_number = range.value;
  h2.innerText = `Generate a number between 0 and ${ran_number}`;
}

function chkNum(num1,num2) {
  if (num1 === num2) {
    chkWin.innerText = "You won!";
  } else {
    chkWin.innerText = "You lost!";
  }
}

function GenRandom() {
  const number = Math.floor(Math.random() * ran_number + 1);
  return number;
}

function submitHandler(event) {
    event.preventDefault();
    let number = formNum.value;
    number *=1;
    const genNumber = GenRandom();
    chknumber.innerText = `You chose: ${number}, the machine chose: ${genNumber}`;
    chkNum(number, genNumber);
}

function init() {
  range.addEventListener("change", changeRanNum);
  h2.innerText = `Generate a number between 0 and ${ran_number}`;
  form.addEventListener("submit", submitHandler);
}

init();

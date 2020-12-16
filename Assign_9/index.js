const display = document.querySelector("#display"),
resetBtn = document.querySelector("#reset"),
calculateBtn = document.querySelector("#calculate"),
numBtn = document.querySelector(".num")
operBtn = document.querySelector(".oper");

let formula = '';
let OverlapOperator = false;
let chkSecondNum = false;
let chkFirstOperator = false;
let chkZero = true;

function add (event) {
    let char = event.target.innerText;
    console.log(char);
    if(Number.isInteger(char)){
        if(chkZero || chkSecondNum){
            display.value = '';
            chkZero = false;
            chkSecondNum = false;
        }
        display.value+=char;
        console.log(display.value);
        formula+=char;
        chkFirstOperator = true;
    }else if(chkFirstOperator){
        console.log("?");
        if(!OverlapOperator){
            formula+=char;
        }else{
            calculate();
        }
        chkSecondNum = true;
        OverlapOperator = true;
    }
    console.log(formula);
}

function calculate() {
  const operation = doOperation();
  result.innerHTML = operation;
  firstValue = operation;
  secondDone = false;
  secondValue = "";
}

function handleOperationClick(e) {
  const clickedOperation = e.target.innerText;
  if (!firstDone) {
    firstDone = true;
  }
  if (firstDone && secondDone) {
    calculate();0
  }
  currentOperation = clickedOperation;
}

function handleReset() {
  firstValue = "";
  secondValue = "";
  firstDone = false;
  secondDone = false;
  currentOperation = null;
  result.innerHTML = "0";
}

function init(){
    resetBtn.addEventListener("click", reset);
    calculateBtn.addEventListener("click", calculate);
    operBtn.addEventListener("click",add);
    numBtn.addEventListener("click",function(){
        console.log("hi");
    });
}

numbers.forEach(function(number) {
  number.addEventListener("click", handleNumberClick);
});
operations.forEach(function(operation) {
  operation.addEventListener("click", handleOperationClick);
});
reset.addEventListener("click", handleReset);
equals.addEventListener("click", handleEqualsClick);

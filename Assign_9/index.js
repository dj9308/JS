const display = document.querySelector("#display");

let formula = '';
let OverlapOperator = false;
let chkSecondNum = false;
let chkFirstOperator = false;
let chkZero = true;

function add (char) {
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
    OverlapOperator = false;
    const result = eval(formula);
    display.value = result;
    formula = result;
}
function reset() {
    chkZero = true;
    chkSecondNum = false;
    chkFirstOperator = false;
    OverlapOperator = false;
    formula='';
    display.value = 0;
}
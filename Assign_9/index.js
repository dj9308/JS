const display = document.querySelector("#display");

let formula = '';

let numberClicked = false;
let zeroChk = true;
let secondNum = false;

function add (char) {
    if(zeroChk){
        display.value='';
    }

    if(numberClicked == false) {
        if(isNaN(char) != true) {
            if(secondNum){
                display.value='';
            }
            formula+=char;
            display.value += char; 
        }
    } else { 
        formula+=char;
        secondNum = true;
    }

    if(isNaN(char) == true) {
        numberClicked = false;
    } else {
        numberClicked = true;
    }
}
function calculate() {
    const result = eval(formula);
    display.value = result;
}
function reset() {
    zeroChk = true;
    display.value = 0;
}
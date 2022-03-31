function add(a,b) {
  return a+b;
}

function sub(a,b) {
  return a-b;
}

function multi(a,b) {
  return a*b;
}

function div(a,b) {
  return a/b;
}

function operator(a,b,sign) {
  a = parseInt(a);
  b = parseInt(b);
  if (sign === '+'){
    return add(a,b);
  }else if (sign === '-'){
    return sub(a,b);
  }else if (sign === '×'){
    return multi(a,b);
  }else if (sign === '÷'){
    return div(a,b);
  }
}

let firstNumber;
let secondNumber;
let currentNumber;
let currentOperator;

function updateCurrentResult(a) {
  currentResult = a;
}

function updateFirstNumber(a) {
  firstNumber = a;
}

function updateSecondNumber(a) {
  secondNumber = a;
}

function updateCurrentOperator(a) {
  currentOperator = a;
}

function updateCurrentNumber(a) {
  if (!currentNumber){
    currentNumber = a;
  }else{
    currentNumber += a;
  }
}

function clearOperations() {
  firstNumber = undefined;
  secondNumber= undefined;
  currentNumber= undefined;
  currentOperator= undefined;
}

const operatorBtns = document.querySelectorAll(".operators")
const numberBtns = document.querySelectorAll(".numbers")

numberBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateCurrentNumber(e.target.innerHTML);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (!firstNumber){
      updateFirstNumber(currentNumber);
    }else{
      updateSecondNumber(currentNumber);
      updateFirstNumber(operator(firstNumber,secondNumber,currentOperator));
    }
    updateCurrentOperator(e.target.innerHTML);
    if (currentOperator === '='){
      console.log(firstNumber);
      clearOperations();
    }
    currentNumber = undefined;
  });
});

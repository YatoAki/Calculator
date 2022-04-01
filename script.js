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
  displayInput.innerHTML = '';
  displayResult.innerHTML = firstNumber + ' ' + currentOperator;
}

function updateCurrentNumber(a) {
  if (!currentNumber){
    currentNumber = a;
  }else{
    currentNumber += a;
  }
  displayInput.innerHTML = currentNumber;
}

function clearOperations() {
  firstNumber = undefined;
  secondNumber= undefined;
  currentNumber= undefined;
  currentOperator= undefined;
}

const operatorBtns = document.querySelectorAll(".operators")
const numberBtns = document.querySelectorAll(".numbers")
const clearBtn = document.querySelector(".clear")
const displayResult = document.querySelector(".result")
const displayInput = document.querySelector(".input")

numberBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateCurrentNumber(e.target.innerHTML);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (!currentNumber) return;
    if (!firstNumber){
      updateFirstNumber(currentNumber);
    }else{
      updateSecondNumber(currentNumber);
      updateFirstNumber(operator(firstNumber,secondNumber,currentOperator));
    }
    if (e.target.innerHTML === '='){
      displayResult.innerHTML = firstNumber;
      displayInput.innerHTML = '';
      clearOperations();
    }else{
      updateCurrentOperator(e.target.innerHTML);
    }
    currentNumber = undefined;
  });
});

clearBtn.addEventListener('click', (e) => {
  clearOperations();
  displayResult.innerHTML = '';
  displayInput.innerHTML = '';
})

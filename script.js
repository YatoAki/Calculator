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
  if (sign === '+'){
    return add(a,b)
  }else if (sign === '-'){
    return sub(a,b)
  }else if (sign === '×'){
    return multi(a,b)
  }else if (sign === '÷'){
    return div(a,b)
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

const operatorBtns = document.querySelectorAll(".operators")
const numberBtns = document.querySelectorAll(".numbers")

numberBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateCurrentNumber(e.target.innerHTML);
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    updateCurrentResult(e.target.innerHTML);
    if (!firstNumber){
      updateFirstNumber(currentNumber);
      console.log(firstNumber);
    }else{
      updateSecondNumber(currentNumber);
      console.log(secondNumber);
    }
    currentNumber = undefined;
  });
});

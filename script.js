'use strict';
const numbersBtn = document.querySelectorAll('[data-number]');
const operationsBtn = document.querySelectorAll('[data-operation]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const signBtn = document.querySelector('[data-sign]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

let operation = null;
let current = '';
let previous = '';
let result = '';

numbersBtn.forEach((number) => {
  number.dataset.number = number.textContent;
});

operationsBtn.forEach((operation) => {
  operation.dataset.operation = operation.textContent;
});

// displaying numbers
numbersBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    const { number } = e.target.dataset;
    let displayStr = currentOperand.textContent;
    displayStr === '0'
      ? (currentOperand.textContent = number)
      : (currentOperand.textContent += number);
    // check if decimal point is already pressed
    if (displayStr.includes('.') === true) {
      document.querySelector('.dot').disabled = true;
    } else {
      document.querySelector('.dot').disabled = false;
    }
  });
});

const setOperation = (operator) => {
  operation = operator;
  current = currentOperand.textContent;
  previousOperand.textContent = `${current} ${operation}`;
  currentOperand.textContent = 0;
  previous = current;
};
operationsBtn.forEach((button) => {
  button.addEventListener('click', () => setOperation(button.textContent));
});

// clear button
clearBtn.addEventListener('click', () => {
  const clear = () => {
    currentOperand.textContent = '0';
    previousOperand.textContent = '';
    document.querySelector('.dot').disabled = false;
  };
  return clear();
});

// delete button
deleteBtn.addEventListener('click', () => {
  if (currentOperand.textContent !== '0') {
    currentOperand.textContent = currentOperand.textContent.substring(
      0,
      currentOperand.textContent.length - 1
    );
  }
  if (currentOperand.textContent === '') {
    currentOperand.textContent = '0';
  }
});

// sign
signBtn.addEventListener('click', () => {
  if (currentOperand.textContent === '0') {
    currentOperand.textContent = '-';
  } else {
    let displayArr = currentOperand.textContent.split('');
    // if display number is negative, delete '-'
    if (displayArr[0] === '-') {
      displayArr.shift();
      currentOperand.textContent = displayArr.join('');
    } else {
      displayArr.unshift('-');
      currentOperand.textContent = displayArr.join('');
    }
  }
  if (currentOperand.textContent === '') {
    currentOperand.textContent = '0';
  }
});

// equals button functionality
equalsBtn.addEventListener('click', () => {
  currentOperand.textContent = operate(
    previous,
    currentOperand.textContent,
    operation
  );
});

// addition
const add = (a, b) => {
  return a + b;
};

// subtraction
const subtract = (a, b) => {
  return a - b;
};

// multiplication
const multiply = (a, b) => {
  return a * b;
};

// division
const divide = (a, b) => {
  return a / b;
};

const operate = (a, b, operator) => {
  let num1 = parseFloat(a);
  let num2 = parseFloat(b);
  let result = 0;
  switch (operator) {
    case '+':
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
  }
  return result;
};

'use strict';
const numbersBtn = document.querySelectorAll('[data-number]');
const operationsBtn = document.querySelectorAll('[data-operations]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');

// displaying numbers
numbersBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    currentOperand.textContent === '0'
      ? (currentOperand.textContent = e.target.textContent)
      : (currentOperand.textContent += e.target.textContent);
  });
});

// clear button
clearBtn.addEventListener('click', () => {
  const clear = () => {
    currentOperand.textContent = '0';
  };
  return clear();
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

// fuction that computes the result when user press '=' button
const operate = (operator, a, b) => {
  if (operator === 'add') {
    return add(a, b);
  } else if (operator === 'subtract') {
    return subtract(a, b);
  } else if (operator === 'multiply') {
    return multiply(a, b);
  } else if (operator === 'divide') {
    return divide(a, b);
  }
};

// const deleteFunc = () => {};

// const appendNumber = (number) => {};

// const chooseOperation = (operation) => {};

// const compute = () => {};

// const updateDisplay = () => {};

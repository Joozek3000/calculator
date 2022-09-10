'use strict';
const numbersBtn = document.querySelectorAll('[data-number]');
const operationsBtn = document.querySelectorAll('[data-operations]');
const equalsBtn = document.querySelector('[data-equals]');
const clearBtn = document.querySelector('[data-all-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const signBtn = document.querySelector('[data-sign]');
const previousOperand = document.querySelector('[data-previous-operand]');
const currentOperand = document.querySelector('[data-current-operand]');
const fuctionBtn = document.querySelectorAll('.function-button');

numbersBtn.forEach((number) => {
  number.dataset.number = number.textContent;
});

// displaying numbers
numbersBtn.forEach((button) => {
  button.addEventListener('click', (e) => {
    let displayStr = currentOperand.textContent;
    displayStr === '0'
      ? (currentOperand.textContent = e.target.textContent)
      : (currentOperand.textContent += e.target.textContent);
    // check if decimal point is already pressed
    if (displayStr.includes('.') === true) {
      document.querySelector('.dot').disabled = true;
    } else {
      document.querySelector('.dot').disabled = false;
    }
  });
});

// function buttons
fuctionBtn.forEach((button) => {
  button.addEventListener('click', (e) => {});
});

// clear button
clearBtn.addEventListener('click', () => {
  const clear = () => {
    currentOperand.textContent = '0';
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

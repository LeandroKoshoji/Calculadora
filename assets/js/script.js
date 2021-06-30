const display = document.querySelector('[data-js="display"]')
const auxDisplay = document.querySelector('[data-js="display-aux"]')
const numbersButtons = document.querySelectorAll('[data-js="number"]')
const operationButtons = document.querySelectorAll('[data-js="operator"]')
const equalButton = document.querySelector('[data-js="equal"]')
const clearAllButton = document.querySelector('[data-js="clearAll"]')

let firstValue = 0
let secondValue = 0
let operator = ''

const doOperation = (firstValue, operator, secondValue) => {
  const operations = {
    '+': firstValue + secondValue,
    '-': firstValue - secondValue,
    '/': firstValue / secondValue,
    'x': firstValue * secondValue,
    '%': firstValue * 0.01,
  }
  return operations[operator]
}

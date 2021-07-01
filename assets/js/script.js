const display = document.querySelector('[data-js="display"]')
const auxDisplay = document.querySelector('[data-js="display-aux"]')
const keys = document.querySelector('.calculator__keys')

let firstValue = 0
let secondValue = 0
let operator = ''

const doOperation = (firstValue, operator, secondValue) => {
  const operations = {
    '+': firstValue + secondValue,
    '-': firstValue - secondValue,
    '/': firstValue / secondValue,
    x: firstValue * secondValue,
    '%': firstValue * 0.01,
  }
  return operations[operator]
}

const clearAll = () => {
  display.textContent = ''
  auxDisplay.textContent = ''
  firstValue = 0
  secondValue = 0
  operator = ''
}

keys.addEventListener('click', event => {
  const clickedEl = event.target
  const isDataNumber = clickedEl.dataset.js === 'number'
  const isDataOperator = clickedEl.dataset.js === 'operator'
  const isDataEqual = clickedEl.dataset.js === 'equal'
  const isDataClearAll = clickedEl.dataset.js === 'clearAll'

  if (isDataNumber) {
    const isDotInserted = clickedEl.textContent === '.' && display.textContent.includes('.')

    if (isDotInserted) return

    display.textContent += clickedEl.textContent
  }

  if (isDataOperator) {
    const isDisplayEmpty = display.textContent === ''
    if (isDisplayEmpty) return

    firstValue = Number(display.textContent)
    operator = clickedEl.textContent
    auxDisplay.textContent = firstValue + operator
    display.textContent = ''
  }

  if (isDataEqual) {
    secondValue = Number(display.textContent)
    auxDisplay.textContent += secondValue
    display.textContent = doOperation(firstValue, operator, secondValue)
    firstValue = display.textContent
  }

  if (isDataClearAll) {
    clearAll()
  }
})

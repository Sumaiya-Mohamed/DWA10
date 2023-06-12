const MAX_NUMBER = 15  
const MIN_NUMBER = -5 

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')


const subtractHandler = () => {
  const newValue = parseInt(number.value) - 1 
  number.value = newValue 

  if (add.disabled === true) {
    add.disabled = false
  }

  if (newValue <= MIN_NUMBER) {
    subtract.disabled = true
  } else {
    subtract.disabled = false
  }
}

const addHandler = () => {
  const newValue = parseInt(number.value) + 1
  number.value = newValue 

  if (subtract.disabled === true) {
    subtract.disabled = false
  }

  if (newValue >= MAX_NUMBER) {
    add.disabled = true
  } else {
    add.disabled = false
  }
}

subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)


 const resetButton = document.querySelector('[data-reset]')
 resetButton.addEventListener('click', () => {
  number.value = 0
  throw new Error ('Counter has been reset')
 })
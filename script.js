const taskOneInputs = document.querySelectorAll('.task-1');
const submitBtn = document.querySelector('#submit-button ');
const errorContainer = document.querySelector('#error');
const outputContainer = document.querySelector('.output-container');
const result = document.querySelector('#result');
submitBtn.addEventListener('click', checkData)

function checkData() {
  if (verifyInputs()) {
    calculateTriangle()
  }
}

function verifyInputs() {
  for (input of taskOneInputs) {
    if (input.value === '') {
      setError('All angles are required')
      return false
    }
    else if (Number(input.value) <= 0) {
      setError('Input invalid, please provide positive integers.')
      return false
    }
  }
  hideError()
  return true
}


function calculateTriangle() {
  let totalAngle = 0
  for (input of taskOneInputs) {
    totalAngle = totalAngle + (+input.value)
  }
  if (totalAngle === 180) {
    setOutput(`Woohoo, This is a Triangle 🎇`)
  }
  else {
    setOutput(`Nope, not a triangle buddy 😪`)
  }
}

function setError(errMessage) {
  errorContainer.style.display = 'block'
  errorContainer.innerText = errMessage;
  hideOutput();
}

function hideError() {
  errorContainer.style.display = 'none'
}

function setOutput(outputMessage) {
  result.innerText = outputMessage;
  outputContainer.style.display = 'block'
  hideError();
}

function hideOutput() {
  outputContainer.style.display = 'none'
  result.innerText = '';
}
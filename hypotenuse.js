const sideInputs = document.querySelectorAll('.side-inputs');
const submitBtn = document.querySelector('#submit-button ');
const errorContainer = document.querySelector('#error');
const outputContainer = document.querySelector('.output-container');
const result = document.querySelector('#result');
submitBtn.addEventListener('click', checkData)

function checkData() {
    if (verifyInputs()) {
        calculateHypotenuse(+sideInputs[0].value, +sideInputs[1].value)
    }
}

function verifyInputs() {
    for (input of sideInputs) {
        if (input.value === '') {
            setError('Both sides are required to calculate hypotenuse')
            return false
        }
        else if (Number(input.value) <= 0) {
            setError('Input invalid, please provide positive numbers.')
            return false
        }
    }
    hideError()
    return true
}


function calculateHypotenuse(sideA, sideB) {
    const hypotenuse = Math.sqrt((sideA * sideA) + (sideB * sideB)).toFixed(2);
    setOutput(`Hypotenuse is ${hypotenuse}`)
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
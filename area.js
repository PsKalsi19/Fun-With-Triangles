const shapesSelect = document.querySelector('#shapes');
const triangle = document.querySelector('#triangle');
const rectangle = document.querySelector('#rectangle');
const square = document.querySelector('#square');
const submitButtonContainer = document.querySelector('.submit-button-wrapper');
const submitButton = document.querySelector('#submit-button');
const squareInput = document.querySelector('.square-input');
const triangleInputs = document.querySelectorAll('.triangle-inputs');
const rectangleInputs = document.querySelectorAll('.rectangle-inputs');
const outputContainer = document.querySelector('.output-container')
const result = document.querySelector('#result')
const error = document.querySelector('#error')

shapesSelect.addEventListener('change', shapeSelected)
submitButton.addEventListener('click', verifyInputs)
function shapeSelected() {
    showSelected(shapesSelect.value);
}

function showSelected(selectedShape) {
    hideShapes();
    hideOutput();
    hideError();
    if (selectedShape === 'triangle') {
        triangle.style.display = 'block';
    }
    else if (selectedShape === 'rectangle') {
        rectangle.style.display = 'block';
    }
    else {
        square.style.display = 'block';
    }
    submitButtonContainer.style.display = 'flex'
}

// verifying inputs and proceeding
function verifyInputs() {
    const selectedShape = shapesSelect.value
    if (selectedShape === 'triangle') {
        if (verifyTriangle()) {
            calculateTriangleArea(+(triangleInputs[0].value), +(triangleInputs[1].value))
        }
    }
    else if (selectedShape === 'rectangle') {
        if (verifyRectangle()) {
            calculateRectangleArea(+(rectangleInputs[0].value), +(rectangleInputs[1].value))
        }

    }
    else {
        if (verifySquare()) {
            calculateSquareArea(+squareInput.value)
        }
    }
}

function verifyDefaultConditions(element) {
    if (element.value === '') {
        setError('All fields are mandatory.')
        return false
    }
    else if (Number(element.value) <= 0) {
        setError('Entered values should be a positive number.')
        return false
    }
    else {
        return true
    }
}

function verifyTriangle() {
    let isVerified = false
    for (let input of triangleInputs) {
        isVerified = verifyDefaultConditions(input)
    }
    return isVerified
}
function verifySquare() {
    return verifyDefaultConditions(squareInput)
}
function verifyRectangle() {
    let isVerified = false
    for (let input of rectangleInputs) {
        return verifyDefaultConditions(input)
    }
    return isVerified
}


// Calculation functions
function calculateTriangleArea(base, height) {
    if (base === 0 || height === 0) {
        setError('Please enter a valid value.');
        return;
    }
    hideError();
    const areaOfTriangle = ((base * height) / 2).toFixed(2)
    setOutput(`Area of Triangle is ${areaOfTriangle}`)
}
function calculateSquareArea(side) {
    hideError();
    const areaOfSquare = (side * side).toFixed(2)
    setOutput(`Area of Square is ${areaOfSquare}`)
}
function calculateRectangleArea(length, width) {
    if (length === 0 || width === 0) {
        setError('Please enter a valid value.');
        return;
    }
    hideError();
    const areaOfRectangle = (length * width).toFixed(2)
    setOutput(`Area of Rectangle is ${areaOfRectangle}`)
}

// Hide and show functions
function hideShapes() {
    square.style.display = 'none'
    triangle.style.display = 'none'
    rectangle.style.display = 'none'
}

function setError(errMessage) {
    error.style.display = 'block'
    error.innerText = errMessage;
    hideOutput();
}

function hideError() {
    error.style.display = 'none'
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
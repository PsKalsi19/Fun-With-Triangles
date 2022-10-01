const output = document.querySelector('#output');
const outputContainer = document.querySelector('.output-container');
const error = document.querySelector('#error');
const submit = document.querySelector('#submit-button');
const quizForm = document.querySelector('#triangle-quiz-form')
const solutions = ['90°', 'Right', 'Equilateral', 'Longest side of triangle']

submit.addEventListener('click', getFormData)

function getFormData() {
    let quizData = new FormData(quizForm);
    let index = 0
    let count = 0
    for (let value of quizData.values()) {
        if (value === solutions[index]) {
            count = count + 1;
        }
        index = index + 1
    }
    setOutput(`Your total score is ${count}`)
    if (index < solutions.length) {
        const remainingQuestion = solutions.length - index
        setError(`${remainingQuestion} questions are remaining to be answered.`)
    }
    else {
        hideError();
    }
}
function setError(errMessage) {
    error.style.display = 'block'
    error.innerText = errMessage;
}

function hideError() {
    error.style.display = 'none'
}

function setOutput(outputMessage) {
    output.innerText = outputMessage;
    outputContainer.style.display = 'block'
}
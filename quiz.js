const output = document.querySelector('#output');
const outputContainer = document.querySelector('.output-container');
const error = document.querySelector('#error');
const submit = document.querySelector('#submit-button');
const quizForm = document.querySelector('#triangle-quiz-form')
const solutions = ['90°', 'Right', 'Equilateral', 'Longest side of triangle', 'scalene triangle', 'isosceles triangle']

submit.addEventListener('click', getFormData)

function getFormData() {
    let quizData = new FormData(quizForm);
    let count = 0
    let index = 0
    for (let value of quizData.entries()) {
        let questionNumber = (+value[0]) - 1
        if (value[1] === solutions[questionNumber]) {
            count = count + 1;
        }
        index++
    }
    setOutput(`Your total score is ${count}`)
    if (index < solutions.length) {
        const remainingQuestion = solutions.length - index
        remainingQuestion === 1 ?
            setError(`${remainingQuestion} question is remaining to be answered.`) :
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
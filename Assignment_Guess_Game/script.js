let low = 1;
let high = 10;
let correctAnswer = Math.floor(Math.random() * (high - low + 1)) + low;
let chances = 3;

function guessNumber() {
    let userInput = document.getElementById('userInput').value;
    let hintElement = document.getElementById('hint');
    let chancesElement = document.getElementById('chances');
    let resultElement = document.getElementById('result');

    chances--;

    if (userInput == correctAnswer) {
        hintElement.innerHTML = 'You Win!';
        disableInputAndButton();
    } else if (userInput < correctAnswer) {
        hintElement.innerHTML = 'Correct answer is greater!';
    } else {
        hintElement.innerHTML = 'Correct answer is smaller!';
    }

    chancesElement.innerHTML = `Chances left: ${chances}`;

    if (chances === 0) {
        resultElement.innerHTML = 'You lose!';
        disableInputAndButton();
    }
}

function restartGame() {
    correctAnswer = Math.floor(Math.random() * (high - low + 1)) + low;
    chances = 3;
    enableInputAndButton();
    clearFeedback();
}

function disableInputAndButton() {
    document.getElementById('userInput').disabled = true;
    document.querySelector('button').disabled = true;
}

function enableInputAndButton() {
    document.getElementById('userInput').disabled = false;
    document.querySelector('button').disabled = false;
}

function clearFeedback() {
    document.getElementById('hint').innerHTML = '';
    document.getElementById('chances').innerHTML = '';
    document.getElementById('result').innerHTML = '';
}

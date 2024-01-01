function validateExpression() {
    var expressionType = document.getElementById('expressionType').value;
    var userInput = document.getElementById('userInput').value;
    var resultElement = document.getElementById('result');

    var regex;

    switch (expressionType) {
        case 'email':
            regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
            break;
        case 'phone':
            regex = /^\d{11}$/;
            break;
        case 'postal':
            regex = /^\d{4}$/;
            break;
        default:
            resultElement.innerHTML = 'Invalid expression type.';
            return;
    }

    if (regex.test(userInput)) {
        resultElement.innerHTML = 'Expression is valid.';
    } else {
        resultElement.innerHTML = 'Expression is invalid <br> <br> (For number: You have to input 11 numbers) <br> (For postal code: you have to input 4 numbers).';
    }
}

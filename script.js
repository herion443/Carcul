let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
    if (currentNumber.includes('.') && number === '.') return;
    currentNumber += number;
    updateDisplay();
}

function appendOperator(op) {
    if (currentNumber === '' && op !== '√') return;
    if (operator && currentNumber) {
        calculate();
    }
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    display.value = currentNumber || previousNumber || '0';
}

function calculate() {
    let result;
    let prev = parseFloat(previousNumber);
    let curr = parseFloat(currentNumber);

    if (isNaN(prev) && operator === '√') {
        result = Math.sqrt(curr);
    } else if (operator === '√') {
        result = Math.sqrt(prev);
    } else {
        if (isNaN(prev) || isNaN(curr)) return;
        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            case '^':
                result = Math.pow(prev, curr);
                break;
            default:
                return;
        }
    }
    currentNumber = result;
    operator = '';
    previousNumber = '';
    updateDisplay();
}

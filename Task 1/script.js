// script.js
let display = document.getElementById('display');

function appendNumber(number) {
    if(display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function chooseOperation(operator) {
    if(operator === '√') {
        display.innerText = Math.sqrt(display.innerText).toString();
    } else if(!display.innerText.includes(operator)) {
        display.innerText += operator;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deleteLast() {
    if(display.innerText.length === 1) {
        clearDisplay();
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch (e) {
        display.innerText = 'Error';
    }
}

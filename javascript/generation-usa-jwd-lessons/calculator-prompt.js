const prompt = require('prompt-sync')();

const add = (x,y) => x + y;

const subtract = (x,y) => x - y;

const multiply = (x,y) => x * y;

const divide = (x,y) => x / y;

const calculator = (x, y) => {
    let first = parseInt(prompt("Please enter your first number: "));
    let second = parseInt(prompt("Please enter your second number: "));
    let operator = prompt("Please select your desired operation: +, -, *, or /:");

    switch (operator) {

        case '+':
            console.log(add(first, second));
            break;
        case '-':
            console.log(subtract(first, second));
            break;
        case '*':
            console.log(multiply(first, second));
            break;
        case '/':
            console.log(divide(first, second));
            break;
        default:
            console.log("Not a valid operation.")
            break;
        }
};

calculator()
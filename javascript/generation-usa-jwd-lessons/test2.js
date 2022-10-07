"use strict";

// Scope

let a; // Global declaration
let b; // Global declaration
b = 15; // Global assignment

function fn() {
    let b; // Local variable, overrides global inside function
    let c = 20; // Local declaration
    globalVariableDeclaredInsideFunction = 50; //This won't work if you put "use strict"; at the top of the file
    a = true; 
    b = 10;
    console.log(b);
}

fn();
console.log("Outside a: " + a);
console.log("Outside b: " + b);
console.log("Outside: " + globalVariableDeclaredInsideFunction);


const constantA = 7;

function fn2() {
    console.log("This is the outer function.");
    function innerFn() {
        console.log("This is the inner function.");
        console.log(constantA);
    }
    innerFn();
}
fn2(); // This is the outer function. // This is the inner function. // 7
// innerFn(); // innerFn is not defined.

function calculateAmount() {
    let amount = 100;
    let tip = .20;
    let total = amount + (amount * tip);
    console.log(`The amount is $${amount}.`); //100

    function tipFn() {
        console.log(`The tip is ${amount} * ${tip}.`); //20
    }
    console.log(`The total amount is $${total}.`); //120
}
calculateAmount();

/*
'pure' vs 'impure' functions

pure functions only change local function scoped variables or parameters

impure functions may also change global variables
*/

function sum(x,y) {
    function mult(x,y){
        return x * y;
    }
    console.log(mult(x,y));
    return x + y;
}

const result = sum(10,20);
console.log(result);
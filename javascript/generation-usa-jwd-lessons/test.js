//Scope and this
function thisGlobal() {
    console.log(this)
}

// thisGlobal()
// prints out current scope which is global

class testObjectClass {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    testFunction(){
        console.log(this)
    }
}

let testObject1 = new testObjectClass("namey", "agey")
// console.log(testObject1)
// testObject1.testFunction()
// prints out the object

const newFunc = thisGlobal.bind(testObject1)
// newFunc()
// Because of bind the context of this is changed from global to being our object

const arrow = ()  => {
    console.log(this)
}

arrow()

function otherFunction(){
    arrow()
}

otherFunction()

document.getElementById("test").addEventListener("click", thisGlobal)

//Function and Class Stuff
// 1. function declaration
// function fn(x, y) {
//     console.log(x + y)
//     return x + y;
// }
// fn(4, 6)

// anonymous function expression
// function (x, y) {
//     console.log(x + y)
//     return x + y;
// };

// 2. anonymous function expression assigned to a variable
// const fn1 = function(x, y) {
//     console.log(x + y)
//     return x + y;
// }
// fn1(5,7)

// 3. named function assigned to the variable
// const fn2 = function sum(x, y) {
//     console.log(x + y)
//     return x + y;
// }
// fn2(5, 5);

// 4. IIFE - Immediately Invoke Anonymous Function Expression
// (function(x, y) {
//     console.log('IIFE is Executed');
//     console.log(x + y);
//     return x + y;
// })(4, 9);

// 5. IIF Immediately Invoke Function
// (function sum(x, y) {
//     console.log('IIF is Executed');
//     console.log(x + y)
//     return x + y
// })(3, 1);

// 6. callback function
// setTimeout(functionName, time)
// setTimeout(function(x, y) {
//     console.log('Callback function is executed')
//     return x + y;
// }, 1000);

// 7. named callback function
// setTimeout(function sum(x, y) {
//     console.log('Callback function is executed')
//     return x + y;
// }, 1000);

// If you have a function saved to a variable you could just use the variable here

// function print() {
//     console.log("print")
// }

// setTimeout(print, 1000);

// 8. Arrow Functions

// arrow = (varName) => {
//     console.log(varName)
// }
// arrow("hi")

// single parameter skip
// arrow2 = varName => {
//     console.log(varName)
// }
// arrow2("hi2")


// () are mandatory without any parameters
// arrow3 = () => {
//     console.log("something")
// }
// arrow3()

//explicit return of x + y
// arrow4 = (x, y) => {
//     return x + y
// }
// console.log(arrow4(2, 4))

// implicit return of x + y, don't need return and don't need {}
// arrow5 = (x, y) => x + y
// console.log(arrow5(2, 4))

// explicit return of the object
// arrow6 = (x, y) => {
//     return {
//         a: x,
//         b: y
//     }
// }
// console.log(arrow6("Attribute A", "Attribute B"))

// implicit return of the object, need to wrap the object in a ()
// arrow7 = (x, y) => ({
//         a: x,
//         b: y
//     })

// console.log(arrow7("Attribute c", "Attribute d"))

// (x, y) => ({
//     a: x,
//     b: y
// })

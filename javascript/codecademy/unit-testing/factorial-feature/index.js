/*
From Codecademy's Learn Javascript Unit Testing, Learn Test Driven Development With Mocha
https://www.codecademy.com/courses/learn-javascript-unit-testing/
*/

const Calculate = {
    factorial(inputNumber) {
  
      if (inputNumber === 0) {
        return 1;
      }
      
      for(let i = inputNumber - 1; i >= 1; i--) {
        inputNumber *= i;
      }
      return inputNumber;
    }
  }
  
  module.exports = Calculate;
  
  
  
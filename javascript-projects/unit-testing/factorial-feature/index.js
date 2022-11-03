/*
From Codecademy's Learn Javascript Unit Testing, Learn Test Driven Development With Mocha
https://www.codecademy.com/courses/learn-javascript-unit-testing/
*/

const Calculate = {
  factorial(inputNumber) {
    
    // 0 is an edge case, so an exception must be made for it
    if (inputNumber === 0) {
      return 1;
    }

    /*
      If inputNumber is 5, then the for loop runs like this:
      - First Loop:
        - i is initially set to be (inputNumber - 1), so i starts at 4
        - inputNumber = inputNumber * i (5*4) --> inputNumber is now 20
        - i is decremented 1 --> i is now 3
      - Second Loop:
        - inputNumber: 20, i: 3
        - inputNumber = 20 * 3 --> inputNumber is now 60
        - i is decremented 1 --> i is now 2
      - Third Loop:
        - inputNumber: 60, i: 2
        - inputNumber = 60 * 2 --> inputNumber is now 120
        - i is decremented 1 --> i is now 1
      - Fourth Loop:
        - inputNumber: 120, i: 1
        - inputNumber = 120 * 1 --> inputNumber remains 120
        - i is decremented 1 --> i is now 0
      - i is no longer greater than or equal to 1, so the loop ends
      - inputNumber is 120
    */

    for (let i = inputNumber - 1; i >= 1; i--) {
      inputNumber *= i; // inputNumber changes to become the accumulated value
      console.log(inputNumber);
    }
    return inputNumber;
  },
};

Calculate.factorial(5);
module.exports = Calculate;

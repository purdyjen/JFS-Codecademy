/*
From Codecademy's Learn Javascript Unit Testing, Learn Test Driven Development With Mocha
https://www.codecademy.com/courses/learn-javascript-unit-testing/
*/

var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns correct value of 5!', () => {

      // Setup
      const expected = 120;
      const inputNumber = 5;

      // Exercise
      const result = Calculate.factorial(inputNumber);
      
      // Verify
      assert.equal(expected, result);
    });

    it('returns correct value of 3!', () => {

      // Setup
      const expected = 6;
      const inputNumber = 3;

      // Exercise
      const result = Calculate.factorial(inputNumber);
      
      // Verify
      assert.equal(expected, result);
    });

        it('returns correct value of 0!', () => {

      // Setup
      const expected = 1;
      const inputNumber = 0;

      // Exercise
      const result = Calculate.factorial(inputNumber);
      
      // Verify
      assert.equal(expected, result);
    });
  });
});
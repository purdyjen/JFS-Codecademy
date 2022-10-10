/*
From Codecademy's Learn JavaScript course, Loops Unit:
https://www.codecademy.com/learn/introduction-to-javascript
*/

/* 
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:
    - There are no consonants. Only vowels excluding “y”.
    - The u‘s and e‘s are extra long, so we must double them in our program.

Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

//The text to be translated into whale talk (the INPUT)
const input = "The ocean is big and blue.";

//The only sounds in whale talk
const vowels = ['a', 'e', 'i', 'o', 'u'];

//An array to store vowel matches present inside of input
const resultArray = [];

//Loops through the individual characters inside of the input array
for (let i = 0; i < input.length; i++) {

//In whale talk, 'e' and 'u' letters are doubled. These if statements check if the current character being evaluated is either an 'e' or a 'u' and, if so, pushes it to the resultsArray so that it will be doubled for the ending results string.
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }

  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }

  //a nested for loop that iterates through the vowels array within each iteration of the outer loop (evaluating the characters inside of the input array)
  for (let j = 0; j < vowels.length; j++) {
      //if the current input character being evaluated matches one of the letters inside of the vowels array, then that character is pushed into resultArray
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }  

}
//After both for-loops have been completed, this creates a new variable that joins the characters inside of resultsArray, creating a string, and also capitalizes the string. Note: .toUpperCase() must follow .join() or it will not work
let resultString = resultArray.join('').toUpperCase();

//Prints the final resultString to the console (the OUTPUT)
console.log(resultString);
/*
From Codecademy's Learn JavaScript course, Conditionals Unit:
https://www.codecademy.com/learn/introduction-to-javascript
*/

// defines a variable (userName) and sets it to an empty string
let userName = '';

// a ternary expression that decides how to greet the user based on whether or not the user has entered a name
  // format: 
  // conditionToCheck ? code if truthy : code if falsy
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// a variable holding the question the user desires to ask the Magic 8 Ball
const userQuestion = "Will I get a job?";

// logs the question to the console
console.log(userQuestion);

// creates a variable that randomly generates a number between 0 (inclusive) and 8 (exclusive)
let randomNumber = Math.floor(Math.random() * 8);

// creates a variable to store the Magic 8 Ball's response to the question
let eightBall = '';

// the core logic of the Magic 8 Ball program. Takes the number randomly generated and assigns the corresponding response to the eightBall variable
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain.';
    break;
  case 1:
    eightBall = 'It is decidedly so.';
    break;
  case 2:
    eightBall = 'Reply hazy. Try again.';
    break;
  case 3:
    eightBall = 'Cannot predict now.';
    break;
  case 4:
    eightBall = 'Do not count on it.';
    break;
  case 5:
    eightBall = 'My sources say no.';
    break;
  case 6:
    eightBall = 'Outlook not so good.';
    break;
  case 7:
    eightBall = 'Signs point to yes.';
    break;
  default:
    break;
}

// logs the Magic 8 Ball's response to the console
console.log(eightBall);
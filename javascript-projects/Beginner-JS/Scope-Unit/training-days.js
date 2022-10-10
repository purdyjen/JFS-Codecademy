/*
From Codecademy's Learn JavaScript course, Scope Unit:
https://www.codecademy.com/learn/introduction-to-javascript
*/

/* 
Ideally, the getRandEvent() function selects an event at random. The getTrainingDays() function returns the number of days to train based on the event selected. The logEvent() and logTime() functions print the athlete name, event, and number of days to the console. 
*/

//selects an event at random
const getRandEvent = () => {
  //generates a random number between 0 (inclusive) and 3 (exclusive)
  const random = Math.floor(Math.random() * 3);
  //matches the generated random number to one of these three conditions and returns the corresponding event
  if (random === 0) {
    return "Marathon";
  } else if (random === 1) {
    return "Triathlon";
  } else if (random === 2) {
    return "Pentathlon";
  }
};

//This function assigns the number of training days a participant has depending on the argument passed through the event parameter
const getTrainingDays = (event) => {
  //creates a new variable, days
  let days;
  //matches event argument to one of the three possibilities, then assigns the corresponding number to the days variable
  if (event === "Marathon") {
    days = 50;
  } else if (event === "Triathlon") {
    days = 100;
  } else if (event === "Pentathlon") {
    days = 200;
  }
  //the value returned by the function
  return days;
};

//a function to log the participant's name and event to the console
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

//a function to log the participant's name and training time to the console
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

//creates variables to run the corresponding function, receive the value returned by it, and then pass the value as an argument to the log functions
const event = getRandEvent();
const days = getTrainingDays(event);

//TEST CASE ONE
const name = "Nala";
logEvent(name, event);
logTime(name, days);

//TEST CASE TWO
const name2 = "Warren";
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);

logEvent(name2, event2);
logTime(name2, days2);

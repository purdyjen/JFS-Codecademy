/*
From Codecademy's Learn JavaScript course, Conditionals Unit:
https://www.codecademy.com/learn/introduction-to-javascript
*/

/*
    - Adult runners
    - Youth runners
    - Register early or late
    - Assigned a race number and start time based on age and registration
    - Race number:
        - Early adults receive a number >= 1000
        - Everyone else gets number under 1000
    - Start time:
        - Early adults run at 9:30 am
        - Late adults run at 11:00 am
        - Youths run at 12:30 pm
*/

// generates a random number and assigns it as the race number for everyone except early adults
let raceNumber = Math.floor(Math.random() * 1000);

// case test one
let early = false;
let age = 50;

// if the adult registered early, this adds 1000 to the randomly generated race number
if (early && age > 18) {
  raceNumber += 1000;
}

// the core race day logic that determines a runner's start time based on their age and registration time
if (early && age > 18) {
  console.log(`Your start time is 9:30 AM and your race number is ${raceNumber}.`)
} else if (!early && age > 18) {
  console.log(`Your start time is 11:00 AM and your race number is ${raceNumber}.`)
} else if (age < 18) {
  console.log(`Your start time is 12:30 PM and your race number is ${raceNumber}.`)
} else {
  console.log("Please see the registration desk.")
}
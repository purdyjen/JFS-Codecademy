/*
From Codecademy's Learn Intermediate Javascript, Async-Await Unit:
https://www.codecademy.com/learn/learn-intermediate-javascript
*/

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js');

// Write your code below:

async function serveDinner() {
  let vegetablePromise = steamBroccoli();
  let starchPromise = cookRice();
  let proteinPromise = bakeChicken();
  let sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();
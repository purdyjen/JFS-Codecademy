/*
From Codecademy's Learn Intermediate Javascript, Async-Await Unit:
https://www.codecademy.com/learn/learn-intermediate-javascript
*/

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();
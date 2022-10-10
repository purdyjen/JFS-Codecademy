/*
From Codecademy's Learn JavaScript course, Functions Unit:
https://www.codecademy.com/learn/introduction-to-javascript
*/

/*
In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/

const getSleepHours = day => {
    const getDay = day.toLowerCase();
    switch (getDay) {
  
      case 'monday':
        return 1;
        break;
      case 'tuesday':
        return 2;
        break;
      case 'wednesday':
        return 3;
        break;
      case 'thursday':
        return 4;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 6;
        break;
      case 'sunday':
        return 7;
        break;
      default:
        return "Not a valid input.";
        break;
    }
  }
  
  const getActualSleepHours = () =>
    getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than required.");
    } else {
      console.log("You missed your sleep goal by " + (idealSleepHours - actualSleepHours) + " hours.");
    }
  }
  
 calculateSleepDebt()
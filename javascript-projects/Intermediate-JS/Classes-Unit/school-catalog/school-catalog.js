/*
From Codecademy's Learn Intermediate JavaScript course, Classes Unit:
https://www.codecademy.com/learn/learn-intermediate-javascript
*/

/*
We need to create classes for primary and high schools. Because these classes share properties and methods, each will inherit from a parent School class. Our parent and three child classes have the following properties, getters, setters, and methods:

School
Properties: name (string), level (one of three strings: 'primary', 'middle', or 'high'), and numberOfStudents (number)
Getters: all properties have getters
Setters: the numberOfStudents property has a setter
Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)

Primary
Includes everything in the School class, plus one additional property
Properties: pickupPolicy (string)

Middle
Does not include any additional properties or methods

High
Includes everything in the School class, plus one additional property
Properties: sportsTeams (array of strings)

If you would like to continue working on this project, we have listed some avenues to build on your progress.

- Create a middle school class
- Add more properties to each class (averageTestScores, schoolOverview, etc.)
- Create a class called SchoolCatalog that holds a collection of schools. - - Create an instance of SchoolCatalog for primary, middle, and high schools.
*/

class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level() {
      return this._level;
    }
    get numberOfStudents() {
      return this._numberOfStudents;
    }
    set numberOfStudents(num) {
      if (typeof num === 'number') {
        this._numberOfStudents = num;
      } else {
        console.log("Invalid input: numberOfStudents must be set to a number.");
      }
    }
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
      const randomNum = Math.floor(Math.random() * (substituteTeachers.length - 1));
      return substituteTeachers[randomNum];
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numOfStudents, pickupPolicy) {
      super(name, 'primary', numOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numOfStudents, sportsTeams) {
      super(name, 'high', numOfStudents);
      this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
      return this._sportsTeams;
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts();
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  console.log(alSmith.sportsTeams);
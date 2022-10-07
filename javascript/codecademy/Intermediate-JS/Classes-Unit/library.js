/*
From Codecademy's Learn Intermediate JavaScript course, Classes Unit:
https://www.codecademy.com/learn/learn-intermediate-javascript
*/

/*
Books-‘N-Stuff carries three different types of media: books, CDs, and movies. In this project you will create a parent class named Media with three subclasses: Book, Movie, and CD. These three subclasses have the following properties and methods:

Book
Properties: author (string), title (string), pages (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty).
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Movie
Properties: director (string), title (string), runTime (number), isCheckedOut (boolean, initially false), and ratings (array, initially empty)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

CD
Properties: artist (string), title (string), isCheckedOut (boolean, initially false), and ratings (array, initially empty), songs (array of strings)
Getters: all properties have a getter
Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

If you would like to continue working on this project, we have listed some avenues to build on your existing progress.

- Add more properties to each class (movieCast, songTitles, etc.)
- Create a CD class that extends Media.
- In .addRating(), make sure input is between 1 and 5.
    - Look up Math.min and Math.max
- Create a method called shuffle for the CD class. The method returns a randomly sorted array of all the songs in the songs property.
    - Math.random
- Create class called Catalog that holds all of the Media items in our library.
    - a new class that doesn't extend Media
    - addMedia method
*/

// Media
// title(string), isCheckedOut(init false), ratings(array init empty)
// .getAverageRating, .toggleCheckoutStatus, .addRating

class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    getAverageRating() {
        let average = this._ratings.reduce((currentSum, rating) => (currentSum + rating)) / this.ratings.length;
        return average.toPrecision(2);
    }
    toggleCheckoutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(newRating) {
        this._ratings.push(newRating);
    }
}

//book
// author(string), pages(number)
class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

//movie
//director(string), runTime(number)
class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
        this._movieCast = [];
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

//cd
//artist(string), songs(array of strings)
class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
}

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());
class Media {
  contructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get checkOutStatus() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  set isCheckedOut(_isCheckedOut) {
    this._isCheckedOut = true;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }

  addRating(newRating) {
    this.ratings.push(newRating);
  }

  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    return ratingSum / _ratings.length;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
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

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this.runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }
  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
console.log(Media);
console.log(historyOfEverything.checkOutStatus);
historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.checkOutStatus);
console.log(historyOfEverything.ratings);
//historyOfEverything.addRating(4);
//historyOfEverything.addRating(5);
//historyOfEverything.addRating(5);

//historyOfEverything.getAverageRating();
const newInstance = new Media("title");

console.log(newInstance.title);
console.log(newInstance.ratings);
console.log(newInstance.isCheckedOut);

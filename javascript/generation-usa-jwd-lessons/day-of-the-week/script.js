var d = new Date();
var weekday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

var date2 = new Date();
var weekday2 = new Array("Time to chillax!", "Monday morning blues!", "Taco Time!", "Two more days to the weekend.", "The weekend is almost here...", "Weekend is here!", "Time to party!");

var n = weekday[d.getDay()];
var n2 = weekday2[date2.getDay()];

var displayWeekday = document.getElementById('weekday');
var phrase = document.getElementById('phrase');

function whatDayIsIt() {
    displayWeekday.innerText = n ;
    phrase.innerText = n2;
}

whatDayIsIt();
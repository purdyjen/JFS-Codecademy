$(document).ready(function(){
    $("#perc").mouseenter(function(){
      $("#perc").animate({opacity: '-=0.2'});
    });
  });

function calculate() {

    // using jQuery syntax, retrieves the values from the footage and cost fields in the html document, converts them to numbers, and stores them as variables
    // $ is shorthand for jQuery
    var footage = Number($('#footage').val());
    var cost = Number($('#cost').val());

    // calculates the total amount by multiplying footage and cost
    var total = footage * cost;
    console.log(total);

    //jQuery syntax, selects the element with id "total" and assigns the value of total with two decimal places
    $('#total').val(total);

    return false; //don't reload the window
}

$('#calculator').submit(calculate); //submits the form values and calls the calculate function



// .toFixed() vs .toPrecision
// tl;dr - Fixed counts after the decimal point, Precision counts before
// https://www.c-sharpcorner.com/blogs/difference-between-tofixed-and-toprecision-in-javascript1#:~:text=toFixed()%20returns%20digits%20before,count%20starts%20before%20decimal%20point.
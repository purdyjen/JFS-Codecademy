function calculate() {

    // using jQuery syntax, retrieves the values from the amount and percentage fields in the html document, converts them to numbers, and stores them as variables
    // $ is shorthand for jQuery
    var amount = Number($('#amount').val()); //$('#amount).val() replaces document.getElementById('amount').value()
    var percentage = Number($('#percentage').val());

    //calculates the tip
    var tip = amount * (percentage / 100);

    // calculates the total amount by adding amount and tip
    var total = amount + tip;

    //jQuery syntax, selects the element with id "tip" and assigns the value of tip with two decimal places
    $('#tip').val(tip.toFixed(2));
    //jQuery syntax, selects the element with id "total" and assigns the value of total with two decimal places
    $('#total').val(total.toFixed(2));

    return false; //don't reload the window
}

$('#calculator').submit(calculate); //submits the form values and calls the calculate function



// .toFixed() vs .toPrecision
// tl;dr - Fixed counts after the decimal point, Precision counts before
// https://www.c-sharpcorner.com/blogs/difference-between-tofixed-and-toprecision-in-javascript1#:~:text=toFixed()%20returns%20digits%20before,count%20starts%20before%20decimal%20point.
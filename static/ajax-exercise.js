"use strict";



// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    

    // .get tells browser to make get request to the server at route /fortune
    // when the result is returned, calls function with result as first argument of that func

    $.get("/fortune", function (fortune) { $('#fortune-text').html(fortune); });

}

// JQuery method that says everytime get-fortune-button is clicked, execute showFortune fuction
$('#get-fortune-button').click(showFortune);
//when fortune-btn is click, JQuery executes showFortune
//showForune executes AJAX get request at /fortune route to return result.
//with the returned result, success callback function is executed passing in the result as the 
//first argument.


// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);



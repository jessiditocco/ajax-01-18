"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {
    evt.preventDefault();

    $.get('/fortune', function(fortune) {
            $("#fortune-text").html(fortune);} )

    // TODO: get the fortune and show it in the #fortune-text div
}

$('#get-fortune-button').on('click', showFortune);


// PART 2: SHOW WEATHER

function showForecast(weatherinfo) {
    $("#weather-info").html(weatherinfo['forecast']);

    //why isn't it working with html.(weatherinfo.forecast)

}


function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};


    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, formData, showForecast);

}


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS
function showStatus(orderResponse) {
    $("#order-status").html(orderResponse.msg);

    if ((orderResponse['code']) === "ERROR") {
        $("#order-status").addClass('order-error');
    }


}

// {'code': result_code, 'msg': result_text}

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    let formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json", formInputs, showStatus);

}

$("#order-form").on('submit', orderMelons);



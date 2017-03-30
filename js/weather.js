var apiKey = '7a110642c1749435874076dba1ccc37f';

function getWeather() {
	var zipString = $('#zipcode').val();
	var zipInt = parseInt(zipString);
	$.ajax({
		url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ zipInt +'&mode=json&units=imperial&APPID=' + apiKey,
		dataType: 'json',
		success: function(data) {
			// console.log(data);
			$('#temp').empty();

			var currentTemp = data.main.temp;
			$('#temp').append('<p>' + currentTemp + '&deg;F</p>');
		}
	});
}

$('#zipcode').focus(function selectAllText() {
	$(this).select();
});

$('#zipcode').on('keydown',function changeZip(e) {
    if(e.keyCode == 13) {
    	$(this).blur(); // unfocus to get rid of blinking cursor
        getWeather();
    }
});

$(document).ready(getWeather);

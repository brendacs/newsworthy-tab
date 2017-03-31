$(document).ready(function loadStoredZip() {
	if (localStorage.getItem('zip')) {
		$('#zipcode').val(localStorage.getItem('zip'));
		getWeather();
	} else {
		getWeather();
	}
});

function getWeather() {
	var zipString = $('#zipcode').val();
	localStorage.setItem('zip', zipString);
	$.simpleWeather({
		location: zipString,
		woeid: '',
	    unit: 'f',
		success: function(data) {
			// console.log(data);
			$('#temp').empty();

			var currentTemp = data.temp;
			var units = data.units.temp;
			$('#temp').append('<p>' + currentTemp + '&deg;' + units + '</p>');
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

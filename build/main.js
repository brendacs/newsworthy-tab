function changeBackground() {
  
}

$(document).ready(changeBackground);

/*! simpleWeather v3.1.0 - http://simpleweatherjs.com */
!function(t){"use strict";function e(t,e){return"f"===t?Math.round(5/9*(e-32)):Math.round(1.8*e+32)}t.extend({simpleWeather:function(i){i=t.extend({location:"",woeid:"",unit:"f",success:function(t){},error:function(t){}},i);var o=new Date,n="https://query.yahooapis.com/v1/public/yql?format=json&rnd="+o.getFullYear()+o.getMonth()+o.getDay()+o.getHours()+"&diagnostics=true&callback=?&q=";if(""!==i.location){var r="";r=/^(\-?\d+(\.\d+)?),\s*(\-?\d+(\.\d+)?)$/.test(i.location)?"("+i.location+")":i.location,n+='select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+r+'") and u="'+i.unit+'"'}else{if(""===i.woeid)return i.error("Could not retrieve weather due to an invalid location."),!1;n+="select * from weather.forecast where woeid="+i.woeid+' and u="'+i.unit+'"'}return t.getJSON(encodeURI(n),function(t){if(null!==t&&null!==t.query&&null!==t.query.results&&"Yahoo! Weather Error"!==t.query.results.channel.description){var o,n=t.query.results.channel,r={},s=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW","N"],a="https://s.yimg.com/os/mit/media/m/weather/images/icons/l/44d-100567.png";r.title=n.item.title,r.temp=n.item.condition.temp,r.code=n.item.condition.code,r.todayCode=n.item.forecast[0].code,r.currently=n.item.condition.text,r.high=n.item.forecast[0].high,r.low=n.item.forecast[0].low,r.text=n.item.forecast[0].text,r.humidity=n.atmosphere.humidity,r.pressure=n.atmosphere.pressure,r.rising=n.atmosphere.rising,r.visibility=n.atmosphere.visibility,r.sunrise=n.astronomy.sunrise,r.sunset=n.astronomy.sunset,r.description=n.item.description,r.city=n.location.city,r.country=n.location.country,r.region=n.location.region,r.updated=n.item.pubDate,r.link=n.item.link,r.units={temp:n.units.temperature,distance:n.units.distance,pressure:n.units.pressure,speed:n.units.speed},r.wind={chill:n.wind.chill,direction:s[Math.round(n.wind.direction/22.5)],speed:n.wind.speed},n.item.condition.temp<80&&n.atmosphere.humidity<40?r.heatindex=-42.379+2.04901523*n.item.condition.temp+10.14333127*n.atmosphere.humidity-.22475541*n.item.condition.temp*n.atmosphere.humidity-6.83783*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)-5.481717*Math.pow(10,-2)*Math.pow(n.atmosphere.humidity,2)+1.22874*Math.pow(10,-3)*Math.pow(n.item.condition.temp,2)*n.atmosphere.humidity+8.5282*Math.pow(10,-4)*n.item.condition.temp*Math.pow(n.atmosphere.humidity,2)-1.99*Math.pow(10,-6)*Math.pow(n.item.condition.temp,2)*Math.pow(n.atmosphere.humidity,2):r.heatindex=n.item.condition.temp,"3200"==n.item.condition.code?(r.thumbnail=a,r.image=a):(r.thumbnail="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.condition.code+"ds.png",r.image="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.condition.code+"d.png"),r.alt={temp:e(i.unit,n.item.condition.temp),high:e(i.unit,n.item.forecast[0].high),low:e(i.unit,n.item.forecast[0].low)},"f"===i.unit?r.alt.unit="c":r.alt.unit="f",r.forecast=[];for(var m=0;m<n.item.forecast.length;m++)o=n.item.forecast[m],o.alt={high:e(i.unit,n.item.forecast[m].high),low:e(i.unit,n.item.forecast[m].low)},"3200"==n.item.forecast[m].code?(o.thumbnail=a,o.image=a):(o.thumbnail="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.forecast[m].code+"ds.png",o.image="https://s.yimg.com/zz/combo?a/i/us/nws/weather/gr/"+n.item.forecast[m].code+"d.png"),r.forecast.push(o);i.success(r)}else i.error("There was a problem retrieving the latest weather information.")}),this}})}(jQuery);
$(document).ready(function() {
	$('.center').slick({
		centerMode: true,
		slidesToShow: 2.75,
		slidesToScroll: 1,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3000
	});
});

function getNews() {
	var apiKey = 'bf3c0fdeee1c4d8cb6ee46a95c205a51';
	var source = 'the-new-york-times';
	var sortMethod = 'top';

	$.ajax({
    url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey,
		dataType: 'json',
		success: function(news) {
      console.log(news);
			i = 0;
			$('#news div div div').each(function() {
				// many nested divs due to divs created by slick
				var article = news.articles[i];
				var newsImage = article.urlToImage;
				var newsURL = article.url;
				var newsTitle = article.title.substring(0, 60) + "...";
				var images = $(this).find('.article');
				images.attr('src', newsImage);
				var imageLinks = $(this).find('a');
				imageLinks.attr('href', newsURL);
				$(this).append('<a target="_blank" href="' + newsURL + '">' + newsTitle + '</a>');
				if (i <= news.articles.length - 2) {
					i++;
				} else {
					i = 0;
				}
			});
		}
	});
}

$(document).ready(getNews);

$(document).ready(function loadStoredList() {
	if (localStorage.getItem('todo-list')) {
		$('#todo-list ul').html(localStorage.getItem('todo-list'));
	}
});

function addItem(e) {
	var newItem = $('#todo-new').val();
	$('#todo-list ul').prepend('<li class="todo-item"><p>' + newItem + '</p><button class="remove">✗</button></li>');
	$('#todo-new').val('');

	// store data
	var todoList = $('#todo-list ul').html();
	localStorage.setItem('todo-list', todoList);
	return false;
}

$('#todo-list ul').on('click', '.remove', function removeItem() {
	$(this).closest('li').remove();

	// store data
	var todoList = $('#todo-list ul').html();
	localStorage.setItem('todo-list', todoList);
	return false;
});

$('#todo-new').on('keydown', function(e) {
	if (e.keyCode == 13) {
		addItem();
	}
});

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

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
		url: 'https://newsapi.org/v1/articles?source=' + source + '&sortBy=' + sortMethod + '&apiKey=' + apiKey,
		dataType: 'json',
		success: function(news) {
			// console.log(news);

			i = 0;
			$('#news div div div').each(function() {
				// many nested divs due to divs created by slick
				var article = news.articles[i];
				var newsImage = article.urlToImage;
				var newsURL = article.url;
				var newsTitle = article.title;
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

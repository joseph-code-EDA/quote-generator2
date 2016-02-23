var lines = [];
var currentQuote = "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.";

$(document).ready(function() {
		//fetch the text file
		$.get('./resources/bruce_lee_quotes.txt', function(data) {
			//split the data up according to line breaks into the lines array
			lines = data.split('\n');
			currentQuote = lines[1];
			//console.log(lines);
			$('#quote').text(currentQuote);

		});

		$('.popup').click(function(event) {
		    var width  = 575,
		        height = 400,
		        left   = ($(window).width()  - width)  / 2,
		        top    = ($(window).height() - height) / 2,
		        url    = this.href,
		        opts   = 'status=1' +
		                 ',width='  + width  +
		                 ',height=' + height +
		                 ',top='    + top    +
		                 ',left='   + left;
		    
		    window.open(url, 'twitter', opts);
		 
		    return false;
	  	});

		window.twttr = (function(d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0], t = window.twttr || {};
			if (d.getElementById(id)) return t;
			js = d.createElement(s);
			js.id = id;
			js.src = "https://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js, fjs);
			t._e = [];
			t.ready = function(f) {
				t._e.push(f);
			};
			return t;
		}(document, "script", "twitter-wjs"));
		twttr.ready(function() {
			console.log(currentQuote);
			twttr.widgets.createShareButton('',document.getElementById('twitterbutton'),{ text: currentQuote, size: 'large' });
			twttr.widgets.createFollowButton('chucknorris', document.getElementById('followbutton'),{size: 'large'});
		});


});

function press() {
	//randomly generate the quote
	currentQuote = lines[Math.floor(lines.length * Math.random())];
	//send the quote to the text element
	//console.log(currentQuote);
	$('#quote').text(currentQuote);

	twttr.ready(function() {
		document.getElementById('twitterbutton').innerHTML = "";
		twttr.widgets.createShareButton('http://tony-luisi.github.io/quote-generator/',document.getElementById('twitterbutton'),{ text: currentQuote, size: 'large' });


	});

}


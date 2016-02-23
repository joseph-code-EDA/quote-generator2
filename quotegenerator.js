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



var audio1 = document.getElementById("potato");


function burn1() {
    audio1.play();
}

function burn2() {
    audio1.play();
}

function burn3() {
    audio1.play();
}

function burn4() {
    audio1.play();
}

function burn5() {
    audio1.play();
}

function random() {
    var rand = Math.floor(Math.random() * (5 - 1)) + 1;
    switch(rand) {

        case 1:
            burn1();
            break;
        case 2:
            burn2();
            break;
        case 3:
            burn3();
            break;
        case 4:
            burn4();

/*function randomAdLib(){
	var adLibs = ["./sounds/bl1.mp3", "./sounds/bl2.mp3", "./sounds/bl3.mp3"];
	$("#element").html("<embed src=\"" + Math.floor (Math.random() * (adLibs.length+1))+"\" autostart=\"true\"/>");
	//console.log(adLibs);
}
	/*<p> <button onclick="randomAdLib()">Try it</button> </p>*/





function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}

// global variables for game
var secretNumber;
var numGuesses;

// starts a new game
function newGame() {
	secretNumber = getNumber();
	numGuesses = 0;
	$(".js-guess-count").text(numGuesses);
	displayFeedback("Make your Guess!");
	$("ul#guessList").empty();
	$("#js-user-guess").val("");
}

// returns a random integer between 1 and 100
function getNumber() {
	return Math.floor(Math.random() * 99) + 1;
}

// displays given feedback on page
function displayFeedback(feedback) {
	$("#feedback").text(feedback);
}

// plays game
function play() {
	$("form").submit(function(event) {
		event.preventDefault();
		numGuesses++;
		var guess = parseInt($("#js-user-guess").val());
		var diff = Math.abs(guess - secretNumber);
		if (guess < 1 || guess > 100) {
			displayFeedback("Must be integer between 1 and 100");
		} else if (diff > 50) {
			displayFeedback("Ice cold");
		} else if (diff > 30) {
			displayFeedback("Cold");
		} else if (diff > 20) {
			displayFeedback("Warm");
		} else if (diff > 10) {
			displayFeedback("Hot");
		} else if (diff >= 1) {
			displayFeedback("Very hot");
		} else {
			displayFeedback("You got it! Start a new game!");
		}
		// add to list of guessed numbers
		$("ul#guessList").append("<li>" + guess + "</li>\n");
		// update guess #
		$(".js-guess-count").text(numGuesses);
	});

	$(".js-new-game").click(newGame);
}


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
	handleInstructionsModal();
	newGame();
	play();
});

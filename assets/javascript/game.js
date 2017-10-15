$(document).ready(function(){
	alert("is this linked right?")

var counter = 0;
var wins = 0;
var losses = 0;
$("#win").text(wins);
$("#loss").text(losses);

crystals();
game();

/*I have more than one idea on how to deal with 
the crystal image. I can make a random function that 
will give me a random number, and I can pass that random number
more than once to each image id, or I can create the images in 
here using loops and giving each of the crystals a value using loops 
like in the crystals example. I'm not sure which one I want to 
do first. */ 

function game() {
	
	counter = 0;
	$('#playersscore').text(counter);

	function grandMasterRandom(min,max) {
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	var displayNumber = grandMasterRandom(19,120);

	$('#guessThisNumber').text(displayNumber);

}

/*Whichever method I decide to use for the crystal
will go here. An on click thing will be used */

$("#playersscore").text(counter);

if (counter == displayNumber){
	alert("You won!");
	wins ++;
	$("#win").text(wins);
	console.log(wins);
	
	/*insert crystal function here. The idea is to restart 
	the game by calling the function onto itself. Not sure if this 
	will work or not*/

	game();}
if ( counter != displayNumber){
	alert("You lost!")
	losses ++;
	$("#loss").text(losses);
	console.log(losses);
	//insert crystal method here

	game();}
}	

}



});
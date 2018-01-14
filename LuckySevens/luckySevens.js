// When Play button is clicked
function playGame() {
var startingBet = document.forms["play"]["bet"].value;
var diceRoll = 0;
var totalRolls = '';
var gameMoney = startingBet;
var rollCount = [];
	// Verify that a number has been entered in the starting bet field
	if (startingBet == "" || isNaN(startingBet)) {
		alert("You must enter an amount in the Starting Bet field.");
		document.forms["numberEvens"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEvens"]["num1"].focus();
        return false;
	} 
	// Display an error message if a number less than 0 has been entered
	if (startingBet <= 0) {
		alert("You must enter an amount that is more than zero in the Starting Bet field.");
		document.forms["numberEvens"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEvens"]["num1"].focus();
        return false;
	}

	//Roll two 6 sided dice
	function rollDice() {
		var dice1 = Math.ceil(Math.random() * (1 + 6 - 1));
		var dice2 = Math.ceil(Math.random() * (1 + 6 - 1));
		var diceSum = dice1 + dice2;
		return diceSum;
	}

	while (gameMoney > 0 ) {
		var rollSum = rollDice();
		if (rollSum == 7) {
			console.log("Congratulations! You have won $4.")
			gameMoney += 4;
		} else {
			console.log("You have lost $1.")
			gameMoney -= 1;
		}
		rollCount.push(gameMoney);
	} 
	
	
	console.log("The total winnings of this game is $" + gameMoney);
	console.log("Starting Bet " + startingBet);
	console.log("The number of Rolls Before Going Broke " + rollCount.length);
	console.log("Highest Amount Won $" + Math.max.apply( Math, rollCount));
		// Keep track of the number of rolls
		// Track the maximum amount of money the player had
			// Number of rolls at maximum money value

	//When game is over Display
		// $0 starting bet value
		// Button says "Play Again"
		// Results Table
			// Starting bet
			// Total Rolls Before Going Broke
			// Highest Amount Won
			// Roll Count at Highest Amount Won
}
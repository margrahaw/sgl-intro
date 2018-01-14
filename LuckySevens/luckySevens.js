// When Play button is clicked
function playGame() {
	var startingBet = document.forms["play"]["bet"].value;
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

	// Continue playing game until the game money is zero
	if (gameMoney > 0) {
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
	} 
	if (gameMoney == 0) {
		document.getElementById("submitButton").innerHTML = "Play Again";
		document.getElementById("bet").value = '';
	}
	
	var highestAmount = Math.max.apply( Math, rollCount);
	var highestPosition = rollCount.indexOf(highestAmount);
	
	document.getElementById("startingBet").innerHTML = "$" + startingBet;
	document.getElementById("brokeRoll").innerHTML = rollCount.length;
	document.getElementById("highestWon").innerHTML = "$" + highestAmount;
	document.getElementById("rollHighest").innerHTML = highestPosition;
}
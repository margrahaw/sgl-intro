

function displayEvens() {
	var startingNumber = document.forms["numberEvens"]["num1"].value;
	var endingNumber = document.forms["numberEvens"]["num2"].value;
	var stepNumber = document.forms["numberEvens"]["num3"].value;
	// If the form fields are filled with numbers
	if (startingNumber == "" || isNaN(startingNumber)) {
		alert("The starting number must be filled in with a number.");
		document.forms["numberEvens"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEvens"]["num1"].focus();
        return false;
	} 
	if (endingNumber == "" || isNaN(endingNumber)) {
		alert("The ending number must be filled in with a number.");
		document.forms["numberEvens"]["num12"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEvens"]["num2"].focus();
        return false;
	} 
	if (stepNumber == "" || isNaN(stepNumber)) {
		alert("The step number must be filled in with a number.");
		document.forms["numberEvens"]["num3"]
           .parentElement.className = "form-group has-error";
        document.forms["numberEvens"]["num3"].focus();
        return false;
	} 
	var evenNumbers = '';
	for (var i = startingNumber; i < endingNumber; i++){
		if ( i % stepNumber == startingNumber || i % stepNumber == 0 && i % 2 == 0) {
			evenNumbers += i + "<br/>";
		}
	}
	
	
	var calresults = '<p>The even numbers between ';
	calresults += startingNumber + ' and ';
	calresults += endingNumber + ' by ' + stepNumber + "'s are:</p>";
	calresults += "<p>" + evenNumbers + "</p>";

	document.getElementById("results").style.display = "block";
	document.getElementById("results").innerHTML = calresults;
}


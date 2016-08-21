var objectsArray = ['rock', 'paper', 'scissors'];
var userWin=0, computerWin=0, userLoss=0, computerLoss=0, userDraw=0,computerDraw = 0;

function calculateWinner(computerChoice, userChoice)	{
	if(userChoice == computerChoice){
			userDraw++;
			computerDraw++;
			return "Draw!";		
	}	
	else {
		if(computerChoice == 'rock' && userChoice == 'paper')	{
			userWin++;
			computerLoss++;
			return "You win!";					
		}
		if(computerChoice == 'rock' && userChoice == 'scissors')	{
			computerWin++;
			userLoss++;
			return "Computer wins!";
		}
		if(computerChoice == 'paper' && userChoice == 'rock')	{
			computerWin++;
			userLoss++;
			return "Computer wins!";
		}
		if(computerChoice == 'paper' && userChoice == 'scissors')	{
			userWin++;
			computerLoss++;
			return "You win!";
		}
		if(computerChoice == 'scissors' && userChoice == 'paper')	{
			computerWin++;
			userLoss++;
			return "Computer wins!";
		}
		if(computerChoice == 'scissors' && userChoice == 'rock')	{
			userWin++;
			computerLoss++;
			return "You win!";
		}
	}
}

function rockFunction() {
	var x = document.getElementById("rockBtn").value;
	document.getElementById("demo").innerHTML = x;
	var ranNum = Math.floor(Math.random()*3);
	var choice = objectsArray[ranNum];
	document.getElementById("bot").innerHTML = "Computer selected" + " " + choice;
	document.getElementById("winner").innerHTML = calculateWinner(choice, document.getElementById("rockBtn").name);
}	

function paperFunction() {
	var y = document.getElementById("paperBtn").value;
	document.getElementById("demo").innerHTML = y;
	var ranNum = Math.floor(Math.random()*3);
	var choice = objectsArray[ranNum];
	document.getElementById("bot").innerHTML = "Computer selected" + " " + choice;
	document.getElementById("winner").innerHTML = calculateWinner(choice, document.getElementById("paperBtn").name);
}

function sciFunction() {
	var z = document.getElementById("sciBtn").value;
	document.getElementById("demo").innerHTML = z;
	var ranNum = Math.floor(Math.random()*3);
	var choice = objectsArray[ranNum];
	document.getElementById("bot").innerHTML = "Computer selected" + " " + choice;
	document.getElementById("winner").innerHTML = calculateWinner(choice, document.getElementById("sciBtn").name);
}
var objectsArray = ['rock', 'paper', 'scissors'];
function init()	{
	window.userWin=0;
	window.computerWin=0;
	window.userDraw=0;
	updateScore();
	$("#winnerID").html("");
	$("#bot").html('');
	$("#demo").html("");
	$("#winner").html("");
}

function startGame()	{
	init();
	//show the gamplay area
	$(".game").show();
	$(".scores").show();
	//hide the form
	$('form').hide();
	//update timer
	$("#timeLeft").html(window.timer);
	//start interval to display time
	window.gameTimeout = setInterval(gameTimeoutFunction, 1000);
}

function stopGame()	{
	$("form").show();
	$(".game").hide();
	$("#gameStatus").html("Game over!");
	if(window.userWin > window.computerWin)	{
		$("#winnerID").html("You won the game!");	
	}
	if(window.computerWin > window.userWin)	{
		$("#winnerID").html("Bot won the game!");
	}
	if(window.computerWin == window.userWin)	{
		$("#winnerID").html("Its a tie!");
	}
	clearTimeout(window.gameTimeout);
}


function calculateWinner(computerChoice, userChoice)	{
	if(userChoice == computerChoice){
			window.userDraw++;
			return "Draw!";		
	}	
	else {
		if(computerChoice == 'rock' && userChoice == 'paper')	{
			window.userWin++;
			return "You win!";					
		}
		if(computerChoice == 'rock' && userChoice == 'scissors')	{
			window.computerWin++;
			return "Computer wins!";
		}
		if(computerChoice == 'paper' && userChoice == 'rock')	{
			window.computerWin++;
			return "Computer wins!";
		}
		if(computerChoice == 'paper' && userChoice == 'scissors')	{
			window.userWin++;
			return "You win!";
		}
		if(computerChoice == 'scissors' && userChoice == 'paper')	{
			window.computerWin++;
			return "Computer wins!";
		}
		if(computerChoice == 'scissors' && userChoice == 'rock')	{
			window.userWin++;
			return "You win!";
		}
	}
}

function updateScore()	{
	$("#userWins").text(window.userWin);
	$("#botWins").text(window.computerWin);
	$("#drawCounter").text(window.userDraw);
}

function rockFunction() {
	var x = document.getElementById("rockBtn").value;
	document.getElementById("demo").innerHTML = x;
	var ranNum = Math.floor(Math.random()*3);
	var choice = objectsArray[ranNum];
	document.getElementById("bot").innerHTML = "Computer selected" + " " + choice;
	document.getElementById("winner").innerHTML = calculateWinner(choice, document.getElementById("rockBtn").name);
	updateScore();
}	

function paperFunction() {
	var y = document.getElementById("paperBtn").value;
	document.getElementById("demo").innerHTML = y;
	var ranNum = Math.floor(Math.random()*3);
	var choice = objectsArray[ranNum];
	document.getElementById("bot").innerHTML = "Computer selected" + " " + choice;
	document.getElementById("winner").innerHTML = calculateWinner(choice, document.getElementById("paperBtn").name);
	updateScore();
}

function sciFunction() {
	var z = document.getElementById("sciBtn").value;
	document.getElementById("demo").innerHTML = z;
	var ranNum = Math.floor(Math.random()*3);
	var choice = objectsArray[ranNum];
	document.getElementById("bot").innerHTML = "Computer selected" + " " + choice;
	document.getElementById("winner").innerHTML = calculateWinner(choice, document.getElementById("sciBtn").name);
	updateScore();
}

function resetAll()	{
	console.log("reset called");
	init();
	updateScore();
}

function resetGame()	{
	clearTimeout(window.gameTimeout);
	window.timer = window.setTime;
	startGame();
}
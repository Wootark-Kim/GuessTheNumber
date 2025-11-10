//alert("running external JS code!")

//global variables
let randomNumber;
let attempts=0;
let attemptsLeft=7;
let wins=0;
let loss=0;

document.querySelector("#loses").textContent=loss;
document.querySelector("#wins").textContent=wins;

initializeGame();

function initializeGame(){

	document.querySelector("#guesses").textContent = "";
	attemptsLeft=7;
	document.querySelector("#attemptsLeft").textContent=attemptsLeft;

	randomNumber=Math.floor(Math.random()*99)+1;
	console.log("randomNumber: " + randomNumber);
	attempts = 0;

	//hiding the reset button
	document.querySelector("#resetBtn").style.display="none";

	//showing the Guess button
	document.querySelector("#guessBtn").style.display="inline";

	let playerGuess = document.querySelector("#playerGuess");
	playerGuess.focus(); //adding focus to textbox
	playerGuess.value=""; //clearing the textbox

	let feedback = document.querySelector("#feedback");
	feedback.textContent=""; //clearing the feedback

	//adding focus to textbox
	//document.querySelector("#playerGuess").focus();

	//Event listeners
	document.querySelector("#guessBtn").addEventListener("click", checkGuess);

	document.querySelector("#resetBtn").addEventListener("click", initializeGame);

	
	//document.querySelector("#wins").textContent=wins;
	//document.querySelector("#loses").textContent=loss;
}

// an Event handler
function checkGuess(){
	let feedback = document.querySelector("#feedback"); 
	feedback.textContent="";
	let guess = document.querySelector("#playerGuess").value;
	console.log("Player guess: " + guess);

	if (guess < 1 || guess > 99){
		feedback.textContent="Enter a number between 1 and 99";
		feedback.style.color="#FA9B9B";
		return; // return exits the function
	}

	attempts++;
	attemptsLeft--;
	document.querySelector("#attemptsLeft").textContent=attemptsLeft;


	console.log("Attempts:" + attempts);
	feedback.style.color="orange";

	if (guess == randomNumber) {
		document.querySelector("#guesses").textContent += guess + " ";
		feedback.textContent = "You guessed it! You Won!";
		feedback.style.color = "darkgreen";

		wins++;
		document.querySelector("#wins").textContent=wins;
		gameOver();
	} 

	else {
		document.querySelector("#guesses").textContent += guess + " ";
		if (attempts == 7) {
			feedback.textContent = "Sorry, you lost! The correct number was: " + randomNumber;
			feedback.style.color = "red";

			loss++;
			document.querySelector("#loses").textContent=loss;
			gameOver();
		} 

		else if (guess > randomNumber) {
			feedback.textContent = "Guess was high";
		}

		else {
			feedback.textContent="Guess was low";
		}	
	}
}

function gameOver(){
	let guessBtn = document.querySelector("#guessBtn");
	let resetBtn = document.querySelector("#resetBtn");
	guessBtn.style.display = "none"; //hides Guess button
	resetBtn.style.display = "inline"; //displays Reset button
}


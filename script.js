const choices = ['Rock', 'Paper', 'Scissors'];
var computerScore = 0;
var playerScore = 0;

const buttons = document.querySelectorAll('button');
const scoreboard = document.querySelector('#scoreboard');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {playRound(button.textContent, compPlay())});
})

let compPlay = function () 
{
	return choices[Math.floor(Math.random()*3)].toLowerCase()
}

function playRound(playerSelection, computerSelection) {
    
    var playerFormatedAnswer = playerSelection.toLowerCase();
    var gameResult = "";

    
    
    if(playerFormatedAnswer === computerSelection) 
    {
    	gameResult = "It's a draw";
    }
    else if ((playerFormatedAnswer === 'rock' && computerSelection === "paper") || (playerFormatedAnswer === 'paper' && computerSelection === 'scissors') || (computerSelection === 'rock' && playerFormatedAnswer === 'scissors')) 
    {
    	computerScore++;
    	gameResult = "You lose! Your Score: " + playerScore + " Computer Score: " + computerScore ;
    } 
    else if ((playerFormatedAnswer === 'paper' && computerSelection === "rock") || (playerFormatedAnswer === 'scissors' && computerSelection === 'paper') || (	computerSelection === 'scissors' && playerFormatedAnswer === 'rock')) 
    {
    	playerScore++;
    	gameResult = "You Win! Your Score: " + playerScore + " Computer Score: " + computerScore ;
    }

    scoreboard.textContent = gameResult;
	
	if(playerScore >= 5)
	    scoreboard.textContent = "You win!";
	else if (computerScore >= 5)
	    scoreboard.textContent = "You loose.";
}
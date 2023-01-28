//getComputerChoice to randomly return rock, paper, or scissors as computerSelection
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice == 0) {
        return computerSelection = "rock"; 
    } else if (computerChoice == 1) {
        return computerSelection = "paper";
     } else {
        return computerSelection = "scissors";
     }
}
console.log(getComputerChoice());  

//Get playerSelection from a prompt
let playerInput = prompt("Choose rock, paper, or scissors", "");

//Make playerSelection case insensitive (change to lowercase)
let playerSelection = playerInput.toLowerCase();
console.log(playerSelection);

//Compare playerSelection to computerSelection
//Declare results of the playRound (win or loss) for whatever combination occurred
//Record win or loss for the player for the round
//Play game in 5 playRound
//Display the results of each playRound
//Declare player as a winner or loser of the game at the end of 5 playRound
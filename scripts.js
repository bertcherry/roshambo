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

if (playerSelection === computerSelection) {
    console.log("It's a tie!");
} else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper covers rock.");
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock crushes scissors.");
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors cut paper.");
} else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper covers rock.");
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock crushes scissors.");
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors cut paper.");
} else {
    console.log("Hmm...are you sure you picked rock, paper, or scissors?");
}

//Record win or loss for the player for the round
//Play game in 5 playRound
//Display the results of each playRound
//Declare player as a winner or loser of the game at the end of 5 playRound
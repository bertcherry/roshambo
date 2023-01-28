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

//Play game in 5 playRound
let wins = 0;
let losses = 0;

//Get playerSelection from a prompt
//Make playerSelection case insensitive (change to lowercase)
while ((wins < 3) && (losses < 3)) {
    let playerInput = prompt("Choose rock, paper, or scissors", "");
    let playerSelection = playerInput.toLowerCase();
    console.log(playerSelection);

//Compare playerSelection to computerSelection
//Declare results of the playRound (win or loss) for whatever combination occurred
//Record win or loss for the player for the round
if (playerSelection === computerSelection) {
    console.log("It's a tie!");
} else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper covers rock.");
    losses++;
} else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock crushes scissors.");
    wins++;
} else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors cut paper.");
    losses++;
} else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper covers rock.");
    wins++;
} else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock crushes scissors.");
    losses++;
} else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors cut paper.");
    wins++;
} else {
    console.log("Hmm...are you sure you picked rock, paper, or scissors?");
}

//Display the results of each playRound
console.log(wins + " wins");
console.log(losses + " losses");
}

//Declare player as a winner or loser of the game at the end of 5 playRound
if (wins === 3) {
    console.log("You've won the game! Way to show that computer who's boss.");
} else if (losses === 3) {
    console.log("You've lost the game! Better luck next time.");
} else {
    console.log("Keep playing! You've got this.")
}
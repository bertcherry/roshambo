//Play game in 5 playRound
let wins = 0;
let losses = 0;

function game() {
    let rounds = 0;
    while ((wins < 3) && (losses < 3)) {
        console.log("Round " + rounds + ", begin!");
        let playerSelection = getPlayerChoice(); 
        let computerSelection = getComputerChoice();
        let roundResult = playRound(playerSelection, computerSelection);
        recordResult(roundResult);
//Declare player as a winner or loser of the game at the end of 5 playRound
        if (wins === 3) {
            console.log("You've won the game! Way to show that computer who's boss.");
        } else if (losses === 3) {
            console.log("You've lost the game! Better luck next time.");
        } else {
            console.log("Keep playing! You've got this.")
        }
        rounds++;
        console.log("Game score: after " +
            rounds + " rounds , we have " +
            wins + " human wins and " +
            losses + " computer wins");
    }
}

//getComputerChoice to randomly return rock, paper, or scissors as computerSelection
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0) {
        return computerSelection = "rock"; 
    } else if (computerChoice == 1) {
        return computerSelection = "paper";
    } else {
        return computerSelection = "scissors";
    }
} 

//Event listeners on buttons prompt playRound according to button id as playerSelection
const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");

function handleButtonClick(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = e.target.id;
    playRound(playerSelection, computerSelection);
}

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick)
});

//Compare playerSelection to computerSelection
//Declare results of the playRound (win or loss) for whatever combination occurred
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        results.textContent = "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        results.textContent = "You lose! Paper covers rock.";
        return roundResult = "loss";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        results.textContent = "You win! Rock crushes scissors.";
        return roundResult = "win";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        results.textContent = "You lose! Scissors cut paper.";
        return roundResult = "loss";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        results.textContent = "You win! Paper covers rock.";
        return roundResult = "win";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        results.textContent = "You lose! Rock crushes scissors.";
        return roundResult = "loss";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        results.textContent = "You win! Scissors cut paper.";
        return roundResult = "win";
    } else {
        results.textContent = "Hmm...are you sure you picked rock, paper, or scissors?";
    }
}

//Record win or loss for the player for the round
function recordResult(roundResult) {
    if (roundResult === "win") {
        wins++;
    } else if (roundResult === "loss") {
        losses++;
    } else {
    }
}

//game();
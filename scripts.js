//Define objects in memory
const results = document.querySelector(".results");
const container = document.querySelector(".container");
const playerButtons = document.querySelector(".player-buttons");
const buttons = playerButtons.querySelectorAll("button");
const gameTally = document.querySelector(".game-tally");
const info = document.querySelector(".info");
const instructions = document.querySelector(".instructions");

//Respond to button click by grabbing computerSelection, run playRound, and report result to gameScore
function handleButtonClick(e) {
    let computerSelection = getComputerChoice();
    let playerSelection = this.id;
    console.log(playerSelection);
    playRound(playerSelection, computerSelection);
    let roundResult = playRound(playerSelection, computerSelection);
    recordResult(roundResult);
    gameScore();
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

//Set beginning condition for gameScore
let wins = 0;
let losses = 0;
let rounds = 0;

//Display game score, display winner after one reaches 5 and remove play buttons
function gameScore() {
    rounds++;
    gameTally.textContent = "Game score: after " +
        rounds + " rounds, we have " +
        wins + " human wins and " +
        losses + " computer wins.";
    if (wins === 5) {
        gameTally.textContent += "\nYou've won the game! Way to show that computer who's boss.";
        container.removeChild(playerButtons);
        info.removeChild(instructions);
    } else if (losses === 5) {
        gameTally.textContent += "\nYou've lost the game! Better luck next time.";
        container.removeChild(playerButtons);
        info.removeChild(instructions);
    } else {
        gameTally.textContent += "\nKeep playing! You've got this.";
    }
}

//Event listeners on buttons prompt playRound according to button id as playerSelection
buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});
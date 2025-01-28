"use strict"; 

// Declaration
const options = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0; 

// Computer Choice Function
const getComputerChoice = function() {
    // Generate a random number
    let randomNumber = Math.trunc(Math.random() * 3);
    let randomChoice = options[randomNumber];
    return randomChoice; 
}
// Human Choice Function
const getHumanChoice = function() {
    //Human Input
    let humanInput = prompt("Choose One---Rock, Paper or Scissors or Leave Blank to Quit");

    if (humanInput === null || humanInput === "") {
        alert("You're a Quitter !!!"); 
        return null; 
    } else if (humanInput.toLowerCase() === "rock" ||
        humanInput.toLowerCase() === "paper" ||
        humanInput.toLowerCase() === "scissors"
    ) {
        alert("Good Choice!!!"); 
        return humanInput.toLowerCase();
    } else {
        alert("Invalid Choice--Choose One--Rock, Paper or Scissors");
        return undefined; 
    }
}



//AJUSTAR IF STATEMENTS !!!!

const playRound = function(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win---Rock Beats scissors");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win---Paper Beats rock");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win---Scissors Beat paper");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Loose--- Paper Beats rock");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Loose---Scissors Beat paper");
        computerScore++;
    } else {
        console.log("You Loose---Rock Beats Scissors");
        computerScore++;
    }
}

playRound();
console.log(getComputerChoice());
console.log(getHumanChoice());
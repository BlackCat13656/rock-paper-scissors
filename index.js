"use strict";

//Global Scope
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
let printHumanScore = document.querySelector(".humanScore");
let printComputerScore = document.querySelector(".computerScore");
let scoreMessage = document.querySelector(".finalScoreMessage");
printHumanScore.textContent = 0;
printComputerScore.textContent = 0;

//Computer Choice Function
const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);
  let computerSelection = choices[randomNum];
  return computerSelection;
};

//Playround Formula
const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    scoreMessage.textContent = "It's a Tie";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    scoreMessage.textContent = `You Win---${humanChoice} beat ${computerChoice}`;
    printHumanScore.textContent = ++humanScore;
  } else {
    scoreMessage.textContent = `You Loose---${computerChoice} beat ${humanChoice}`;
    printComputerScore.textContent = ++computerScore;
  }

  //End of Game Message
  if (humanScore > 4 && computerScore < humanScore) {
    scoreMessage.textContent = `You Won the Game ${humanScore} VS. ${computerScore}`;
  } else if (computerScore > 4 && humanScore < computerScore) {
    scoreMessage.textContent = `You Lost the Game ${computerScore} VS. ${humanScore}`;
  }
};

//Event Listeners
rockBtn.addEventListener("click", () => {
  let computerRandomSelection = getComputerChoice();
  playRound("rock", computerRandomSelection);
});

paperBtn.addEventListener("click", () => {
  let computerRandomSelection = getComputerChoice();
  playRound("paper", computerRandomSelection);
});

scissorsBtn.addEventListener("click", () => {
  let computerRandomSelection = getComputerChoice();
  playRound("scissors", computerRandomSelection);
});

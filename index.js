"use strict";

//Global Scope
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

//Computer Choice Function
const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);
  let computerSelection = choices[randomNum];
  return computerSelection;
};

//Human Choice Function
const getHumanChoice = function () {
  let humanInput = prompt("Choose 1: Rock, Paper or Scissors").toLowerCase();

  while (
    humanInput !== "rock" &&
    humanInput !== "paper" &&
    humanInput !== "scissors"
  ) {
    alert("Wrong Choice");
    humanInput = prompt("Choose 1: Rock, Paper or scissors").toLowerCase();
  }
  return humanInput;
};

//Playround Formula
const playRound = function (humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Tie");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You Win---${humanChoice} beat ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You Loose---${computerChoice} beat ${humanChoice}`);
    computerScore++;
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

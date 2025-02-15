"use strict";

//Global Scope
const choices = ["rock", "paper", "scissors"];

//Computer Choice Function
const getComputerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);
  let computerSelection = choices[randomNum];
  return computerSelection;
};

//Human Choice Function
const gethumanChoice = function () {
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

//Playgame Function
const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

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

  //5 Rounds Loop
  for (let i = 0; i < 5; i++) {
    let humanChoice = gethumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  //Final Sccore Message
  let finalMessage;
  if (humanScore === computerScore) {
    finalMessage = "It's a tie";
  } else if (humanScore > computerScore) {
    finalMessage = "You Won";
  } else {
    finalMessage = "You Loose";
  }
  console.log(
    `${finalMessage}. Final Score----Human ${humanScore} VS Computer ${computerScore}`
  );
};

playGame();

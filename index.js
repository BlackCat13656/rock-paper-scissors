//GLOBAL SCOPE--------------
const humanScore = 0;
const computerScore = 0;
let computerSelection = getComputerChoice;
let humanSelection = getHumanChoice;


//COMPUTER CHOICE------------
function getComputerChoice() {

    let computerChoice; 
    let randomNumber = Math.floor(Math.random() * 3) ;

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber === 1) {
        computerChoice = "paper"; 
    } else {
        computerChoice = "scissors";
    }
    return computerChoice; 
}


//HUMAN CHOICE--------------
function getHumanChoice() {

    let humanChoice = prompt("Choose One---Rock, Paper or Scissors");

    if (humanChoice === null) {
        let quitterMessage = alert("You're a Quitter....See You next time");
        return quitterMessage;
    } else {
        if (humanChoice.toLowerCase() === "rock" ||
            humanChoice.toLowerCase() === "paper" ||
            humanChoice.toLowerCase() === "scissors") {
            alert("Nice Selection");
        } else {
            humanChoice.valueOf = "";
            alert("please choose a valid selection");
            getHumanChoice();
        }
    }
    return humanChoice.toLowerCase();
}


//PLAY ROUND------------
function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        alert("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        alert("One Point for the Human, rock beat scissors");
        ++humanScore; 
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        alert("One Point for the Human, paper beat rock");
        ++humanScore;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        alert("One point for the human, scissors beat paper");
        ++humanScore;
    } else {
        alert("One Point for the COMPUTER!")
        ++computerScore;
    }
}


//PLAY AGAIN----------------
function playAgain() {
        
    let yesOrNo = confirm("Do you want to play again?");

    if (yesOrNo == true) {
        playGame();
    } else {
        alert("Have a Nice Day!")
    }
}


console.log(humanSelection());
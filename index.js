//ROCK PAPER SCISSORS GAME-----played against computer--

//GLOBAL SCOPE--------------
let humanSelection = getHumanChoice;
let computerSelection = getComputerChoice;


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
        alert("You're a Quitter....See You next time");
    }

    if (humanChoice.toLowerCase() === "rock" ||
        humanChoice.toLowerCase() === "paper" ||
        humanChoice.toLowerCase() === "scissors") {
        alert("Nice Selection");
    } else {
        alert("please choose a valid selection");
        getHumanChoice();
    }
   
    return humanChoice.toLowerCase();
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


//PLAY GAME FUNCTION------------
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    alert("The Player with most wins in 5 rounds wins");

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

    //5 GAME ROUNDS-------

    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());
    playRound(humanSelection(), computerSelection());


    if (humanScore > computerScore) {
        alert(`Human wins with a score of: ${humanScore} vs ${computerScore}`);
    } else if (humanScore < computerScore) {
        alert(`Computer wins with a score of: ${computerScore} vs ${humanScore}`);
    } else {
        alert(`No one wins, the game is a tie with a score of: ${humanScore} vs ${computerScore}`);
    }

    playAgain();

}

playGame();
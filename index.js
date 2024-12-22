//ROCK PAPER SCISSORS GAME-----played against computer--

//COMPUTER CHOICE
//generate computer choice
//assign computer choice to a variable
//return computer choice variable

//HUMAN CHOICE
//ask get human choice
//assign choice to variable
//return human choice variable

//SCORE VARIABLES DCLARATION

//PLAY ROUND
//get computer and human choices 
//compare both options
//declare a winner

//PLAY GAME
//loop PLAY ROUND 5 times
//output declare a winner



//GLOBAL SCOPE


let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


//COMPUTER CHOICE

function getComputerChoice() {

    let computerChoice; 

    let randomNumber = Math.floor(Math.random() * 3) ;

    if (randomNumber === 0) {
        computerChoice = "rock";
    } else if (randomNumber == 1) {
        computerChoice = "paper"; 
    } else {
        computerChoice = "scissors";
    }
    return computerChoice; 
}


//HUMAN CHOICE

function getHumanChoice() {

    let humanChoice = prompt("Choose One---Rock, Paper or Scissors");

    if (humanChoice.toLowerCase() == "rock" ||
        humanChoice.toLowerCase() == "paper" ||
        humanChoice.toLowerCase() == "scissors") {
        alert("Nice Selection");
    } else {
        return getHumanChoice(); 
    }
   
    return humanChoice.toLowerCase();
}


//PLAY GAME

function playGame() {
    
    let humanScore = 0;
    let computerScore = 0;

    //PLAY ROUND

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
        alert("It's a tie");
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
        alert("One Point for the Human, rock beat scissors");
        ++humanScore; 
        } else if (humanChoice == "paper" && computerChoice == "rock") {
        alert("One Point for the Human, paper beat rock");
        ++humanScore;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
        alert("One point for the human, scissors beat paper");
        ++humanScore;
        } else {
        alert("One Point for the COMPUTER!")
        ++computerScore;
        }
    }
   
    for (i = 0; i < 5; i++) {
        playRound(humanSelection, computerSelection);
    } 

    if (humanScore > computerScore) {
        alert(`Human Wins with Human score: ${humanScore} vs Computer Score: ${computerScore} `);
    } else {
        alert(`Computer Wins wit Computer score: ${computerScore} vs Human score: ${humanScore}`);
    }
}

playGame();








const listSelection = ["rock", "paper", "scissors"];
let humanScore = 0; 
let computerScore = 0; 



let getComputerChoice = function() {

    //Fisher Yates Algorithm
    for (let i = listSelection.length - 1; i > 0; i--) {

       //generate random number
        const random = Math.floor(Math.random() * (i + 1));

       //random number to string
        return listSelection[random];
    } 
}

console.log(getComputerChoice());


let getHumanChoice = function() {
    let humanInput = prompt("input one --- rock, paper, or scissors");
    console.log(humanInput); 
}
 

getHumanChoice();
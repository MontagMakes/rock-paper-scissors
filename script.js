//alternative branch
//Create function named "getComputerChoice" to get Computer's choice
function getComputerChoice(){
    //  Create variable "computerChoice" of type string
    let computerChoice = "";
    //  Create variable "randomChoice", and give it random value between 1 and 3
    let randomChoice = Math.floor(Math.random()*3)+1;
    if(randomChoice === 1){
        //IF randomChoice = 1, store "rock" in computerChoice
        computerChoice = "rock";
    } else if (randomChoice === 2){
        //ELSE IF randomChoice = 2, store "paper" in computerChoice
        computerChoice = "paper";
    } else {
        //ELSE randomChoice = 3, store "scissors" in computerChoice
        computerChoice = "scissors"
    }
    return computerChoice;
}

//Create a function "getUserChoice"
function getUserChoice(){
    //Create a variable "userChoice"
    //Prompt the User to choose between "rock", "paper" or "scissors"
    let userChoice = prompt("Please choose one of the 3 options, Rock, Paper or scissors.").toLowerCase();
    
    //check if the user input is correct
    //Return user's choice
    if (userChoice === "rock"){
        return "rock"
    } else if (userChoice === "paper"){
        return "paper"
    } else if (userChoice === "scissors"){
        return "scissors"
    } else {
        console.log("Invalid Input, Please refresh the page and play again.");
    }
}


//Create a function named "compareChoices" to compare both variables
function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return ("tie")
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return("lose")
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        return("win")
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return("win")
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return("lose")
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return("win")
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return("lose")
    }
}

function game(){
    let matchesWon = 0;
    let matcheslost = 0;
    let matchestied = 0;
    for (let i = 0; i < 5; i++){
        let round = playRound(getUserChoice(), getComputerChoice())
        if (round === "win"){
            matchesWon++;
            console.log("congratulations, You have won!");
        } else if (round === "lose"){
            matcheslost++;
            console.log("You have lost, Better luck next time.");
        } else {
            matchestied++;
            console.log("Too bad, It was a tie.");
        }
    }
    console.log(matchesWon);
    console.log(matcheslost);
    console.log(matchestied);
}

console.log(game())
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
//Create a variable named "computerChoice" of type string
//store "rock", "paper" or "scissors" in the computer variable
let computerChoice = getComputerChoice();

//Create a function "getUserChoice"
function getUserChoice(){
    //Create a variable "userChoice"
    //Prompt the User to choose between "rock", "paper" or "scissors"
    let userChoice = prompt("Please Submit '1' to choose 'rock', '2' to choose 'paper' and '3' to choose 'scissors'");
    
    //check if the user input is correct
    //Return user's choice
    if (userChoice === "1"){
        return "rock"
    } else if (userChoice === "2"){
        return "paper"
    } else if (userChoice === "3"){
        return "scissors"
    } else {
        console.log("Invalid Input, Please refresh the page and play again.");
    }
}

//Create a variable named "userChoice" for User's choice
//store user's choice in "userChoice"
let userChoice = getUserChoice();

//Create a function named "compareChoices" to compare both variables
function compareChoices(){
    if (userChoice === computerChoice){
        console.log("The match is a Tie")
    } else if (userChoice === "rock" && computerChoice === "paper"){
        console.log("You have lost, Goodluck next time.")
    } else if (userChoice === "rock" && computerChoice === "scissors"){
        console.log("Congratulations, You have won")
    } else if (userChoice === "paper" && computerChoice === "rock"){
        console.log("Congratulations, You have won")
    } else if (userChoice === "paper" && computerChoice === "scissors"){
        console.log("You have lost, Goodluck next time.")
    } else if (userChoice === "scissors" && computerChoice === "paper"){
        console.log("Congratulations, You have won")
    } else if (userChoice === "scissors" && computerChoice === "rock"){
        console.log("You have lost, Goodluck next time.")
    }
}

//IF userChoice = computerChoice
//  output "The match is a tie"
//else if userChoice = "rock" and computerChoice = "paper"
//  output "User has lost"
//else if userChoice = "rock" and computerChoice = "scissors"
//  output "User has won"
//else if userChoice = "paper" and computerChoice = "rock"
//  output "User has won"
//else if userChoice = "paper" and computerChoice = "scissors"
//  output "User has lost"
//else if userChoice = "scissors" and computerChoice = "paper"
//  output "User has won"
//else if userChoice = "scissors" and computerChoice = "rock"
//  output "User has lost"
//

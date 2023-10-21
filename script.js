//rps-ui branch

let btnRock = document.querySelector(".btnRock");
let btnPaper = document.querySelector(".btnPaper");
let btnScissors = document.querySelector(".btnScissors");
let results = document.querySelector(".results");

let player = 0;
let computer = 0;
let ties = 0;

round = btnRock.addEventListener("click", ()=>{
    round = playRound("rock", getComputerChoice())
    game(round);
});
btnPaper.addEventListener("click", ()=>{
    round = playRound("paper", getComputerChoice())
    game(round);
});
btnScissors.addEventListener("click", ()=>{
    round = playRound("scissors", getComputerChoice())
    game(round);
});

game();

function getComputerChoice(){
    let computerChoice = "";
    let randomChoice = Math.floor(Math.random()*3)+1;
    if(randomChoice === 1){
        
        computerChoice = "rock";
    } else if (randomChoice === 2){
        
        computerChoice = "paper";
    } else {
        
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getUserChoice(choiceButtonClick){
    if(!choiceButtonClick){
        let userChoice = prompt("Please choose one of the 3 options, Rock, Paper or scissors.").toLowerCase();
    
        if (userChoice === "rock"){
            return "rock"
        } else if (userChoice === "paper"){
            return "paper"
        } else if (userChoice === "scissors"){
            return "scissors"
        } else {
            results.textContent = "Invalid Input, Please refresh the page and play again.";
        }
    } else {
        return choiceButtonClick;
    }
    
}

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

function game(round){
    
    console.log(round)
    if (round === "win"){
        player++;
        

    } else if (round === "lose"){
        computer++;
        

    } else if (round === "tie") {
        ties++;
        
    }

    results.textContent = `Player: ${player}  Computer: ${computer}  Ties: ${ties}.`;

    if (player+computer+ties === 5){
        if (player > computer && player > ties){
            results.textContent = "congratulations, You have won!";
        } else if (computer > player && computer > ties){
            results.textContent = "You have lost, Better luck next time.";
        } else if (ties > player && ties > computer){
            results.textContent = "Too bad, It was a tie.";    
        }
    }
}


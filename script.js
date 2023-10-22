//rps-ui branch


let btnRock = document.querySelector(".btnRock");
let btnPaper = document.querySelector(".btnPaper");
let btnScissors = document.querySelector(".btnScissors");

let playerScore = document.querySelector(".playerWins");

let computerScore = document.querySelector(".computerWins");

let imageQuestionMarkPlayer = document.querySelector(".questionMarkImagePlayer");
let imageQuestionMarkComputer = document.querySelector(".questionMarkImageComputer");

let playerChoice;
let computerChoice;
let round;

let player = 0;
let computer = 0;
let ties = 0;

let maxMatches = 5;

btnRock.addEventListener("click", ()=>{
    imageQuestionMarkPlayer.setAttribute("src", "/images/rockTransparent.png");
    playerChoice = "rock";
    computerChoice = getComputerChoice();

    setTimeout(()=>{
        game(round);
    }, 4000)
    
});

btnPaper.addEventListener("click", ()=>{
    imageQuestionMarkPlayer.setAttribute("src", "/images/paperTransparent.png");
    playerChoice = "paper";
    computerChoice = getComputerChoice();
    
    setTimeout(()=>{
        game(round);
    }, 4000)
});

btnScissors.addEventListener("click", ()=>{
    imageQuestionMarkPlayer.setAttribute("src", "/images/scissorsTransparent.png");
    playerChoice = "scissors";
    computerChoice = getComputerChoice();

    setTimeout(()=>{
        game(round);
    }, 4000)
});

function game(round){
    let matchesPlayed = document.querySelector(".matchesPlayed");

    round = playRound(playerChoice, computerChoice);
    console.log(round)
    if (round === "win"){
        player++;
        playerScore.textContent = `Player: ${player}`;
        setQuestionMarks();

    } else if (round === "lose"){
        computer++;
        computerScore.textContent = `Computer: ${computer}`;
        setQuestionMarks();

    } else if (round === "tie") {
        ties++;
        setQuestionMarks();
    }
    
    matchesPlayed.textContent = `Matches ${computer+player}/${maxMatches}`;
    if (player+computer === maxMatches){
        gameEnd();
    }
}

function gameEnd(){
    setTimeout(() => {    
        if (player > computer && player > ties){
            alert("congratulations, You have won!");
        } else if (computer > player && computer > ties){
            alert("You have lost, Better luck next time.");
        } else if (ties > player && ties > computer){
            alert("Too bad, It was a tie.");
        }
        
        player = 0;
        computer = 0;
        ties = 0;
        matchesPlayed = 0;
        
    }, 3000)
}

function setQuestionMarks(){
    imageQuestionMarkPlayer.setAttribute("src", "/images/questionMarkTransparent.png");
    imageQuestionMarkComputer.setAttribute("src", "/images/questionMarkTransparent.png");
}

function getComputerChoice(){
    let computerChoice = "";
    let randomChoice = Math.floor(Math.random()*3)+1;
    if(randomChoice === 1){
        computerChoice = "rock";
        setTimeout(() => {
            imageQuestionMarkComputer.setAttribute("src", "/images/rockTransparent.png");
        }, 2000)
    } else if (randomChoice === 2){        
        computerChoice = "paper";
        setTimeout(() => {
            imageQuestionMarkComputer.setAttribute("src", "/images/paperTransparent.png");
        }, 2000)
    
    } else {
        computerChoice = "scissors"
        setTimeout(() => {
            imageQuestionMarkComputer.setAttribute("src", "/images/scissorsTransparent.png");
        }, 2000)
    }
    return computerChoice;
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


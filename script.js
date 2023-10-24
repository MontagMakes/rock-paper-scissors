//rps-ui branch

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

const btnRock = document.querySelector(".btnRock");
const btnPaper = document.querySelector(".btnPaper");
const btnScissors = document.querySelector(".btnScissors");

const imageQuestionMarkPlayer = document.querySelector(".questionMarkImagePlayer");
const imageQuestionMarkComputer = document.querySelector(".questionMarkImageComputer");

const dialog = document.querySelector("dialog");
const dialogTxt = document.querySelector(".dialogTxt")
const closeDialog = document.querySelector(".closeDialog")

let playerScore = document.querySelector(".playerWins");
let computerScore = document.querySelector(".computerWins");

let isListenerEnabled = true;

let playerChoice;
let computerChoice;
let round;

let player = 0;
let computer = 0;

let maxMatches = 5;


clickEvents();

function clickEvents() {
    closeDialog.addEventListener("click", () => {
        player = 0;
        computer = 0;
        playerScore.textContent = `Player: ${player}`;
        computerScore.textContent = `Computer: ${computer}`;
        line1.textContent = "Choose your weapon";
        line2.textContent = "First to score 5 points wins the game";
        dialog.close();

    })
    btnRock.addEventListener("click", () => {
        if (isListenerEnabled) {
            isListenerEnabled = false;

            imageQuestionMarkPlayer.setAttribute("src", "images/rockTransparent.png");
            playerChoice = "rock";
            computerChoice = getComputerChoice();

            setTimeout(() => {
                game(round);
                isListenerEnabled = true;
            }, 1500)
        }
    });


    btnPaper.addEventListener("click", () => {
        if (isListenerEnabled) {
            isListenerEnabled = false;
            imageQuestionMarkPlayer.setAttribute("src", "images/paperTransparent.png");
            playerChoice = "paper";
            computerChoice = getComputerChoice();

            setTimeout(() => {
                game(round);
                isListenerEnabled = true;
            }, 1500)
        }

    });

    btnScissors.addEventListener("click", () => {
        if (isListenerEnabled) {
            isListenerEnabled = false;

            imageQuestionMarkPlayer.setAttribute("src", "images/scissorsTransparent.png");
            playerChoice = "scissors";
            computerChoice = getComputerChoice();

            setTimeout(() => {
                game(round);
                isListenerEnabled = true;
            }, 1500)
        }

    });
}

function game(round) {

    round = playRound(playerChoice, computerChoice);
    console.log(round)
    if (round === "win") {
        player++;
        playerScore.textContent = `Player: ${player}`;
        line1.textContent = "You win!";
        line2.textContent = `${playerChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}`;
        setQuestionMarks();

    } else if (round === "lose") {
        computer++;
        computerScore.textContent = `Computer: ${computer}`;
        line1.textContent = "You lose!";
        line2.textContent = `${playerChoice.toUpperCase()} is beaten by ${computerChoice.toUpperCase()}`;
        setQuestionMarks();

    } else if (round === "tie") {
        line1.textContent = "It's a Tie!";
        line2.textContent = `${playerChoice.toUpperCase()} ties with ${computerChoice.toUpperCase()}`;
        setQuestionMarks();
    }

    if (player === 5 || computer === 5) {
        gameEnd();
    }
}

function gameEnd() {

    if (player === 5) {
        dialogTxt.textContent = "Congratulations, You have won!";
    } else if (computer === 5) {
        dialogTxt.textContent = "Unfortunately, You have lost.";
    };

    dialog.showModal();
}

function setQuestionMarks() {
    imageQuestionMarkPlayer.setAttribute("src", "images/questionMarkTransparent.png");
    imageQuestionMarkComputer.setAttribute("src", "images/questionMarkTransparent.png");
}

function getComputerChoice() {
    let computerChoice = "";
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        computerChoice = "rock";

        imageQuestionMarkComputer.setAttribute("src", "images/rockTransparent.png");

    } else if (randomChoice === 2) {
        computerChoice = "paper";

        imageQuestionMarkComputer.setAttribute("src", "images/paperTransparent.png");


    } else {
        computerChoice = "scissors"
        imageQuestionMarkComputer.setAttribute("src", "images/scissorsTransparent.png");

    }
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

        return ("tie")
    } else if (playerSelection === "rock" && computerSelection === "paper") {

        return ("lose")
    } else if (playerSelection === "rock" && computerSelection === "scissors") {

        return ("win")
    } else if (playerSelection === "paper" && computerSelection === "rock") {

        return ("win")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {

        return ("lose")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {

        return ("win")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {

        return ("lose")
    }
}


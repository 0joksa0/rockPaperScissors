let userScore = 0;
let computerScore = 0;
let userChoice;
let computerChoice;

const div = document.querySelector(".text");
const text = document.createElement("h3");
const text2 = document.createElement("h4");
const cScore = document.querySelector("#cScore");
const pScore = document.querySelector("#pScore");
div.append(text);
div.append(text2);

function gameReset(){
    userScore = 0;
    computerScore = 0;
    text.textContent = "";
    text2.textContent = "";
    cScore.textContent = "0";
    pScore.textContent = "0";
}

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "paper";
        case 2:
            return "rock";
        case 3:
            return "scissors";
        default:
            return "Error, default return statement";
    }

}



function playRound(userChoice, computerChoice){

    let winner = -1;
    userChoice = userChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    // console.log("computer: " +computerChoice);
    // console.log("user: " +userChoice);
    if (userChoice == computerChoice) {
       winner = -1;
    }
    if( (userChoice == "paper" && computerChoice == "rock" )||
        (userChoice == "rock" && computerChoice == "scissors" )||
        (userChoice == "scissors" && computerChoice == "paper") )
        winner = 1; //user = 1
    if((computerChoice == "paper" && userChoice == "rock") ||
        (computerChoice == "rock" && userChoice == "scissors") ||
        (computerChoice == "scissors" && userChoice == "paper"))
        winner = 0; //computer = 0
    updateMessage(winner,userChoice,computerChoice);
    
}

function updateMessage(winner, userChoice, computerChoice){
    if(winner >= 0){
        if (winner) {
            text.textContent ="User wins";
            text2.textContent = firstLetterCase(userChoice) + ', beats ' + computerChoice;
            userScore++;
        } else {
            text.textContent = "Computer wins" ;
            text2.textContent = firstLetterCase(computerChoice) + ', beats ' + userChoice;
            computerScore++;
        }
    }else{
        text.textContent = "Tied";
        text2.textContent = "";
    }
    console.log("user: " + userScore + " computer: " +computerScore);
}

function announceWinner(){
    if(userScore > computerScore)
        alert("User wins a game");
    else
        alert("Computer wins a game");
}

function game(){
    const buttons = document.querySelectorAll("button");
    const paragraphs = document.querySelectorAll(".pc");


    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add("clicked");

            computerChoice = getComputerChoice();
            playRound(button.id, computerChoice);

            paragraphs.forEach(paragraph => {
                if(paragraph.id == computerChoice)
                    paragraph.classList.add("clicked");
            });

            buttons.forEach(button => button.addEventListener("transitionend", removeTransition));
            paragraphs.forEach(paragraph => paragraph.addEventListener("transitionend", removeTransition));
        
            cScore.textContent = computerScore;
            pScore.textContent = userScore;
            if(userScore + computerScore >= 5){
                announceWinner();
                gameReset();
            }
        });
        
    
    });
    
}

function removeTransition(e){
    if(e.propertyName !== "transform" ) return;
    this.classList.remove("clicked");
  }

function firstLetterCase(string){
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}



game();
let userScore = 0;
let computerScore = 0;
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

function getUserChoice(){
    let choice = prompt("Choose between: rock, paper, scissors");
    return choice;
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
            console.log("User wins");
            console.log(firstLetterCase(userChoice) + ', beats ' + computerChoice);
            userScore++;
        } else {
            console.log("Computer wins");
            console.log(firstLetterCase(computerChoice) + ', beats ' + userChoice);
            computerScore++;
        }
    }else{
        console.log("Tied");
    }
    console.log("user: " + userScore + " computer: " +computerScore);
}

function announceWinner(){
    if(userScore > computerScore)
        console.log("User wins a game");
    else
        console.log("Computer wins a game");
}

function game(){
    for( let i = 0; userScore>computerScore ? userScore : computerScore < 5; i++){
        playRound(getUserChoice(), getComputerChoice());
    }
    announceWinner()
}

game();

function firstLetterCase(string){
    string = string[0].toUpperCase() + string.slice(1);
    return string;
}
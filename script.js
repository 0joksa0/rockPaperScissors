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


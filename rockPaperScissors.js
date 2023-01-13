function rockPaperScissors(){

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    const rock = "Rock";
    const paper = "Paper";
    const scissors = "Scissors";

    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerTurn;    
    let playerTurn;
    
    let recursiveAsyncReadLine = function () {        
        readline.question(`Choose one of the following three options:
            -1.Type "r" OR rock" in console, if your choice is "Rock";
            -2.Type "p" OR "paper" in console, if your choice is "Paper";
            -3."Type "s" OR "scissors" in console, if your choice is "Scissors";`, string => {
            
            playerTurn = String(string);
            
            if (playerTurn == "r" || playerTurn == "rock"){
                playerTurn = rock;
            } else if (playerTurn == "p" || playerTurn == "paper"){
                playerTurn = paper;
            } else if (playerTurn == "s" || playerTurn == "scissors"){
                playerTurn = scissors;
            } else {
                console.log("Invalid input. Try Again...")
                recursiveAsyncReadLine()
            }
            console.log(`You choose ${playerTurn}`)

            switch (computerRandomNumber){
                case 1: computerTurn = rock; break;
                case 2: computerTurn = paper; break;
                case 3: computerTurn = scissors; break;
                default: ; break;
            }
            console.log(`The computer chooses ${computerTurn}`)

            if ((playerTurn === rock && computerTurn === scissors)
                || (playerTurn === paper && computerTurn === rock)
                || (playerTurn === scissors && computerTurn === paper)){
                    console.log("You win!")
                    return readline.close()
                } else if ((playerTurn === rock && computerTurn === paper)
                || (playerTurn === paper && computerTurn === scissors)
                || (playerTurn === scissors && computerTurn === rock)){
                    console.log("You lose!")
                    return readline.close()
                } else {
                    console.log("This game was a draw!")
                    return readline.close()
                }
        })
    }
    recursiveAsyncReadLine()
}
rockPaperScissors()
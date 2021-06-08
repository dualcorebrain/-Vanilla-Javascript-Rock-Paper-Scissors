window.addEventListener('click', game);

function game(e){
    //play 5 rounds
    //keep scores
  
    let playerScore = 0;
    let computerScore = 0;
  
  
    for(let i=0 ; i<5 ; i++){
        let playerChoice = playerPlay(e);
        let computerChoice = computerPlay();
  
        
        console.log("You Chose: " + playerChoice + " Computer Chose: " +computerChoice + "| | The Current score is: Player- " + playerScore + " Computer- " + computerScore)
  
        let roundResult = gameRound(playerChoice, computerChoice);
        console.log(roundResult);
  
        if(roundResult == "YOU WIN"){
            playerScore++;
        }
        else{
            computerScore++;
        }
  
    }
  
    if(playerScore > computerScore){
        console.log("You win the game!");
    }
    else{
        console.log("You lose the game!");
    }
  }
  
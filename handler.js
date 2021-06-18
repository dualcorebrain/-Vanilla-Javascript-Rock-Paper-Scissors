//window.addEventListener('click', game);

//document.getElementById("rock").addEventListener("click", game);


//game(); 
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;


  document.getElementById("rock").addEventListener("click", function(e){
    if(playerScore >=5 || computerScore >=5 || currentRound >= 5){
      return;
    }
    else{
      game(e);
    }
});

document.getElementById("paper").addEventListener("click", function(e){
  if(playerScore >=5 || computerScore >=5 || currentRound >= 5){
    return;
  }
  else{
    game(e);
  }
});

document.getElementById("scissor").addEventListener("click", function(e){
  if(playerScore >=5 || computerScore >=5 || currentRound >= 5){
    return;
  }
  else{
    game(e);
  }
});

function game(e){
  //play 5 rounds
  //keep scores

  console.log(e.target[id]);

  let playerChoice = playerPlay(e);
  let computerChoice = computerPlay();

  let roundResult = gameRound(playerChoice, computerChoice);
  console.log(roundResult);

  if(roundResult == "YOU WIN"){
    playerScore++;
  }
  else{
    computerScore++;
  }

  console.log("You Chose: " + playerChoice + " Computer Chose: " + computerChoice + "| | The Current score is: Player- " + playerScore + " Computer- " + computerScore);


if(currentRound == 4){
  if(playerScore > computerScore){
    console.log("You win the game!");
  }
  else{
    console.log("You lose the game!");
  }
}
currentRound++;
}




function playerPlay(e){
  // get user Input
  // rock or paper or a scissor and nothing else
  
//Animations
  let buttonClicked = e.target.id;


  //let userInput = console.log("What is your choice?");
  //let userInputNumber = parseInt(userInput);

  userInputUpperCase = buttonClicked.toUpperCase();

  return userInputUpperCase;


}


function computerPlay(){
//return randomly generated rock/paper/scissor   

  let randomNumber = Math.floor(Math.random() * 3);
  
  if(randomNumber == 0){
      return "ROCK";
  }
  else if(randomNumber == 1){
      return "PAPER";
  }
  else if(randomNumber == 2){
      return "SCISSOR";
  }
}



function gameRound(playerSelection, computerSelection){
    //return "You lose! Paper beats rock" or "You Win! Rock beats Scissors"
    // make inputs not case sensitive

    playerSelectionUpperCase = playerSelection.toUpperCase();
    computerSelectionUpperCase = computerSelection.toUpperCase();

    if(playerSelectionUpperCase == computerSelectionUpperCase){
      return "Tie";
    }
    else if(playerSelectionUpperCase == "ROCK" && computerSelectionUpperCase == "SCISSOR"){
      return "YOU WIN";

    }
    else if(playerSelectionUpperCase == "ROCK" && computerSelectionUpperCase == "PAPER"){
      return "YOU LOSE";

    }
    else if(playerSelectionUpperCase == "PAPER" && computerSelectionUpperCase == "ROCK"){
      return "YOU WIN";

    }
    else if(playerSelectionUpperCase == "PAPER" && computerSelectionUpperCase == "SCISSOR"){
      return "YOU LOSE";

    }
    else if(playerSelectionUpperCase == "SCISSOR" && computerSelectionUpperCase == "ROCK"){
      return "YOU LOSE";

    }
    else if(playerSelectionUpperCase == "SCISSOR" && computerSelectionUpperCase == "PAPER"){
      return "YOU WIN";
    }

  }



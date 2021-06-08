
// game(); 

window.addEventListener('click', game);

function game(e){
  //play 5 rounds
  //keep scores

  let playerScore = 0;
  let computerScore = 0;


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


  if(playerScore > computerScore){
      console.log("You win the game!");
  }
  else{
      console.log("You lose the game!");
  }
}



function playerPlay(e){
  // use prompt to get user Input
  // Make sure its rock or paper or a scissor and nothing else
  // prompt always returns a String, check how to see if its a number
  // check if blank value is entered
  
//Animations
  let buttonClicked = e.target.id;


  //let userInput = console.log("What is your choice?");
  //let userInputNumber = parseInt(userInput);

  userInputUpperCase = buttonClicked.toUpperCase();
  if(userInputUpperCase === "ROCK" || userInputUpperCase === "PAPER" || userInputUpperCase === "SCISSOR"){
      return userInputUpperCase;
  }else{
      window.alert("Please enter only 'ROCK' 'PAPER' SCISSOR'!");
      playerPlay(); //restarts this function
  }

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



//window.addEventListener('click', game);

//document.getElementById("rock").addEventListener("click", game);


//game(); 
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

let logging = document.getElementsByClassName("btn");
console.log(logging);


//BUTTON/IMAGE HOVER EFFECTS
document.getElementById("rock").addEventListener("mouseenter", function(e){
  document.querySelector("#rock-image").classList.add("images-visible");
});
document.getElementById("rock").addEventListener("mouseleave", function(e){
  document.querySelector("#rock-image").classList.remove("images-visible");
});


document.getElementById("paper").addEventListener("mouseenter", function(e){
  document.querySelector("#paper-image").classList.add("images-visible");
});
document.getElementById("paper").addEventListener("mouseleave", function(e){
  document.querySelector("#paper-image").classList.remove("images-visible");
});


document.getElementById("scissor").addEventListener("mouseenter", function(e){
  document.querySelector("#scissor-image").classList.add("images-visible");
});
document.getElementById("scissor").addEventListener("mouseleave", function(e){
  document.querySelector("#scissor-image").classList.remove("images-visible");
});


//REDUCE THIS LINES OF CODE
//https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/
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

  //document.getElementById(`${e.target.id}`)

  let playerChoice = playerPlay(e);
  let computerChoice = computerPlay();

  let roundResult = gameRound(playerChoice, computerChoice);

  if(roundResult == "YOU WIN"){
    playerScore++;
  }
  else{
    computerScore++;
  }

  let consoleResult = "You Chose: " + playerChoice + " Computer Chose: " + computerChoice + "| | The Current score is: Player- " + playerScore + " Computer- " + computerScore;
  console.log(consoleResult);

  roundResultsAppender(consoleResult);

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

function roundResultsAppender(consoleResult){
    
  let resultElement = document.createElement("h2");
  let resultElementText = document.createTextNode(`${consoleResult}`);

  resultElement.appendChild(resultElementText);

  document.getElementById("result-container").appendChild(resultElement);

  if(currentRound == 4){
    document.getElementById("result-container").removeChild([0]);
  }
  return;
}

function removeRoundResults(){

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



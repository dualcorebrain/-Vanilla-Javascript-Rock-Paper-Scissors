//window.addEventListener('click', game);

//document.getElementById("rock").addEventListener("click", game);

/**THINGS TO DO:
 * Add concept of DRAW, currently in a draw computer gets the score
 * Fix loop
 * Fix the div moving downwards when new <img> element gets appended
 */

//game(); 
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

let logging = document.getElementsByClassName("btn");


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
  if(playerScore >=5 || computerScore >=5 ){
    return;
  }
  else{
    game(e);
  }
});

document.getElementById("paper").addEventListener("click", function(e){
  if(playerScore >=5 || computerScore >=5 ){
    return;
  }
  else{
    game(e);
  }
});

document.getElementById("scissor").addEventListener("click", function(e){
  if(playerScore >=5 || computerScore >=5 ){
    return;
  }
  else{
    game(e);
  }
});

document.getElementById("reset").addEventListener("click", reset);




function game(e){
  //play 5 rounds
  //keep scores

  //document.getElementById(`${e.target.id}`)

  let playerChoice = playerPlay(e);
  let computerChoice = computerPlay();

  let roundResult = gameRound(playerChoice, computerChoice);

  if(roundResult == "YOU WIN"){
    playerScore++;
  }else if(roundResult == "DRAW"){
    playerScore = playerScore;
    computerScore = computerScore;
  }
  else if(roundResult == "YOU LOSE"){
    computerScore++;
  }

  roundResultsAppender(playerScore, computerScore);
  roundImagesAppender(playerChoice, computerChoice);

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



function roundResultsAppender(playerScore, computerScore){
  let resultElement = document.createElement("h2");
  resultElement.id = "round-result";
  let resultElementText = document.createTextNode(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
  resultElement.appendChild(resultElementText);
  document.getElementById("result-container").appendChild(resultElement);



  if(currentRound > 0){
    let target = document.getElementById("result-container");

    console.log(target);

    let targetElement = target.children[0];
    target.removeChild(targetElement);


  }
  /*if(currentRound == 4){
    document.getElementById("result-container").removeChild([0]);
  }
  */
  
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

    else if(playerSelectionUpperCase == "ROCK" && computerSelectionUpperCase == "ROCK"){
      return "DRAW";
    }

    else if(playerSelectionUpperCase == "SCISSOR" && computerSelectionUpperCase == "SCISSOR"){
      return "DRAW";

    }
    else if(playerSelectionUpperCase == "PAPER" && computerSelectionUpperCase == "PAPER"){
      return "DRAW";

    }
  }


  
function roundImagesAppender(playerChoice, computerChoice){
  if(playerChoice == "ROCK"){
    let playerChoiceImg = document.createElement("img");
    playerChoiceImg.src = "images/rock-100x100.png";
    playerChoiceImg.className = "appended-image";
    document.getElementById("player-choice-container").appendChild(playerChoiceImg);
  }

  if(computerChoice == "ROCK"){
    let computerChoiceImg = document.createElement("img");
    computerChoiceImg.src = "images/rock-100x100.png";
    computerChoiceImg.className = "appended-image";
    document.getElementById("computer-choice-container").appendChild(computerChoiceImg);
  }



  if(playerChoice == "SCISSOR"){
    let playerChoiceImg = document.createElement("img");
    playerChoiceImg.src = "images/scissor-100x100.png";
    playerChoiceImg.className = "appended-image";
    document.getElementById("player-choice-container").appendChild(playerChoiceImg);
  }

  if(computerChoice == "SCISSOR"){
    let computerChoiceImg = document.createElement("img");
    computerChoiceImg.src = "images/scissor-100x100.png";
    computerChoiceImg.className = "appended-image";
    document.getElementById("computer-choice-container").appendChild(computerChoiceImg);
  }




  if(playerChoice == "PAPER"){
    let playerChoiceImg = document.createElement("img");
    playerChoiceImg.src = "images/paper-100x100.png";
    playerChoiceImg.className = "appended-image";
    document.getElementById("player-choice-container").appendChild(playerChoiceImg);
  }

  if(computerChoice == "PAPER"){
    let computerChoiceImg = document.createElement("img");
    computerChoiceImg.src = "images/paper-100x100.png";
    computerChoiceImg.className = "appended-image";
    document.getElementById("computer-choice-container").appendChild(computerChoiceImg);
  }



}


function reset(e){
  playerScore = 0;
  computerScore = 0;
  currentRound = 0;

  let playerChoiceContainerTarget = document.getElementById("player-choice-container");
  //In javacript length of the Object type arrays dynamically changes when elements are removed! 
  while(playerChoiceContainerTarget.children.length > 0){
    let playerElementToBeRemoved = playerChoiceContainerTarget.children[0];
    playerChoiceContainerTarget.removeChild(playerElementToBeRemoved);
  }


  let computerChoiceContainerTarget = document.getElementById("computer-choice-container");
  while(computerChoiceContainerTarget.children.length > 0){
    let computerElementToBeRemoved = computerChoiceContainerTarget.children[0];
    computerChoiceContainerTarget.removeChild(computerElementToBeRemoved);
  }


  let resultContainerTarget = document.getElementById("result-container");
  let resultToBeRemoved = resultContainerTarget.children[0];

  resultContainerTarget.removeChild(resultToBeRemoved);


}
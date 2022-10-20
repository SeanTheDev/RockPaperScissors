function playRound(playerSelection, computerSelection) {
  
  // Logic for a Draw
  if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
    return "Draw!";
  }

  //Give the results when playerSelection is ROCK
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER"){
    return "PAPER beats ROCK, you LOSE.";
  }
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS"){
    return "ROCK beats SCISSORS, you WIN!";
  }

  //Give the results when playerSelection is PAPER
  if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK"){
    return "Paper beats rock, you WIN!";
  }
  if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS"){
    return "SCISSORS beats PAPER, you LOSE!";
  }

  //Give the results when playerSelection is SCISSORS
  if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
    return "SCISSORS beats PAPER, you WIN!";
  }
  if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK"){
    return "ROCK beats SCISSORS, you lose!";
  }

}  

function getComputerChoice() {

  //Generate a random Number between [1 - 3] and store it
  let randomNumber = 1 + Math.floor(Math.random() * 3);

  // return a choice depending on the random number
  if (randomNumber == 1) {return "rock"}; 
  if (randomNumber == 2) {return "paper"};
  if (randomNumber == 3) {return "scissors"};

}


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

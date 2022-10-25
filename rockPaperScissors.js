/**
 * Rock Paper Scissors Game 
 * 
 * Language: JavaScript
 * 
 * Coded by Sean Rowan
 * 
 */

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  
  // Logic for a Draw
  if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
    return "Draw!";
  }

  //Give the results when playerSelection is ROCK
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER"){
    computerScore++;
    return "PAPER beats ROCK, you LOSE.";
  }
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS"){
    playerScore++;
    return "ROCK beats SCISSORS, you WIN!";
  }

  //Give the results when playerSelection is PAPER
  if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK"){
    playerScore++
    return "Paper beats rock, you WIN!";
  }
  if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS"){
    computerScore++;
    return "SCISSORS beats PAPER, you LOSE!";
  }

  //Give the results when playerSelection is SCISSORS
  if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
    playerScore++;
    return "SCISSORS beats PAPER, you WIN!";
  }
  if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK"){
    computerScore++;
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

function game(){

  alert("Welcome to Sean's Rock, Paper, Scissors game written in JavaScript!");


  while (computerScore < 2 && playerScore < 2){

     // Welcome user & prompt user input
    const playerSelection = prompt("Enter Rock, Paper, or Scissors: ");

    //get computer choice & display it
    const computerSelection = getComputerChoice();
    alert(`Computer Chooses, ${computerSelection}!`);

    //show result to user
    alert(playRound(playerSelection, computerSelection));

  }

  //Show final score
  alert(`The final score is Player: ${playerScore}, Computer: ${computerScore}.`);


}

/**
 *  MAIN PROGRAM
 */

game();


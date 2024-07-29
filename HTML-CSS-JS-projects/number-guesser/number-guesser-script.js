let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(user, comp, target){
  if ((target - user) < (target - comp)){
    return true;
  } else {
    return false;
  }
}

function updateScore(winner){
  if (winner === 'human'){
    humanScore += 1;
  }else{
    computerScore += 1;
  }
}

function advanceRound(){
  currentRoundNumber += 1;
}

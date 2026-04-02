let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget() {
  return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  const assesHumanGuess = Math.abs(targetNumber - humanGuess);
  const assesComputerGuess = Math.abs(targetNumber - computerGuess);
  if (assesHumanGuess <= assesComputerGuess) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore = humanScore + 1;
  } else if (winner === "computer") {
    computerScore = computerScore + 1;
  }
}

function advanceRound() {
  currentRoundNumber = currentRoundNumber + 1;
}

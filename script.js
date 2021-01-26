let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

// EXTRA: Returns the absolute distance between 2 parameters
const getAbsoluteDistance = (a, b) => Math.abs(a - b);

// EXTRA: Compare if computer / human is closer to target
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (humanGuess < 0 || humanGuess > 9) {
    window.alert('Hey! choose a number between 0 and 9!');
  } else if (getAbsoluteDistance(humanGuess, targetGuess) <= (getAbsoluteDistance(computerGuess, targetGuess))) {
    return true;
  } else {
    return false;
  };
}

// Compare if computer / human is closer to target
/*const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);
  return humanDifference <= computerDifference;
}
*/

// Add's points to the winner
const updateScore = winner => {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}
//Update the round
const advanceRound = () => {
  return currentRoundNumber++;
}

// commit
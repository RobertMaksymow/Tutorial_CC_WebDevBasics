const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  const validChoices = ["rock", "paper", "scissors", "cheat"];
  if (validChoices.includes(userInput)) {
    return userInput;
  } else {
    console.log("Error. Invalid input");
  }
};

const getComputerChoice = () => {
  const getRandomChoice = Math.floor(Math.random() * 3);
  if (getRandomChoice === 0) {
    return "rock";
  } else if (getRandomChoice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "cheat") {
    return "User won by CHEAT!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Computer won!";
    } else {
      return "User won";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Computer won!";
    } else {
      return "User won";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "Computer won!";
    } else {
      return "User won";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  const computerChoice = getComputerChoice();
  console.log("Play Game", userChoice, computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase().trim();
  if (userInput === 'bomb' || userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  }
}

const getComputerChoice = () => {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return 'rock';
  else if (choice === 1) return 'paper';
  else return 'scissors';
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    console.log('You win');
  } else if (userChoice === computerChoice) {
    console.log('The game was tie');
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      console.log('Computer won!');
    } else {
      console.log('You won!');
    }
  } else if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      console.log('You won!');
    } else {
      console.log('Computer won!');
    }
  } else if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      console.log('You won!');
    } else {
      console.log('Computer won!');
    }
  }
}

const playGame = () => {
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(`userChoice: ${userChoice}`);
  console.log(`computerChoice: ${computerChoice}`);
  determineWinner(userChoice, computerChoice);
}

playGame();
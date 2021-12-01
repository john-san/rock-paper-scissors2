function computerPlay() {
  // returns randomNumber between 0 and max(exclusive of max)
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  const randomNumber = getRandomNumber(3);
  const choices = ["rock", "paper", "scissors"];
  
  return choices[randomNumber];
}

function playerPlay() {
  const choices = ["rock", "paper", "scissors"];
  let keepGoing = true;
  
  while (keepGoing) {
    let userChoice = prompt("Please enter rock, paper, or scissors.").trim().toLowerCase();
  
    if (choices.includes(userChoice)) {
      keepGoing = false;
      return userChoice;
    }
  }
}

function rockVersus(computerChoice) {
  if (computerChoice == "rock") {
    return "Draw!";
  } else if (computerChoice == "scissors") {
    return "You win! Rock beats Scissors.";
  } else if (computerChoice == 'paper') {
    return "You lose! Paper beats rock.";
  }
}
  

function scissorsVersus(computerChoice) {
  if (computerChoice == "rock") {
    return "You lose! Rock beats scissors.";
  } else if (computerChoice == "scissors") {
    return "Draw!";
  } else if (computerChoice == 'paper') {
    return "You win! Scissors beats paper.";
  }
}
  
function paperVersus(computerChoice) {
  if (computerChoice == "rock") {
    return "You win! Paper beats rock.";
  } else if (computerChoice == "scissors") {
    return "You lose! Scissors beats paper.";
  } else if (computerChoice == 'paper') {
    return "Draw!";
  }
}
 
function playRound(playerSelection, computerSelection) {
  if (playerSelection == 'rock') {
    return rockVersus(computerSelection);
  } else if (playerSelection == 'paper') {
    return paperVersus(computerSelection);
  } else if (playerSelection == 'scissors') {
    return scissorsVersus(computerSelection);
  }
}


let numberOfRounds = parseInt(prompt("How many rounds do you want to play? (Max: 10)"));

if (numberOfRounds > 0 && numberOfRounds <= 10) {
  game(numberOfRounds);
} else {
  let keepGoing = true;

  while (keepGoing) {
    numberOfRounds = parseInt(prompt("Haha, real funny. So, how many rounds do you want to play? (Max: 10)"));
    if (numberOfRounds > 0 && numberOfRounds <= 10) {
      keepGoing = false;
      game(numberOfRounds);
    }
  }
}

function game(numberOfRounds) {
  console.log(`Playing ${numberOfRounds} rounds.`);
  for (let i = 1; i <= numberOfRounds; i++) {
    console.log(`Round #${i}`);
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
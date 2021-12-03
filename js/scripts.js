function computerPlay() {
  // returns randomNumber between 0 and max(exclusive of max)
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  const randomNumber = getRandomNumber(3);
  const choices = ["rock", "paper", "scissors"];
  const cpuChoice = choices[randomNumber];
  console.log(`The computer chose ${cpuChoice}.`);
  return cpuChoice;
}

function playerPlay(e) {
  const choice = e.target.textContent.toLowerCase();
  console.log(`You chose ${choice}.`);
  return choice;

}

function rockVersus(computerChoice) {
  if (computerChoice == "rock") {
    increaseDraws();
    return "Draw!";
  } else if (computerChoice == "scissors") {
    increaseUserScore();
    return "You win! Rock beats Scissors.";
  } else if (computerChoice == 'paper') {
    increaseCpuScore();
    return "You lose! Paper beats rock.";
  }
}
  

function scissorsVersus(computerChoice) {
  if (computerChoice == "rock") {
    increaseCpuScore();
    return "You lose! Rock beats scissors.";
  } else if (computerChoice == "scissors") {
    increaseDraws();
    return "Draw!";
  } else if (computerChoice == 'paper') {
    increaseUserScore();
    return "You win! Scissors beats paper.";
  }
}
  
function paperVersus(computerChoice) {
  if (computerChoice == "rock") {
    increaseUserScore();
    return "You win! Paper beats rock.";
  } else if (computerChoice == "scissors") {
    increaseCpuScore();
    return "You lose! Scissors beats paper.";
  } else if (computerChoice == 'paper') {
    increaseDraws();
    return "Draw!";
  }
}
 
function playRound(e) {
  const playerSelection = playerPlay(e);
  const computerSelection = computerPlay();
  let result;
  if (playerSelection == 'rock') {
    result = rockVersus(computerSelection);
  } else if (playerSelection == 'paper') {
    result = paperVersus(computerSelection);
  } else if (playerSelection == 'scissors') {
    result = scissorsVersus(computerSelection);
  }
  console.log(result);
}


let userScore;
let cpuScore;
let draws;
initializeGame();

function initializeGame() {
  clearScoreboard();
  updateUserScore();
  updateCpuScore();
  updateDraws();
}

function clearScoreboard() {
  userScore = 0;
  cpuScore = 0;
  draws = 0;
}

function updateUserScore() {
  document.getElementById('userScore').textContent = userScore;
}

function updateCpuScore() {
  document.getElementById('cpuScore').textContent = cpuScore;
}

function updateDraws() {
  document.getElementById('draws').textContent = draws;            
}


function increaseUserScore() {
  userScore += 1;
  updateUserScore();
}

function increaseCpuScore() {
  cpuScore += 1;
  updateCpuScore();
}

function increaseDraws() {
  draws += 1;
  updateDraws();
}



// Events
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(e);
  });
})
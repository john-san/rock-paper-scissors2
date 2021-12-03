function computerPlay() {
  // returns randomNumber between 0 and max(exclusive of max)
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  const randomNumber = getRandomNumber(3);
  const choices = ["rock", "paper", "scissors"];
  const action = choices[randomNumber];
  // console.log(`The computer chose ${cpuChoice}.`);
  updateCpuAction(action);
  return action;
}

function playerPlay(e) {
  const action = e.target.textContent.toLowerCase();
  // console.log(`You chose ${choice}.`);
  updatePlayerAction(action);
  return action;

}

function rockVersus(computerChoice) {
  if (computerChoice == "rock") {
    increaseDraws();
    return "Draw!";
  } else if (computerChoice == "scissors") {
    increasePlayerScore();
    return "You win! Rock beats scissors.";
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
    increasePlayerScore();
    return "You win! Scissors beats paper.";
  }
}
  
function paperVersus(computerChoice) {
  if (computerChoice == "rock") {
    increasePlayerScore();
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
  if (playerScore == 5 || cpuScore == 5) {
    initializeGame();
  }
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
  // console.log(result);
  updateRoundResult(result);
  checkGameOver();
}


let playerScore;
let cpuScore;
let draws;
initializeGame();

function initializeGame() {
  clearScoreboard();
  updatePlayerScore();
  updateCpuScore();
  updateDraws();
}

function clearScoreboard() {
  playerScore = 0;
  cpuScore = 0;
  draws = 0;
  updateUi('winner', '');
}

function updatePlayerScore() {
  document.getElementById('playerScore').textContent = playerScore;
}

function updateCpuScore() {
  document.getElementById('cpuScore').textContent = cpuScore;
}

function updateDraws() {
  document.getElementById('draws').textContent = draws;            
}

function updateUi(id, message) {
  document.getElementById(`${id}`).textContent = message;
}

function updatePlayerAction(action) {
  let message = `You chose ${action}.`;
  updateUi('playerAction', message);
}

function updateCpuAction(action) {
  let message = `The computer chose ${action}.`;
  updateUi('cpuAction', message);
}

function updateRoundResult(message) {
  updateUi('roundResult', message);
}


function increasePlayerScore() {
  playerScore += 1;
  updatePlayerScore();
}

function increaseCpuScore() {
  cpuScore += 1;
  updateCpuScore();
}

function increaseDraws() {
  draws += 1;
  updateDraws();
}

function checkGameOver() {
  if (playerScore == 5) {
    updateUi('winner', "You win, you're the champion!");
  } else if (cpuScore == 5) {
    updateUi('winner', 'You lost. Womp womp wooooomp.');
  }
}


// Events
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(e);
  });
})
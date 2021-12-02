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
//  const choices = ["rock", "paper", "scissors"];
//  let keepGoing = true;
//  
//  while (keepGoing) {
//    let userChoice = prompt("Please enter rock, paper, or scissors.").trim().toLowerCase();
//  
//    if (choices.includes(userChoice)) {
//      keepGoing = false;
//      return userChoice;
//    }
//  }
}

function rockVersus(computerChoice) {
  if (computerChoice == "rock") {
    return "Draw!";
  } else if (computerChoice == "scissors") {
    increaseUserWins();
    return "You win! Rock beats Scissors.";
  } else if (computerChoice == 'paper') {
    increaseCpuWins();
    return "You lose! Paper beats rock.";
  }
}
  

function scissorsVersus(computerChoice) {
  if (computerChoice == "rock") {
    increaseCpuWins();
    return "You lose! Rock beats scissors.";
  } else if (computerChoice == "scissors") {
    return "Draw!";
  } else if (computerChoice == 'paper') {
    increaseUserWins();
    return "You win! Scissors beats paper.";
  }
}
  
function paperVersus(computerChoice) {
  if (computerChoice == "rock") {
    increaseUserWins();
    return "You win! Paper beats rock.";
  } else if (computerChoice == "scissors") {
    increaseCpuWins();
    return "You lose! Scissors beats paper.";
  } else if (computerChoice == 'paper') {
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


// let numberOfRounds = parseInt(prompt("How many rounds do you want to play? (Max: 10)"));

// if (numberOfRounds > 0 && numberOfRounds <= 10) {
//   game(numberOfRounds);
// } else {
//   let keepGoing = true;
// 
//   while (keepGoing) {
//     numberOfRounds = parseInt(prompt("Haha, real funny. So, how many rounds do you want to play? (Max: 10)"));
//     if (numberOfRounds > 0 && numberOfRounds <= 10) {
//       keepGoing = false;
//       game(numberOfRounds);
//     }
//   }
// }

//  function game(numberOfRounds) {
//    console.log(`Playing ${numberOfRounds} rounds.`);
//    for (let i = 1; i <= numberOfRounds; i++) {
//      console.log(`Round #${i}`);
//      console.log(playRound(playerSelection, computerSelection));
//    }
//  }


let userWins = 0;
let cpuWins = 0;

function increaseUserWins() {
  userWins += 1;
}

function increaseCpuWins() {
  cpuWins += 1;
}



// Events
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    playRound(e);
  });
})
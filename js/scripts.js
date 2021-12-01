function computerPlay() {
  // returns random integer between 0 and max(exclusive of max)
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
  
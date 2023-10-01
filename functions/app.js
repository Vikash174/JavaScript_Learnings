const startGameBtn = document.getElementById("start-game-btn");
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = "SCISSORS";
const RESULT_DRAW = "DRAW";

let isGameStarted = false;

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.34) {
    return ROCK;
  } else if (randomNumber < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function selectWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return RESULT_DRAW;
  } else if (
    (userChoice === ROCK && computerChoice === SCISSORS) ||
    (userChoice === PAPER && computerChoice === ROCK) ||
    (userChoice === SCISSORS && computerChoice === PAPER)
  ) {
    return "PLAYER";
  } else {
    return "COMPUTER";
  }
}

const startGameHandler = () => {
  if (isGameStarted) {
    return;
  } else {
    isGameStarted = true;
    const userSelection = prompt(
      `Choose ${ROCK},${PAPER} or ${SCISSORS}`,
      ""
    ).toUpperCase();

    if (
      userSelection != ROCK &&
      userSelection != PAPER &&
      userSelection != SCISSORS
    ) {
      alert(
        `You have entered the invalid response, We are going with ${DEFAULT_SELECTION}`
      );
    } else {
      let computerChoice = getComputerChoice();
      let winner = selectWinner(userSelection, computerChoice);
      let winningMsg;
      if (winner == "PLAYER") {
        winningMsg = `You won!! You choose ${userSelection} & Computer choose ${computerChoice}`;
      } else if (winner == "COMPUTER") {
        winningMsg = `Computer won!! You choose ${userSelection} & Computer choose ${computerChoice}`;
      } else {
        winningMsg = `It was a Draw!! You choose ${userSelection} & Computer also choose ${computerChoice}`;
      }
      alert(winningMsg);
      isGameStarted = false;
    }
  }
};

startGameBtn.addEventListener("click", startGameHandler);

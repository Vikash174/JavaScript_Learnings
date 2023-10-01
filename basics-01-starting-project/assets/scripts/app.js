const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, clacNumber) {
  const clacDescription = `${resultBeforeCalc} ${operator} ${clacNumber}`;
  outputResult(currentResult, clacDescription);
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };

  logEntries.push(logEntry);
}

function calculate(operation) {
  const userInputString = getUserInput();
  const initialResult = currentResult;
  let operator;
  switch (operation) {
    case "ADD":
      operator = "+";
      currentResult += userInputString;
      break;

    case "SUBTRACT":
      operator = "-";
      currentResult -= userInputString;
      break;

    case "MULTIPLY":
      operator = "*";
      currentResult *= userInputString;
      break;

    case "DIVIDE":
      operator = "/";
      currentResult /= userInputString;
      break;
  }
  createAndWriteOutput(operator, initialResult, userInputString);
  writeToLog(operation, initialResult, userInputString, currentResult);
}

addBtn.addEventListener("click", calculate.bind(this, "ADD"));
subtractBtn.addEventListener("click", calculate.bind(this, "SUBTRACT"));
multiplyBtn.addEventListener("click", calculate.bind(this, "MULTIPLY"));
divideBtn.addEventListener("click", calculate.bind(this, "DIVIDE"));

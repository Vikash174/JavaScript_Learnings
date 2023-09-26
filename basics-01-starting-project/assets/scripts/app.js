
 const defaultResult = 0;
 let currentResult = defaultResult;
 let logEntries = [];


  function getUserInput()
  {
    return parseInt(userInput.value);
  }

  function createAndWriteOutput(operator,resultBeforeCalc, clacNumber)
  {
   const clacDescription = `${resultBeforeCalc} ${operator} ${clacNumber}`;
   outputResult(currentResult,clacDescription);
  }

  function writeToLog(
     operationIdentifier,
     prevResult,
     operationNumber,
     newResult)
     {
        const logEntry = {
          operation : operationIdentifier,
          prevResult :prevResult,
          number : operationNumber,
          result : newResult
        }

        logEntries.push(logEntry);

     }



  function addNumbers() 
  {
   const userInputString = getUserInput();
   const initialResult = currentResult;
   currentResult += userInputString;
   createAndWriteOutput('+',initialResult,currentResult);
   writeToLog('ADD',initialResult,userInputString,currentResult);
   console.log(logEntries);
   }

   function subtractNumbers()
   {
   const userInputString = getUserInput();
   const initialResult = currentResult;
   currentResult -= userInputString;
   createAndWriteOutput('-',initialResult,currentResult);
   writeToLog('SUBTRACT',initialResult,userInputString,currentResult);
   console.log(logEntries);

   }

   function multiplyNumbers()
   {
      const userInputString = getUserInput();
      const initialResult = currentResult;
      currentResult *= userInputString;
      createAndWriteOutput('*',initialResult,currentResult);
      writeToLog('MULTIPLY',initialResult,userInputString,currentResult);
      console.log(logEntries);

   }

   function divideNumbers()
   {
      const userInputString = getUserInput();
      const initialResult = currentResult;
      currentResult /= userInputString;
      createAndWriteOutput('/',initialResult,currentResult);
      writeToLog('DIVIDE',initialResult,userInputString,currentResult);
      console.log(logEntries);

   }


    addBtn.addEventListener('click',addNumbers);
    subtractBtn.addEventListener('click',subtractNumbers);
    multiplyBtn.addEventListener('click',multiplyNumbers);
    divideBtn.addEventListener('click',divideNumbers);
    









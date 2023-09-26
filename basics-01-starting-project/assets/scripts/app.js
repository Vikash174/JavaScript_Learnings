
 const defaultResult = 0;
 let currentResult = defaultResult;


  function getUserInput()
  {
    return parseInt(userInput.value);
  }

  function addNumbers() 
  {
   const userInputString = getUserInput();
   const discription = `${currentResult} + ${userInputString}`
   currentResult =  currentResult+ userInputString;
   outputResult(currentResult,discription)
   }

   function subtractNumbers()
   {
      const userInputString = getUserInput();
      const discription = `${currentResult} - ${userInputString}`
      currentResult =  currentResult - userInputString;
      outputResult(currentResult,discription)
   }

   function multiplyNumbers()
   {
      const userInputString = getUserInput();
      const discription = `${currentResult} * ${userInputString}`
      currentResult =  currentResult * userInputString;
      outputResult(currentResult,discription)
   }

   function divideNumbers()
   {
      const userInputString = getUserInput();
      const discription = `${currentResult} / ${userInputString}`
      currentResult =  currentResult / userInputString;
      outputResult(currentResult,discription)
   }


    addBtn.addEventListener('click',addNumbers);
    subtractBtn.addEventListener('click',subtractNumbers);
    multiplyBtn.addEventListener('click',multiplyNumbers);
    divideBtn.addEventListener('click',divideNumbers);
    









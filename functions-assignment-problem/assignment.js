// function sayHello(name) {
//   console.log('Hi ' + name);
// }


//Task : 1
const sayHello = (name) =>{
  console.log(`Hi ${name}`);
}


// Task : 2
const sayHello2 = (greetString,name)=>{
  console.log(`${greetString} ${name}`);
}

// Task : 3
const sayHello3 = () =>{
  console.log('Hi Vikash!!');
}

// Task : 4
const sayHello4 = (name) => `Hi ${name}`;

const sayHello5 = (name = "Vikash") => `Hi ${name}`;

sayHello("Anurag");
sayHello2("Hello","Alpha");
sayHello3();
console.log(sayHello4("Bitty"));
console.log(sayHello5());

 // Task : 5
  
 const checkInput = (emptyStrHandler,...arguments)=>{
      for (const arg of arguments) {
        if(!!!arg){
          emptyStrHandler();
        }
      }
 };

 function showEmptyStr(){
      console.log(`this is empty string`);
 }


 checkInput(showEmptyStr,'df','dfd','dfe','wer','');

 checkInput()

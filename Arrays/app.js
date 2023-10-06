/* // Multiple ways creating an array

const arr = [1,2,3];
const arr2 = new Array(2);
const arr3 = Array.from('str');

console.log(arr);
console.log(arr2);
console.log(arr3);


 */
/* 
const hobbies = ['Cooking','Sports','Chess'];
const personData = [34,'Vikash',{add:'JavaScript',hobbies:hobbies}];

const matrix = [[1,2,3],[4,5,6],[7,8,9]];

for (const i of matrix) {
     for (const j of i) {
        console.log(j);
     }
}
 */

/* 
const hobbies = ['Sports','Cooking'];
hobbies.push('Coding');  // Adds element at last index
hobbies.unshift('Reading'); // Add elements to start of array
hobbies.pop(); // delets the elements in array for last index
hobbies.shift(); // delets the elements form tha start of array
console.log(hobbies);


hobbies.splice(1,0,'Good Food');
console.log(hobbies);
 */

// Slice methods

/*  const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.slice();
const storedResults = testResults.concat([2,3]);

storedResults.push(90.34);
// console.log(testResults,storedResults);
console.log(testResults.indexOf(5.3));

const personData = [{name:'Max'},{name:'Manuel'}];
console.log(personData.indexOf({name:'Manuel'}));

const manuel = personData.find((person,idx,personData)=>{
      return person.name === 'Manuel';
});


console.log(manuel);
 */

/* const prices = [10.99, 5.99, 3.99, 6.58];
const tax = 0.9;
const taxAdjustedPrices = [];

/* for(const price of prices){
   taxAdjustedPrices.push(price + tax);
}
 */
/*
prices.forEach((price,idx,prices)=>{
  const priceObj = {index:idx, taxAdjPrice:price+tax};
  taxAdjustedPrices.push(priceObj);

});
console.log(taxAdjustedPrices);
 */

/* const tax = 0.9;




const taxAdjPrices = prices.map((price,idx,prices)=>{
   const priceObj = {index:idx, taxAdjPrice:price+tax};
   return priceObj;
   
});
console.log(prices);
console.log(taxAdjPrices);
*/

/* const prices = [10.99, 5.99, 3.99, 6.58];

const sum = prices.reduce((prevValue, currValue) => prevValue + currValue, 0);

console.log(sum); 
 */

/* const originalArray = [{price:10.99},{price:5.09},{price:20.9}];
const transformedArray = originalArray.map(obj => obj.price);

const sum = transformedArray.reduce((sumVal,curVal) => sumVal+curVal,0);
console.log(sum); */

// const data = 'new york;10.99;2000';
// const transeformedData = data.split(';');
// console.log(transeformedData);

const nameFragments = ['Max','Schwarz'];
const name = nameFragments.join(' ');
// console.log(name); 



// Spread Operator

const copiedNameFragments = [...nameFragments];
console.log(nameFragments,copiedNameFragments);
console.log(...nameFragments);





 // Given an array of numbers
// return an object for each
// item.

const array = [1,2,3,4,5,6];
function createObject(array){
  return array.map((num)=>({num}));
};

console.log(createObject(array));
console.log("----------------------------------");

// Given an array of numbers
// calculate the sum .

const sum=(array)=> array.reduce((accumulator, currentValue)=> accumulator+currentValue
,0);


console.log(sum(array));
console.log("----------------------------------");

//Write your own Reduce function using for loop

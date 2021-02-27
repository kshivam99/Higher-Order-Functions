 // Given an array of numbers
// return an object for each
// item.

const array = [1,2,3,4,5,6,10,50,100];
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

function reduce(array, accumulator, reducer) {
  let value=accumulator;
  for(const element of array){
      value=reducer(value, element);
  }
  return value;
}

const getSum=(a,b)=>a+b;
console.log(reduce(array, 0, getSum));

console.log("----------------------------------");

//Given an array of integers, find the sum of all odd numbers

function sumOfOdd(array) {
  return array.reduce((accumulator, currentValue) =>(currentValue%2!==0? currentValue + accumulator:
  accumulator),
  10
  )
}

console.log(sumOfOdd(array));
console.log("----------------------------------");

//Given an array of integers, find the sum of all numbers at odd index

function sumOfOddIndexes(array) {
  let sum=0;
  for (const index in array) {
    if(index%2)
    {
      sum+=array[index];
    }
  }
  return sum;
}

console.log(sumOfOddIndexes(array));
console.log("----------------------------------");

//Given an array of integers, find the biggest number in array

function maxInArray(array)
{
  let maxValue = Number.MIN_VALUE;
  for(const element of array)
  {
    if(element>maxValue)
    {
      maxValue=element;
    }
  }
  return maxValue;
}

console.log(maxInArray(array));
console.log("----------------------------------");

//Given an array of integers, find the numbers divisible by 10

function divisibleByTen(array)
{
  return array.filter((num)=>num%10===0)
}

console.log(divisibleByTen(array));
console.log("----------------------------------");

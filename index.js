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
  return array.filter((item, index)=>index%2?item:null).reduce((a, c)=>a+c)

}

console.log(sumOfOddIndexes(array), "sum of odd indices");
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

//Given an array of integers, return an array of numbers where odd numbers are incremented by 1 and even are decremented by 1

function game(array)
{
  return array.map((num)=>num%2?num+1:num-1);
}

console.log(game(array));
console.log("----------------------------------");

//Given an array of integers, return an object with sum of all odd numbers and even numbers separately

function game2(array){
  const oddSum = array.reduce((accumulator, currentValue)=> currentValue%2?accumulator+currentValue:accumulator
,0);

  const evenSum = array.reduce((accumulator, currentValue)=> !(currentValue%2)?accumulator+currentValue:accumulator
,0);

  return {oddSum, evenSum};
}


console.log(game2(array));
console.log("----------------------------------");

const stringArray=["dry", "banana", "apple", "orange", "cat", "dog"];

//Given an array of strings find the number of strings with similar number of characters.

function similarNumberOfCharacters(stringArray){

  let newObj={};
  stringArray.forEach((item)=>{
    if(newObj[item.length]!==1)
        newObj[item.length]=1;
    else
        newObj[item.length]+=1;
  })
  return newObj;
}


console.log(similarNumberOfCharacters(stringArray));
console.log("----------------------------------");

//return an array with strings which have vowels

function checkVowels(word)
{
  let ret=false;
  for(l of word)
  {
  if(l==='a'|| l==='e' || l==='i' || l==='o' || l==='u')
      ret=true;
  }
  return ret;
}


function stringWithVowels(stringArray){

  return stringArray.filter((word)=>checkVowels(word))
}


console.log(stringWithVowels(stringArray));
console.log("----------------------------------");

//Return an array of objects with key as item and value as number of characters in the string

function numberOfCharacters(stringArray){

  let newObj={};
  stringArray.forEach((item)=>{
    
        newObj[item]=item.length;
    
  })
  return newObj;
}

console.log(numberOfCharacters(stringArray));
console.log("----------------------------------");

//





















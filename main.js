//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  if(operation === 0) {               // im not that creative nor that smart so i just did 3 if statments for every case
    return firstNumber + secondNumber;
  } else if (operation === 1) {
    return firstNumber * secondNumber;
  } else if (operation === 2) {
    return firstNumber / secondNumber;
  } else {
    return 'Nothing to Operate On';
  }
}


//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function max(arr1,arr2){ //just a function to make sure i use with the correct length 
  if(arr1.length > arr2.length){
    return arr1;
  } else {
    return arr2;
  }
}

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
  var cnt = 0
  var acc;
  while (cnt < max(firstArray,secondArray).length){   

    if(firstArray[cnt] === undefined){   //if firstArray ends first we add 1 to second arr 
      acc[cnt] = secondArray[cnt] + 1;
    } else if (secondArray[cnt] === undefined) { // and vice versa
      acc[cnt] = firstArray [cnt] + 1;
    } else {
      acc[cnt] = firstArray[cnt]+secondArray[cnt];  
    }
   
    cnt ++; // to avoid infinite loop 
  }
  return acc;
}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
  var acc = [];  
  for (var i = 0; i < max(firstArray,secondArray).length; i++){ // same logic and execution of the while loop 
    if(firstArray[i] === undefined){
      acc[i] = secondArray[i] + 1;
    } else if (secondArray[i] === undefined) {
      acc[i] = firstArray [i] + 1;
    } else {
      acc[i] = firstArray[i]+secondArray[i]
    }
  }
  return acc;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20
 function posSum (arr){
  var auxArr = arr; //i dnt want to lose the original arr;
  function posSumi(arr){
    if(arr.length === 0){
      return 0
    }
    if(arr[0] < 0){
      return posSumi(arr.slice(1)) // if the first elemnt is negative we just move on  
    }
    return arr[0] + posSumi(arr.slice(1)) // if it's positive we sum it 
  }
  return posSumi(auxArr);  //  if you dnt care about the original arr just comment line 75,76,85 and 86 and replace every posSumi with posSum and voila 
 }
//TODO: you code here

//=========================================================== 4
//I have a bucket of sloths. Each sloth is special and has a long name.
// Below is an array called bucketOfSloths, containing all the information about my sloths.
var bucketOfSloths = [
  { name: { first: 'Furry', middle: 'Danger', last: 'Assassin' }, age: 2 },
  { name: { first: 'Slow', last: 'Pumpkin' }, age: 3 },
  { name: { first: 'Bullet', middle: 'Proof', last: 'Sloth' }, age: 4 },
  { name: { first: 'Boos', middle: 'Boos', last: 'Bun' }, age: 5 },
  { name: { first: 'Jungle', last: 'Fuzz' }, age: 2 }
];

// a- write a function fullName that takes index number and array as input and return the full name as string
// fullName(bucketOfSloths,0) //==> "Furry Danger Assassin"

function fullName(array, index) {
  //your code is here
  if(array[index].name.middle === undefined) { // in case it has no middle name
    return array[index].name.first + ' ' + array[index].name.last
  }
   return array[index].name.first + ' ' + array[index].name.middle + ' ' + array[index].name.last 
}


//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  // TODO: Your code here
  var max = 0;
  var theLongest = ''; // to store our final result
  for (var i = 0; i < bucketOfSloths.length; i++){ 
    if(fullName(bucketOfSloths,i).length > max) {
      max = fullName(bucketOfSloths,i).length; // to make sure wi find the longest 
      theLongest = bucketOfSloths[i]; // we store the entire obj inside it 
    }
  }
  return theLongest;
}

//Good Luck :))

//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

//it takes 3 parameters the first 2 is numbers and the third one is operation
//it uses a switch statement to check the value of the operation.
function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  switch(operation){
    case 0: return firstNumber + secondNumber;
    case 1: return firstNumber * secondNumber;
    case 2: return firstNumber / secondNumber;
    default: return 'Nothing to Operate On'
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

//both functions takes two parameters of array of numbers
//and it returns an array of sum matching indecies;
function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
  var result = [];
  var i = 0;
  while(i < firstArray.length || i < secondArray.length){
    if(firstArray[i] === undefined){
      result.push(secondArray[i] + 1)
    }else if( secondArray[i] === undefined) {
      result.push(firstArray[i] + 1)
    }else{
      result.push(firstArray[i] + secondArray[i])
    }
    i++;
  }
  return result
}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
  var result = []
  for(var i = 0; i < firstArray.length || i < secondArray.length; i++){
    if(firstArray[i] === undefined){
      result.push(secondArray[i] + 1)
    }else if( secondArray[i] === undefined) {
      result.push(firstArray[i] + 1)
    }else{
      result.push(firstArray[i] + secondArray[i])
    }
  }
  return result;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
//this function takes an array of numbers and it return the sum of positive number only.
//it minimize the length of the array till it finish.
function sum(arr) {
  if(!arr.length){
    return 0
  }
  console.log(arr[0], arr)
  if(arr[0] > 0){
    return arr[0] + sum(arr.slice(1));
  }
  return sum(arr.slice(1))
}

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

//this function takes an array of objects and an index of specefic object..
// then it check if it has middle name or not and it return a string of full name of the object;
function fullName(array, index) {
  //your code is here
  var current = array[index].name;
  if(current.middle != undefined) {
    return current.first + ' ' + current.middle + ' ' + current.last;
  }
  return current.first + ' ' + current.last;
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

//this function takes an array of object as parameter.
//then iterates the array and call the full length function then calculate the length of the full name
// and it return an object of the longest full name length
function longestName(bucketOfSloths) {
  // TODO: Your code here
  var longest = 0
  var result = {}
  for (var i = 0; i < bucketOfSloths.length; i++) {
    var current = fullName(bucketOfSloths, i);
    if(current.length > longest){
      longest = current.length;
      result = bucketOfSloths[i]
    }
  }
  return result;
}

//Good Luck :))

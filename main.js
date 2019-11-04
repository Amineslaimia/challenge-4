//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  var result = 0;
  if(firstNumber === undefined || secondNumber === undefined || operation === undefined){
    return 'Invalid';
  }
  if(operation === 0){
    return result = firstNumber + secondNumber;
  }
  if(operation === 1){
    return result = firstNumber * secondNumber;
  }
  if(operation === 2){
      if(secondNumber === 0){
        return 'Invalid'
      } else {
          return result = firstNumber / secondNumber
      }
  }
  return 'Nothing To Operate On';
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  var newArr = [];
  var result = 0;
  var i = 0;
  var j = 0;
  while(i < firstArray.length){
    result = firstArray[i] + secondArray[i];
    newArr.push(result);
    i++;
  }

  return newArr;
}

function addArraysForLoop(firstArray, secondArray) {
  var newArr = [];
  var result = 0;
  for(var i = 0; i < firstArray.length; i++){
    for(var j = 0; j < secondArray.length; j++){
      if(i === j){
        result = firstArray[i] + secondArray[j];
        newArr.push(result);
      }
    }
  }
  return newArr;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
var summation = 0;
var i = 0;
function posSum(array){
  var myArr = array;
  if(myArr.length === 0){
    return 1;
  }

  if(myArr[i] > 0){
    i++;
    return summation += myArr[i] + posSum(myArr.splice(i, 1));
  }
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

function fullName(array, index) {
  var newStr = '';
  for(var i = 0; i < array.length; i++){
    if(i === index){
      for(var key in array[i]){
        if(key === 'name'){
          newStr += array[i][key].first + ' ' + array[i][key].middle + ' ' + array[i][key].last; 
        }
      }
    }
    
  }
  return newStr
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  // TODO: Your code here
}

//Good Luck :))

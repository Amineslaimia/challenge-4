//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
 if (operation === 0) {
  return firstNumber + secondNumber
 } else if (operation === 1) {
  return firstNumber * secondNumber
 }else if (operation === 2) {
  if (secondNumber === 0) {
    return "wrong input sould not divide by zero"
  }else {
    return firstNumber / secondNumber
  }
 }else {
  return "“Nothing to Operate On”"
 }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
  var arr = [];
  var array = [];
  var newArr = [];


  if (firstArray.length === secondArray.length){
  var i = 0; 
  while (i < firstArray.length - 1){
    arr.push(firstArray[i]+secondArray[i]);
    i++;
  }
  return arr;
}


if (firstArray.length > secondArray.length) {
  var j = 0;
  while (j < secondArray.length - 1){
    array.push(firstArray[j] + secondArray[j]);
    j++;
  }
  var k = firstArray.length - array.length
  while (array.length < firstArray.length){
    array.push(firstArray[k] + 1);
    k++;
  }
  return array;
}


if (secondArray.length > firstArray.length) {
  var x = 0;
  while (x < firstArray.length - 1){
    newArr.push(firstArray[x] + secondArray[x]);
    x++;
  }
  var w = secondArray.length - newArr.length
  while (newArr.length < secondArray.length){
    newArr.push(secondArray[w] + 1);
    w++;
  }
  return newArr;
}

}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
    var arr = [];
  var array = [];
  var newArr = [];

  if (firstArray.length = secondArray.length) {
    for (var i = 0; i < firstArray.length - 1; i++) {
      arr.push(firstArray[i]+secondArray[i]);
    }
    return arr;
  }

  if (firstArray.length > secondArray.length) {
    for (var j = 0; j < secondArray.length - 1; j++) {
      array.push(firstArray[j] + secondArray[j]);
    }
    for (var k = firstArray - array.length; k < firstArray.length - 1; k++) {
      array.push(firstArray[k] + 1);
    }
    return array;
  }

  if (secondArray.length > firstArray.length) {
    for (var w = 0; w < firstArray.length - 1; w++) {
      newArr.push(firstArray[w] + secondArray[w]);
    }
    for (var x = secondArray - newArr.length; x < secondArray.length - 1; x++) {
      newArr.push(secondArray[x] + 1);
    }
    return newArr;
  }
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
function sumPositives (array) {
  var i = 0;
  if (array[i] > 0) {
    if (array.length = 1) {
      return 1;
    }
    i++
  return  array[0] + sumPositives(array[i]);
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
  //your code is here
  var obj = array[index];
  var full = obj.name.first + ' ' + obj.name.middle + ' ' + obj.name.last;
  return full;

}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  // TODO: Your code here
  var full ='';
  var max = fullName(bucketOfSloths,0);
  var obj = {}

  for (var i = 0; i >= bucketOfSloths.length - 1; i++) {
    full = fullName(bucketOfSloths,i);
    if (max.length < full){
      max = full;
    }
  }
  return max;
}

//Good Luck :))
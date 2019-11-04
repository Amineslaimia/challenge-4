//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  var op = {
    0: function(a, b) {
      return a+b;
    },
    1: function(a, b) {
      return a*b
    },
    2: function(a, b) {
      return a/b
    },
  }
  if (op.hasOwnProperty(operation)){
    return op[operation](firstNumber, secondNumber);
  }
  return "Nothing to operate on"

}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  result = [];
  var maxLength = firstArray.length
  var minLength = secondArray.length
  if (secondArray > firstArray){
    maxLength = secondArray.length
    minLength = firstArray.length
  }
  count = 0
  while (count < maxLength){
    if (count<minLength){
      result.push(firstArray[count]+secondArray[count])
    } else {
      if (firstArray[count] === undefined) {
        result.push(secondArray[count]+1)
      } else {
        result.push(firstArray[count]+1)
      }
    }
    count++
  }
  return result
}

function addArraysForLoop(firstArray, secondArray) {
  result = [];
  var maxLength = firstArray.length
  var minLength = secondArray.length
  if (secondArray > firstArray){
    maxLength = secondArray.length
    minLength = firstArray.length
  }

  for (var i = 0; i < maxLength; i++) {
    if (i<minLength){
      result.push(firstArray[i]+secondArray[i])
    } else {
      if (firstArray[i] === undefined) {
        result.push(secondArray[i]+1)
      } else {
        result.push(firstArray[i]+1)
      }
    }
  }
  return result
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function posSum(array) {
  if (array.length === 0) {
    return 0
  }
  if (array[0]>0){
    return array.shift() + posSum(array)
  } else {
    array.shift();
    return posSum(array)
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
  var result = ""
  for (var key in array[index].name){
    result += " " + array[index].name[key]
  }
  return result.slice(1)
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  tmpIndex = 0
  for (var i = 1; i < bucketOfSloths.length ; i++){
    if (fullName(bucketOfSloths, i).length > fullName(bucketOfSloths, tmpIndex).length){
      tmpIndex = i
    }
  }
  return bucketOfSloths[tmpIndex];
}

//Good Luck :))

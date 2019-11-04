//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  if(operation === 0){
    return firstNumber + secondNumber;
  } else if(operation === 1){
    return firstNumber * secondNumber;
  } else if(operation === 2){
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

function addArraysWhileLoop(firstArray, secondArray) {
  var result = [];

  if(firstArray.length < secondArray.length){
    [firstArray, secondArray] = [secondArray, firstArray];
  }

  var i = 0;
  while(i < firstArray.length){
    if(secondArray[i] === undefined){
      result[i] = firstArray[i] + 1;
    } else {
      result[i] = firstArray[i] + secondArray[i];
    }
    i++;
  }

  return result;
}

function addArraysForLoop(firstArray, secondArray) {
    var result = [];

  if(firstArray.length < secondArray.length){
    [firstArray, secondArray] = [secondArray, firstArray];
  }

  for(var i = 0; i < firstArray.length; i++){
    if(secondArray[i] === undefined){
      result[i] = firstArray[i] + 1;
    } else {
      result[i] = firstArray[i] + secondArray[i];
    }
  }

  return result;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function posSum(array, i = 0){
  if(i === array.length){
    return 0;
  }
  if(array[i] > 0){
    return array[i] + posSum(array, i = i + 1);
  }
  return 0 + posSum(array, i = i + 1);
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
  if(index >= array.length || index < 0){
    return 'sorry, wrong index'
  }
  var result = '';
  var name = array[index].name;
  for(var key in name){
    result += name[key] + ' ';
  }
  return result.trim();
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  var longest = 0;
  for(var i = 1; i < bucketOfSloths.length; i++){
    if(fullName(bucketOfSloths, i).length > fullName(bucketOfSloths, longest).length) {
      longest = i;
    }
  }
  return bucketOfSloths[longest];
}

//Good Luck :))

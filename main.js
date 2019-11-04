//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  if (operation === 0) {
    return firstNumber + secondNumber;
  } else if (operation === 1) {
    return firstNumber * secondNumber;
  } else if (operation === 2) {
    return firstNumber / secondNumber;
  } else {
    return'Nothing to Operate On';
  }
}

console.log( operateOn(2,3,0) );

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  var result = [];
  var i = 0;
  var j = 0;
  var len;
  
  if (firstArray.length > secondArray.length) {
    len = firstArray.length;
  } else {
    len = secondArray.length;
  }

  while (i < len) {
    if (firstArray[i] === undefined) {
        result.push(secondArray[i] + 1)
      } else if (secondArray[i] === undefined) {
        result.push(firstArray[i] + 1);
      } else {
        result.push(firstArray[i] + secondArray[i]);   
      }

    i++;
  }

  return result;
}

console.log( addArraysWhileLoop([1], [1,2]) );

function addArraysForLoop(firstArray, secondArray) {
  var result = [];
  var len;

   if (firstArray.length > secondArray.length) {
    len = firstArray.length;
  } else {
    len = secondArray.length;
  }

  for (var i = 0; i < len; i++) {
    if (firstArray[i] === undefined) {
        result.push(secondArray[i] + 1)
      } else if (secondArray[i] === undefined) {
        result.push(firstArray[i] + 1);
      } else {
        result.push(firstArray[i] + secondArray[i]);   
      }
  }

  return result;
}

console.log( addArraysForLoop([2,4,1], [1,1]));

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function sumPositives(numbers, result, i) {
  var result = result || 0;
  var i = i || 0;

  if (i === numbers.length) {
    return result;
  }

  if (numbers[i] > 0) {
  result += numbers[i];
  }

  return sumPositives(numbers, result, ++i);
}

console.log('hi')
console.log( sumPositives( [1,-4,7,12] ) );

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
  var result = '';

  for (var key1 in array[index]) {
    for (var key2 in array[index][key1]) {
    result += " " + array[index][key1][key2];
  }
  }

  return result;
}

console.log( fullName(bucketOfSloths, 0) );

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  var result = {};
  var long = fullName(bucketOfSloths, 0);
  var index = 0;
  var name; 

  for (var i = 0; i < bucketOfSloths.length; i++) {
    name = fullName(bucketOfSloths, i);   
    if (long.length < name.length ) {
      long = name;
      index = i;
    }     
  }

  result = bucketOfSloths[index];
  return result;
}

console.log( longestName(bucketOfSloths) );

//Good Luck :))

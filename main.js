//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  switch(operation){
    case(0):
      return firstNumber + secondNumber;
    break;

    case(1):
      return firstNumber * secondNumber;
    break;

    case(2):
      return firstNumber / secondNumber;
    break;

    default:
      return 'Nothing to operate on';
    break;
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having 
//matching indexes in the other Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
    var result = [];
    var loopLength = firstArray.length > secondArray.length ? firstArray.length : secondArray.length;
    var i = 0;

    while (i < loopLength) {
        var firstNum = firstArray[i];
        var secondNum = secondArray[i];

        if (firstNum !== undefined && secondNum !== undefined) {
            result.push(firstNum + secondNum);
        } else if (firstNum !== undefined) {
            result.push(firstNum + 1);
        } else if (secondNum !== undefined) {
            result.push(secondNum + 1);
        }

        i++;
    }

    return result;
}

function addArraysForLoop(firstArray, secondArray) {
    var result = [];
    var loopLength = firstArray.length > secondArray.length ? firstArray.length : secondArray.length;

    for (var i = 0; i < loopLength; i++) {
        var firstNum = firstArray[i];
        var secondNum = secondArray[i];

        if (firstNum !== undefined && secondNum !== undefined) {
            result.push(firstNum + secondNum);
        } else if (firstNum !== undefined) {
            result.push(firstNum + 1);
        } else if (secondNum !== undefined) {
            result.push(secondNum + 1);
        }
    }

    return result;
}


//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function sumOfPosNums(arr) {
  var posNum = arr[0] > 0 ? arr[0] : 0;

  if(arr.length === 0){
    return 0;
  }

  return posNum + sumOfPosNums(arr.slice(1));
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

// a- write a function fullName that takes index number and array as input and return the 
// full name as string fullName(bucketOfSloths,0) //==> "Furry Danger Assassin"

function fullName(array, index) {
  var result = '';
  var sloth = array[index];

  if(sloth !== undefined){
    return Object.values(sloth.name).join(' ');
  }

  return 'Invalid index';
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
    var result = bucketOfSloths[0];
    var longest = fullName(bucketOfSloths, 0);
    var indexOfLong = 0;

    for (var i in bucketOfSloths) {
        if (fullName(bucketOfSloths, i).length > longest.length) {
            result = bucketOfSloths[i];
        }
    }

    return result;
}

//Good Luck :))

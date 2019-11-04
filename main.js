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
  }
  if (operation === 1) {
    return firstNumber * secondNumber;
  }
  if (operation === 2) {
    return firstNumber / secondNumber;
  } else {
    return "Nothing to Operate On"
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  if (firstArray.length < secondArray.length){
    firstArray.push(1)
  }
  if (firstArray.length > secondArray.length){
    secondArray.push(1)
  }
  var i = 0;
  var newArr = [];
  while(i < firstArray.length) {
    newArr.push(firstArray[i] + secondArray[i]); 
    i++;
  }

  return newArr;
}

function addArraysForLoop(firstArray, secondArray) {
  if (firstArray.length < secondArray.length){
    firstArray.push(1)
  }
  if (firstArray.length > secondArray.length){
    secondArray.push(1)
  }
  var newArr = [];
  for(var i = 0 ;i < firstArray.length; i++) {
    newArr.push(firstArray[i] + secondArray[i]); 
  }

  return newArr;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20
var i = 0;
var result = 0;
function posSum(array) {
  if (array[i] >= 0) {
    result = result + array[i]
    
  }

  i++;

  return result + posSum(array-1)
}

// i need more practice in recursion

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
  return array[index].name.first + " " + array[index].name.middle + " " + array[index].name.last;
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(array) {
  var longestName;
  for (var i = 0; i < array.length; i++) {
    var Name = array[i].name.first + " " + array[i].name.middle + " " + array[i].name.last;
    

    if (i < array.length - 1) {
      var nextName = array[i + 1].name.first + " " + array[i + 1].name.middle + " " + array[i + 1].name.last;
      if(name.length < nextName.length){
        longestName = array[i+1];
      }
      if (name.length > nextName.length) {
        longestName = array[i];
      }
    }
    
    if (i >= bucketOfSloths.length) {
      var lastName = array[i - 1].name.first + " " + array[i - 1].name.middle + " " + array[i - 1].name.last;
      if (name.length > lastName.length) {
        longestName = array[i-1];
      }
    }
    
  }

  return longestName;
}

//Good Luck :))

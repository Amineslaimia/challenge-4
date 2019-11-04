//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  if(operation === 0){
    return firstNumber + secondNumber
  }
  if(operation === 1){
    return firstNumber * secondNumber
  }
  if( operation === 2) {
    return firstNumber / secondNumber
  }
  return "Nothing to Operate On"
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
  var result = [];
  var i = 0;
  //permetition
  if(secondArray.length < firstArray.length){
    [firstArray, secondArray] = [secondArray, firstArray]
  }
  while (i < firstArray.length){
    result.push(firstArray[i] + secondArray[i]);
    i++
  }
  if(secondArray.length > result.length){
    while(i < secondArray.length){
      result.push(secondArray[i] + 1)
      i++
    }
  }
  return result;
}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
  var result = [];

  //permetition 
  if(secondArray.length < firstArray.length){
    [firstArray, secondArray] = [secondArray, firstArray]
  }
  for(var i = 0; i < firstArray.length; i++){
    result.push(firstArray[i] + secondArray[i]);
  }
  if(secondArray.length > result.length){
    for (var i = result.length; i < secondArray.length; i++){
      result.push(secondArray[i] + 1)
    }
  }
  return result;
} 
//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
function posSum(tab){
  if(tab.length === 0){
    return 0
  }
  if(tab[0]> 0){
    return tab[0] + posSum(tab.slice(1))
  }
  return posSum(tab.slice(1))
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
  var result = ""
  for(var i = 0 ; i < array.length ; i++){
    if(i === index){
      var obj = array[i].name
      for(key in obj){
          result += obj[key] + " "
      }
    
    }
  }
 return result
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  // TODO: Your code here
  var result = []
  var LongStringIndex = 0  
  for (var  i = 0 ; i <bucketOfSloths.length ; i++ ){
    if(fullName(bucketOfSloths,i) > fullName(bucketOfSloths,LongStringIndex)){
      LongStringindex = i
    }
  }
  return bucketOfSloths[LongStringIndex]
}

//Good Luck :))

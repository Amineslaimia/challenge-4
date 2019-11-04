//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {          //for this function we just gonna check the operation number
  if(operation === 0){                                              // refers to what operation and we will return the result of 
    return firstNumber + secondNumber                               //that operation
  }
  else if(operation === 1){
    return firstNumber * secondNumber
  }
  else if(operation === 2){
    return firstNumber / secondNumber
  }
  else{
    return 'Nothing to operate On'
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

  function addArraysWhileLoop(firstArray, secondArray) {                  //to accomplish this one we check our shortest length
  var count = 0 ;                                                         // and the array with the superior length
  var longArr = [] ;
  var minLength = Math.min(firstArray.length, secondArray.length)
  var result = [] ;
  
  if(firstArray.length > secondArray.length){
    longArr = firstArray ;
  }
  else{
    longArr = secondArray ;
  }

  while(count < longArr.length){                                          //our loop will be divided to 2 phases: untill we reach the shortest length
    if(count<minLength){                                                  //where we sum the arrays, then a second phase where we add 1 to the rest of the longest array values
      result.push(firstArray[count] + secondArray[count]) ;
      count++ ;
    }
    else{
      result.push(longArr[count] + 1)                                     //second phase
      count ++
    }
  }
  return result ;
}

function addArraysForLoop(firstArray, secondArray) {                    // with the same logic as the function above we only loop using a foor loop
  var longArr = [] ;
  var minLength = Math.min(firstArray.length, secondArray.length)
  var result = [] ;
  
  if(firstArray.length > secondArray.length){
    longArr = firstArray ;
  }
  else{
    longArr = secondArray ;
  }

  for(var i = 0; i<longArr.length; i++){
    if(i<minLength){
      result.push(firstArray[i] + secondArray[i]) ;
    }
    else{
      result.push(longArr[i] + 1)
      
    }
  }

  return result ;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function sumAllPos(arr){
  if(arr.length === 0){                                             //our stop condition is when we have no more element in our array
    return 0;
  }
  if(arr[0] < 0){                                                   //whenever we find a negative number we change it to 0
    arr[0] = 0 ;
  }
  return arr[0] + sumAllPos(arr.slice(1))                           // with each loop we add the first element in our array and the we slice it from the array
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

function fullName(array, index) {                             // for this one, the logic is to make an aray containing the first, 
  var nameObj = array[index].name                             // middle if exists, and last name of the object at the givven
  var nameArr = [] ;
  var objKeys = Object.keys(nameObj) 

  for(var i of objKeys){
    nameArr.push(nameObj[i])
  }
  
  return nameArr.join(' ')                                    // at the end we return a string of the full name (first + middle(if exists) + last)
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  var names = [] ;
  var longestNameObj = '' ;                                         //in this function we need to look for the object containing the longest name
  var longestLength = 0 ;

  bucketOfSloths.forEach(function(element, i){                     //for that we loop our array and pass each element through the above function
    if(fullName(bucketOfSloths,i).length > longestLength ){         // and check the length of each full name and return the element containing the longest name
      longestLength = fullName(bucketOfSloths,i).length ;
      longestNameObj = element ;
    }})
    return longestNameObj ;
  
}

//Good Luck :))

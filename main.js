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
  } else if( operation === 1 ){
    return firstNumber * secondNumber;
  } else if( operation === 2 ){
    return firstNumber / secondNumber;
  } else {
    return ' Enter two numbers and operation must be 0, 1 or 2';
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
   var result = [];
   var i = 0;
   if( firstArray.length === secondArray.length ){
    while(i < firstArray.length){
      result.push(firstArray[i] + secondArray[i]);
      i++;
    }
   } else if( firstArray.length > secondArray.length ){
    var j = 0;
    var dif = firstArray.length - secondArray.length
    
    while(j < secondArray.length){
      result.push(firstArray[j] + secondArray[j]);
      j++;
    };
    j = dif;
    while(j < firstArray.length){
      result.push(firstArray[j] + 1);
      j++;
    }; 
  } else {
      var j = 0;
      var dif = secondArray.length - firstArray.length
      
      while(j < firstArray.length){
        result.push(firstArray[j] + secondArray[j]);
        j++;
      };
      j = dif;
      while(j < secondArray.length){
        result.push(secondArray[j] + 1);
        j++;
  }
  return result;
}

function addArraysForLoop(firstArray, secondArray) {
  var result = [];
  var longerArray = [];
  var shorterArray = []; 
  
  if(firstArray.length > secondArray.length){
    longerArray = [...firstArray];
    shorterArray = [...secondArray];
  } 
  else if (firstArray.length < secondArray.length) {
    longerArray  = [...secondArray];
    shorterArray = [...firstArray];
  }
  else {
    for(var i = 0; i < firstArray.length; i++){
      result.push(firstArray[i] + secondArray[i] )
    };
  }

  var dif = longerArray.length - shorterArray.length;

  for(var i = 0; i < shorterArray.length; i++){
    result.push(shorterArray[i] + longerArray[i])
  }
  for( var i = dif; i < longerArray.length; i++){
    result.push(longerArray[i] + 1 );
  }
  return result;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

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

function fullName(array, index) {
  return array[index].name.first + ' ' + array[index].name.middle + ' ' + array[index].name.last
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  var name = '' ;
  var j = 0;
  for( var i = 0; i < bucketOfSloths.length; i++){
    if (fullName(bucketOfSloths, i).length > name){
      name = fullName(bucketOfSloths, i)
      j = i;
    };
  }; 
  return bucketOfSloths[j];
}

//Good Luck :))

//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  var result = {
    0: function(x,y){
      return x+y;
    },
    1: function(x,y){
      return x*y;
    },
    2: function(x,y){
      return x/y;
    }
  };
  if(result[operation] === undefined)
    return "Nothing to Operate On";

  return result[operation](firstNumber,secondNumber);

}
  
//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  var result = 0 ;
if(firstArray.length < secondArray.length){
    [firstArray, secondArray] = [secondArray, firstArray];
  }
  var i = 0;
  while(i < firstArray.length){
    if(secondArray[i] === undefined){
      result[i] =firstArray[i] + 1;
    } else {
      result[i] = firstArray[i] + secondArray[i];
    }
    i++;
  }

  return result;
}




function addArraysForLoop(firstArray, secondArray) {
  // it is the same function but with changes in syntax 


  
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function sumPosRecursive(array){
  if(array.length < 1)
    return 0;
  if(array[0] > 0)
    return array[0] + sumPosRecursive(array.slice(1));
  return  sumPosRecursive(array.slice(1));
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
  var name =  " ";
  for (var i in array[index]){
    for (var x in array[index][i])
      name += array[i][x];

  }
  return name;
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  //we should declear variblas to store the operations
  //chose the keys from the array in the object and return them

}

//Good Luck :))

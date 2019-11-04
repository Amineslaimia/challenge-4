//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //If condition to check the value of the operation
  if(operation === 0){
    return  "the summation of  " + firstNumber + " and " + secondNumber + " is : " + firstNumber + secondNumber; 
  } else if(operation === 1) {
    return  "the multiplication of  " + firstNumber + " and " + secondNumber + " is : " + firstNumber * secondNumber;
  } else if (operation === 2) {
    return "the division of  " + firstNumber + " and " + secondNumber + " is : " + firstNumber / secondNumber;
  } else { 
    return "Nothing to Operate On"; }

}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //declare an empty array + initialise the counters for the while loop
  var arr = [];
  var i = 0;
  var j = 0;
  var k = 0;

  //create while loop to add element if the length of second array is > than the first array
  while (firstArray.length < secondArray.length) {
    firstArray.push(1);
      i++;
  } 

//create while loop to add element if the length of first array is > than the second array
   while (secondArray.length < firstArray.length) {
    secondArray.push(1);
    j++;
    }

    //create while loop to sum the elements of the 2 arrays with matched indexes
    while( k < firstArray.length ) {
      arr.push(firstArray[k] + secondArray[k])
      k++;
    }
 //returning the array 
  return arr;
}

function addArraysForLoop(firstArray, secondArray) {
  //declare an empty array 
   var arr = [];
      
      //if statement to check the length of the first array
      if(firstArray.length < secondArray.length){
        //foor loop to add element if the length of second array is > than the first array
        for (var i = 0; i < firstArray.length; i++) {
            firstArray.push(1);
        }

      //if statement to check the length of the second array
      } else if (secondArray.length < firstArray.length){
        //foor loop to add element if the length of first array is > than the second array
        for (var i = 0; i < firstArray.length; i++) {
        secondArray.push(1);
      }
   }
   //foor loop to sum the elements of the 2 arrays with matched indexes
   for (var i = 0; i < firstArray.length; i++) {
      arr.push(firstArray[i] + secondArray[i])
   }

    //returning the array 
   return arr;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
function sum(array) {

  if(array[0]<0){
    return 0;
  }
  if (array[0] > 0) {
  array.slice(1)
  }
  return array[0] + sum(arr);
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

  return array[index].name.first + " " +  array[index].name.middle + " " + array[index].name.last;
  
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {

  // TODO: Your code here
  var obj = {};
  for (var i = 0; i < bucketOfSloths.length; i++) {
    if(fullName(bucketOfSloths, i) >fullName(bucketOfSloths, i + 1) ) {
      obj.name = bucketOfSloths[i].name;
    }
  }
  return obj;
}

//Good Luck :))

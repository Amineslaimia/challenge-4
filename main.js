//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {

  if (operation === 0 ){
    return firstNumber + secondNumber;
  }
  else if ( operation ===1 ){
    return firstNumber * secondNumber;
  }
  else if ( operation === 2 ){
    return firstNumber / secondNumber;
  }
  else 
  return "Nothing to Operate On"
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
}

function addArraysForLoop(firstArray, secondArray) {
  var array , array2 ;
  var sum = [];


  if ( firstArray.length > secondArray.length){
    array =  firstArray
    array2 = secondArray

  }
  else{
    array = secondArray;
    array2 = firstArray;
  }

  for (var i =0 ; i < array.length ; i++){

    for ( var j = 0 ; j < array2.length ; j++)
    {
      if (i === j ){
        sum.push(array[i]+array2[j])

      }

      }
    }
  
  return sum ;
  //TODO: you code here
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
var sum = 0 

function posSum(array){

  if (array.length <= 0 ) {
    
    return sum 
  }

  if(array[0] > 0){

    console.log(array[0])
    sum += array[0]
  }
 
  array.shift()
  
  return sum + posSum(array)
  
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
  for ( var i = 0 ; i < array.length ; i++){

    if (i === index ){

      if ( array[i].name["middle"] === undefined){

        return array[i].name["first"] + " " +array[i].name["last"]
      }
      return array[i].name["first"] +" "+array[i].name["middle"]+" "+array[i].name["last"]
    }
  }
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {

  var array = []
  var big = 0
  var str = ''

  for ( var i = 0 ; i < bucketOfSloths.length ; i++){

    array.push(fullName(bucketOfSloths,i))


  }
  for (var i = 0 ; i < array.length ; i++){
    if ( big < array[i].length){
        
        big = array[i].length;
        str = array[i];
    }

  }
  return str ; 

  }

//Good Luck :))

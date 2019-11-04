//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  var result = 0; 
  if (operation === 0) {
  	result += firstNumber + secondNumber ; 
  }else if (operation === 1){
  	result += firstNumber * secondNumber ; 
  }else if (operation === 2) {
  result += firstNumber / secondNumber ;
  }else {
  	result = "can't solve"
  }
  return result
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
}//first of all we need to check if the both arrays have the same or different length  and we are going to do a statement for each case . if they both have the same length
//we are going to itterate over the two arrays and each itteration we sum the two numbers with same index and push them inside the empty array variable that we should have declared before 
//in case the arrays got difeerence length  (array1 > array2)we are going to do the same thing but whenever the array.length ends and started giving us undefined we should return 1 unstead of undifined that is going to cause a NaN as a result
// and another condition if the opposite .. 
// and the same thing for the for loop .. got issues with syntax and i didn't wanna loose time . ill push a refactor file in the self hackibng time 

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
  var result = []; 
  
  for (var i = 0 ; i < firstArray.length ; i++) {
  	for (var j =0 ; j <secondArray.length ; j++){
  		var sum = 0
  		if (firstArray[i] === 'undefined'){
  			sum += (secondArray[j] + 1)
  			result.push(sum)
  		}else if (secondArray[j] === 'undefined'){
  			sum += (firstArray[i] + 1)
  			result.push(sum)
  		}
  		sum += (firstArray[i] + secondArray[j]) 
  		result.push(sum)
  	}
  }
  return result ;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20
function posSum(array){
  if(array.length === 0){
    return 0 ;
  } if(array[0] > 0){
   		 return array[0] + posSum(array.slice(1));
  }
  return posSum(array.slice(1));
};


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

function fullName(array, number) {
  //your code is here
  var result = ""
  for (var key in array[number].name){
    result = result + " " + array[number].name[key]
  }
  return result.slice(1)
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(array) {
  // TODO: Your code here
   result = 0
  for (var i = 1; i < array.length ; i++){
   if (fullName(array, i).length > fullName(array, result).length){
    result = result + i
  }
  }
  return array[result];
};


//Good Luck :))

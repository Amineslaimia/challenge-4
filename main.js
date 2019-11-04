//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  if(operation === 0) {

  	return firstNumber + secondNumber;

  }

  if(operation === 1) {

  	return firstNumber * secondNumber;

  }

  if(operation === 2) {

  	if(secondNumber === 0) {

  		return 'Cannot divide';

  	}

  	return firstNumber / secondNumber

  }

  return 'Nothing to Operate On';
  
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
  var array = []
  var i = 0;

  if(firstArray.length < secondArray.length){

  while (firstArray.length < secondArray.length){

  	firstArray.push(1);

  }

}

if(secondArray.length < firstArray.length){

     while( secondArray.length < firstArray.length) {

  	secondArray.push(1);
  }

  while(i < firstArray.length) {

  	array.push(firstArray[i] + secondArray[i]);

  	i++

  }

  return array;

}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
    var array = []
 	 var i = 0;

  if(firstArray.length < secondArray.length){

 for(var j = firstArray.length; j < secondArray.length; j++) {

  	firstArray.push(1);

  }

}

if(secondArray.length < firstArray.length) {

     for(var k = secondArray.length; j < firstArray.length; k++) {

  	secondArray.push(1);

  }

  for(var i = 0; i < firstArray.length; i++)

  	array.push(firstArray[i] + secondArray[i]);

  	}

  	return array;

}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
function sumPositives(array, sum,i) {

	var sum = sum || 0;
	var i = i || 0;

	if(array.length === 0) {

		return sum;

	}
	if(array[0] < 0) {

		array.slice(1);

	}

	if(array[0] >= 0) {

		sum = sum + array[0];

	}

	return sumPositives(array.slice(1),sum,i++);

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
  var fullName = '';

  for (var i = 0; i < array.length; i++) {

  	if(index === i) {
  		
  			fullName += array[i].name.first + ' ';

  			if(array[i].name.middle !== undefined) {

  				fullName += array[i].name.middle + ' '

  			}

  			fullName += array[i].name.last + ' ';

  		}

  }

  return fullName;

}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}



function longestName(bucketOfSloths) {
  // TODO: Your code here
   var longName = fullName(bucketOfSloths,0);

  for (var i = 0; i < bucketOfSloths.length; i++) {

  	for (var key in bucketOfSloths[i]) {

  	if(longName.length <= fullName(bucketOfSloths,i).length) {

  		longName = bucketOfSloths[i];

  		}

  	}

}

  return longName;

}
//Good Luck :))


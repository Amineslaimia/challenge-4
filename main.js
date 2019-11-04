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
  else if ( operation === 1) {
  	return firstNumber* secondNumber;
  }
  else if (operation === 2) {
  	return firstNumber / secondNumber;
  } else {
  	return 'Nothing to operate on'
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
}
// i let it to the end but i'm out of time 

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
  var arr = [];
  var arr2 = [];
  var arr3 = arr.concat(arr2)
  	if(firstArray.length === secondArray.length){				//if both arrays have the same length we iterate over both of them and we add each elements in the indexes to the other one 
  for(var i = 0 ; i < firstArray.length; i++) {
  	arr.push(firstArray[i]+secondArray[i])
  	} 
  	 if(firstArray.length > secondArray.length) {				// if first > second we slice the difference and we push it into new array
  		arr2.push(firstArray.slice(secondArray.length));		// now we have to arrays with the same length we add them as before
  		for(var x = 0 ; x < firstArray.length ; x++){
  			arr.push(firstArray[x]+secondArray[x])		
  		for(j =0 ; j < arr2.length ; j++) {						// we iterate over the array wich contains the difference and we add 1 each time 
  			arr2[j] += 1
  		}

  		}
  	}

  }
  return arr3;													// and we return both of them together if they have the same length arr3 = arr if they haven't the same length arr3 = arr+arr2
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
function sum(array) {
	var arr = [];
	for(var i = 0 ; i < array.length ; i++) {
		if(array[i] >= 0) {
			arr.push(array[i])
		}
	}
	if(arr.length === 0) {
		return 0
	}
	 return arr[0] + sum(arr.slice(1))
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
  var fullName ='';
  for(var key in array[index].name) {
  	fullName = fullName +' ' + array[index].name[key]
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
 var iterate = 0
  for (var i = 1; i < bucketOfSloths.length ; i++){
   if (fullName(bucketOfSloths, i).length > fullName(bucketOfSloths, iterate).length){
    iterate = iterate + i
  }
  }
  return bucketOfSloths[iterate];
};
//Good Luck :))

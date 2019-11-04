//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  var result = 0 ;
  if(operation === 0){
  	result = firstNumber + secondNumber ;
  	return result ;
  }
   else if(operation === 1){
  	result = firstNumber * secondNumber ;
  	return result ;
  }
   else if(operation === 2){
  	result = firstNumber/ secondNumber ;
  	return result ;
  }
   else{
  	
  	return 'Nothing to Operate On' ;
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
	if(firstArray.length > secondArray.length){
		secondArray.push(4);
	}else if(firstArray.length < secondArray.length){
		firstArray.push(6);
	}
  //TODO: your code here
  var i=0;
  var arrResutl = [];

  while(firstArray.length > i){
   arrResutl.push(firstArray[i] + secondArray[i]);
   i++;
  }
   return arrResutl;
}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
  if(firstArray.length > secondArray.length){
		secondArray.push(4);
	}else if(firstArray.length < secondArray.length){
		firstArray.push(6);
	}
	  var arrResutl = [];

	for (var i = 0; i < firstArray.length; i++) {

		 arrResutl.push(firstArray[i] + secondArray[i]);
	}
	return arrResutl;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20
var posSum = [1,-4,7,12];
var sum = 0;
var i =0;

function sumPositives(posSum){
	 var length = posSum.length;
	 if(length === i){
	 	return sum;
	 }
     else if(posSum[i] > 0){
     	sum = sum + posSum[i];
     	i++;
     	sumPositives(posSum)
     }else {
     	i++;
        sumPositives(posSum)

     }

  
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

function fullName(array, index) {
  //your code is here
  var str = ''
  if(array[index].name.middle === undefined){

   str = str +array[index].name.first;
   str = str +' '+ array[index].name.last;
}
 else{
  str = str +array[index].name.first;
  str = str +' '+ array[index].name.middle;
  str = str +' '+ array[index].name.last;
 }
  


  return str;
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  // TODO: Your code here
  var ar = [];
  ar.push(fullName(bucketOfSloths,0));
  ar.push(fullName(bucketOfSloths,1));
  ar.push(fullName(bucketOfSloths,2));
  ar.push(fullName(bucketOfSloths,3));
  ar.push(fullName(bucketOfSloths,4));

  var maxLength = ar[0].length;
  var index = 0

  for (var i = 0; i < ar.length; i++) {
      if(ar[i].length > maxLength){
      	maxLength = ar[i].length
        index = i;
      }
  }
  return bucketOfSloths[index].name;


}

//Good Luck :))

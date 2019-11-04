//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  var op = {
  	0: function(a,b){
  		return a+b;
  	},
  	1: function(a,b){
  		return a*b;
  	},
  	2: function(a,b){
  		return a/b;
  	}
  };
  if(op[operation]===undefined)
  	return 'Nothing to Operate On';

  return op[operation](firstNumber,secondNumber);

}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  if(firstArray.length>secondArray.length){
    	var length = firstArray.length-1;
    }else{
      	var length = secondArray.length-1;
    }
    var result = [];
    while(length>=0;){
    	var add1 = firstArray.shift();
    	var add2 = secondArray.shift();
    	if(add1===undefined)
    		add1=1;
    	if(add2===undefined)
    		add2=1;
    	result.push(add1+add2);
    	length--;
    }
    return result;

}

function addArraysForLoop(firstArray, secondArray) {
    if(firstArray.length>secondArray.length){
    	var length = firstArray.length-1;
    }else{
      	var length = secondArray.length-1;
    }
    var result = [];
    for(;length>=0;length--){
    	var add1 = firstArray.shift();
    	var add2 = secondArray.shift();
    	if(add1===undefined)
    		add1=1;
    	if(add2===undefined)
    		add2=1;
    	result.push(add1+add2);
    	
    }
    return result;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function sumPosRecursive(array){
	if(array.length<1)
		return 0;
	if(array[0]>0)
		return array[0]+ sumPosRecursive(array.slice(1))
	return  sumPosRecursive(array.slice(1))
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
  var name = [];
  var nameObj = array[index].name
  for(var part in nameObj){
  	name.push(nameObj[part])
  }
  return name.join(' ');
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  var longest = 0;
  for(var sloth in bucketOfSloths) {
      console.log(fullName(bucketOfSloths, longest).length, fullName(bucketOfSloths, sloth).length)
    if( fullName(bucketOfSloths, longest).length < fullName(bucketOfSloths, sloth).length )
        longest = sloth;
  }
  return bucketOfSloths[longest];
}


//Good Luck :))

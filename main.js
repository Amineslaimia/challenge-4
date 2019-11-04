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
  }
  else if(operation === 1){
    return firstNumber * secondNumber;
  }
  else if(operation === 2){
    if(firstNumber > secondNumber){
      return firstNumber / secondNumber;
    }
    else if(firstNumber<secondNumber){
      return secondNumber/firstNumber;
    }   
  }
  else {
    return 'Nothing to Operate On';
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
 var arr = [];
 var i=0;
 var j = firstArray.length;
 var k = secondArray.length;
 
 if(firstArray.length === secondArray.length){
  while(i<firstArray.length){
    arr.push(firstArray[i]+secondArray[i]);
    i++;
  }
 }

 else if(firstArray.length < secondArray.length){
  while(i<firstArray.length){
    arr.push(firstArray[i]+secondArray[i]);
    i++;
  }
  while(j<secondArray.length){
    arr.push(secondArray[j]+1)
    j++;
  }
 }

 else if(firstArray.length > secondArray.length){
  while(i<secondArray.length){
    arr.push(firstArray[i]+secondArray[i]);
    i++;
  }
  while(k<firstArray.length){
    arr.push(firstArray[k]+1)
    k++;
  }
 }
 return arr;
}

function addArraysForLoop(firstArray, secondArray) {
  var arr = [];

  if(firstArray.length === secondArray.length){
    for(var i=0; i<firstArray.length;i++){
      arr.push(firstArray[i]+secondArray[i]);
    }
  }


  else if ( secondArray.length < firstArray.length ){
    for(var i=0;i<secondArray.length;i++){
      arr.push(firstArray[i]+secondArray[i]);
    }

    for(var j=secondArray.length;j<firstArray.length;j++){
      arr.push(firstArray[j]+1);
    }
  }

else if ( secondArray.length > firstArray.length ){
    for(var i=0;i<firstArray.length;i++){
      arr.push(firstArray[i]+secondArray[i]);
    }

    for(var j=firstArray.length;i<secondArray.length;i++){
      arr.push(secondArray[j]+1);
    }
  }

  return arr;
}

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function positive(n){
  if(n>0){
    return n;
  }
  else {
    return 0;
  }
}

function posSum(array){
  if(array.length === 0){
    return 0;
  }
  return positive(array[0])+posSum(array.slice(1));
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
  if(array[index] === undefined){
    return 'this index doesnt exist';
  }
  else if (array[index].name.middle === undefined){
     return array[index].name.first + ' ' +array[index].name.last;
  }
  else {
    return array[index].name.first + ' ' + array[index].name.middle+' '+array[index].name.last;
  }
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
 var FirstElementLength = (fullName(bucketOfSloths,0).split('').length) - (fullName(bucketOfSloths,0).split(' ').length-1);
 var longest = bucketOfSloths[0];

 for(var i =0;i<bucketOfSloths.length;i++){

  if((fullName(bucketOfSloths,i).split('').length - fullName(bucketOfSloths,i).split(' ').length-1)>FirstElementLength){
    longest= bucketOfSloths[i] ;
  }
 }
 return longest;
}

//Good Luck :))

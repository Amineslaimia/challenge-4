//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
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
  //TODO: you code here
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
  //your code is here
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  // TODO: Your code here
}

//Good Luck :))
//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  var result=0;
  var string='Nothing to Operate On'
  switch (operation){
    case 0 :
      result=firstNumber+secondNumber;
      break;
      case 1:
        result= firstNumber*secondNumber;
        break;
        case 2:
        result= firstNumber/secondNumber;
        break;
        default:
         return string;
         
  }

  
return result;
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
  var result=[];
var maxlenght=firstArray.length;
var i=0;
if (secondArray.length>maxlenght){
  maxlenght=secondArray.length;
  
}
while(i<maxlenght){
  if(firstArray[i]===undefined){
  result.push(secondArray[i]=secondArray[i]+1)
} 


else if(secondArray[i]===undefined){
  result.push(firstArray[i]= firstArray[i]+1)
}else{
result.push(firstArray[i]+secondArray[i])
}
i++;
}

return result;
}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: you code here
 
    var result=[];
  var maxlenght=firstArray.length;
  if (secondArray.length>maxlenght){
    maxlenght=secondArray.length;
    
  }
 for(var i =0;i<maxlenght;i++){
    if(firstArray[i]===undefined){
    result.push(secondArray[i]=secondArray[i]+1)
  } 
  
  
  else if(secondArray[i]===undefined){
    result.push(firstArray[i]= firstArray[i]+1)
  }else{
  result.push(firstArray[i]+secondArray[i])
  }
  }
  
  return result;
  }


//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

//TODO: you code here
function posSum(array){
  var sum= 0;
  var post=0;
  if(array.length===0){
    return 0;
  }
  if ( array[0]>0){
    post=array.splice(0,1)[0]
  }else{
    post=0;
    array.splice(0,1)
  }
  return sum+post+posSum(array)
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
  if(array[index].name.middle=== undefined){
    return array[index].name.first+array[index].name.last;
  }
  return array[index].name.first+' '+array[index].name.middle+' '+array[index].name.last;
}

//  b- Write a function that takes an array of objects (like bucketOfSloths)
//  and returns the sloth (should return an object)
//  with the longest name (first, middle & last).
//  Note :It might be helpful to use a fullName function,
//  longestName(bucketOfSloths);
// => {name: {first: "Furry", middle: "Danger", last: "Assassin"}, age: 2}

function longestName(bucketOfSloths) {
  // TODO: Your code here
  maxlength=0;
  var index=0;
  for (var i =0;i<bucketOfSloths;i++){
    if(fullName(bucketOfSloths,i).length>maxlenght){
      maxlenght=fullName(bucketOfSloths,i).length;
      index=i;
    }

  }
  return bucketOfSloths[i]
}

//Good Luck :))

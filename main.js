//=========================================================== 1
//Write a function called operateOn that takes 3 parameters (firstNumber, secondNumber, operation)
//If the operation number is 0, the function adds the two numbers together and return the result
//If the operation number is 1, the function multiplies the two numbers together and return the result
//If the operation number is 2, the function divides the two numbers and return the result
//If the operation number is other than that, it should return “Nothing to Operate On”
//The function should never return undefined

function operateOn(firstNumber, secondNumber, operation) {
  //TODO: your code here
  var oper = 0;
  if(operation === 0) {
    oper = firstNumber + secondNumber;
    return oper;
  }else if(operation === 1) {
    oper = firstNumber * secondNumber;
    return oper;
  }else if(operation === 2) {
    oper = firstNumber / secondNumber;
    return oper;
  }else {
    return "Nothing to Operate On";
  }
}

//========================================================== 2
//Write a function called addArrays that takes two arrays as parameters (firstArray, secondArray)
//The function adds the elements with matching indexes to each other and returns the results in an array
//If the arrays are of different length the function should add 1 to the elements that don’t having matching indexes in the other
//Write the function using while loop and for loop

function addArraysWhileLoop(firstArray, secondArray) {
  //TODO: your code here
  var arr = [];
  if(firstArray.length === secondArray.length) {
    /*
    for(let i = 0; i < firstArray.length; i++) {
      arr.push(firstArray[i] + secondArray[i]);
    } */
    var i = 0;
    while(i < firstArray.length) {
      arr.push(firstArray[i] + secondArray[i]);
      i++;
    }
  }else if(firstArray.length > secondArray.length) {
    /*
    for(let j = 0; j < secondArray.length; j++) {
      arr.push(firstArray[j] + secondArray[j]);
    }
    */
    var j = 0;
    while(j < secondArray.length) {
      arr.push(firstArray[j] + secondArray[j]);
      j++;
    }
    /*
    for(let h = secondArray.length; h < firstArray.length; h++) {
      arr.push(firstArray[h] + 1);
    }
    */ 
    var h = secondArray.length;
    while(h < firstArray.length) {
      arr.push(firstArray[h] + 1);
      h++;
    }
  }else if(firstArray.length < secondArray.length) {
    /*
    for(let k = 0; k < firstArray.length; k++) {
      arr.push(firstArray[k] + secondArray[k]);
    }
    */
    var k = 0; 
    while(k < firstArray.length) {
      arr.push(firstArray[k] + secondArray[k]);
      k++;
      }
    
    /*
    for(let l = firstArray.length; l < secondArray.length; l++) {
      arr.push(secondArray[l] + 1);
    }
    */
    var l = firstArray.length;
    while(l < secondArray.length) {
      arr.push(secondArray[l] + 1);
      l++;
    }
  }
  return arr;
}

function addArraysForLoop(firstArray, secondArray) {
  //TODO: your code here
  var arr = [];
  if(firstArray.length === secondArray.length) {
    
    for(let i = 0; i < firstArray.length; i++) {
      arr.push(firstArray[i] + secondArray[i]);
    } 
    /*
    var i = 0;
    while(i < firstArray.length) {
      arr.push(firstArray[i] + secondArray[i]);
      i++;
    }
    */
  }else if(firstArray.length > secondArray.length) {
    
    for(let j = 0; j < secondArray.length; j++) {
      arr.push(firstArray[j] + secondArray[j]);
    }
    
    /*
    var j = 0;
    while(j < secondArray.length) {
      arr.push(firstArray[j] + secondArray[j]);
      j++;
    }
    */
    
    for(let h = secondArray.length; h < firstArray.length; h++) {
      arr.push(firstArray[h] + 1);
    }
     
    /*
    var h = secondArray.length;
    while(h < firstArray.length) {
      arr.push(firstArray[h] + 1);
      h++;
    }
    */
  }else if(firstArray.length < secondArray.length) {
    
    for(let k = 0; k < firstArray.length; k++) {
      arr.push(firstArray[k] + secondArray[k]);
    }
    
    /*
    var k = 0; 
    while(k < firstArray.length) {
      arr.push(firstArray[k] + secondArray[k]);
      k++;
      }
    */
    
    for(let l = firstArray.length; l < secondArray.length; l++) {
      arr.push(secondArray[l] + 1);
    }
    /*
    var l = firstArray.length;
    while(l < secondArray.length) {
      arr.push(secondArray[l] + 1);
      l++;
    }
    */
  }
  return arr;
} 
  //TODO: you code here
  

//=========================================================== 3
//Using recursion, return the sum of all of the positives numbers of an array of numbers.
// posSum[1,-4,7,12] => 1 + 7 + 12 = 20

function posSum(array) {

if(array.length > 0){
  var lol = array.pop();
  if(lol >= 0 ) {
    return lol + sum(array.pop());
  }else if(lol < 0) {
    lol = 0;
    return lol + sum(array.pop());

  }
}else if(array.length === 0) {
  return 0;
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
  var str = "";
  var arr = []; 
  var access = array[index].name;
  for(var key in access) {
    arr.push(access[key]);
  }
  for(let i = 0; i < arr.length - 1; i++) {
    str += arr[i] + " ";
  }
  str += arr[arr.length - 1];
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
  var sloth = {};
  
  var output = [];

  


for(let j = 0; j < bucketOfSloths.length; j++) {

var str = "";
  var arr = []; 
  var access = bucketOfSloths[j].name;
  for(var key in access) {
    arr.push(access[key]);
  }
  for(let i = 0; i < arr.length; i++) {
    str += arr[i];
  }

  output.push(str);

}

sloth = bucketOfSloths[0];
var longest =  output[0].length;
for(let l = 1; l < output.length; l++) {
  if(output[l].length > longest) {
    longest = output[l].length;
    sloth = bucketOfSloths[l];
  }
}


  return sloth;
}

//Good Luck :))

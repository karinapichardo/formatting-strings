/* Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number. */

// 1 input - array of numbers 
function createPhoneNumber(numbers){
//result variable / accumulator
  var phoneNumber = "(xxx) xxx-xxxx";
  //iterate over array of numbers using for loop
  for (var i = 0; i < numbers.length; i++) {
  //create a string in the form of a phone number (123) 456-7899
  phoneNumber = phoneNumber.replace('x', numbers[i]);
   }// return the string in the form of a phone number
  return phoneNumber;
 }

//testing our function by calling it 

var result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
console.log(result) // --> "(123) 456-7890"
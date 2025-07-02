// Array 1: Use reverse() method
const array1 = [1, 2, 3, 4, 5];
console.log('Original array1:', array1);

// Reverse array1 in place and print the result
array1.reverse();
console.log('Reversed array1:', array1);

// Array 2: Use toReversed() method
const array2 = ['a', 'b', 'c', 'd', 'e'];
console.log('Original array2:', array2);

// Create a reversed copy of array2 and print both arrays
const reversedArray2 = array2.toReversed();
console.log('Reversed copy of array2:', reversedArray2);
console.log('Original array2 after toReversed:', array2);

// ⭐ Challenge: Reverse a String
/*
  Strings don't have a .reverse() method. How can you reverse the string below?
  Hint: You'll need to turn it into an array, reverse the array, and then turn it back into a string.
  Three useful methods: .split(''), .toReversed(), .join('')
*/
const myName = 'Renke';
const reversedName = myName.split('').toReversed().join('');

console.log(`The name '${myName}' reversed is '${reversedName}'`); // "ekneR"

// You can work here or download the template!
// Step 1: Initialize an array with different types of values
const myArray = [42, 'Hello, world!', true, 3.14, 'JavaScript'];

// Step 2: Print the array to the console
console.log(myArray);

// Step 3: Access and print each element of the array
console.log(myArray[0]); // Prints: 42
console.log(myArray[1]); // Prints: Hello, world!
console.log(myArray[2]); // Prints: true
console.log(myArray[3]); // Prints: 3.14
console.log(myArray[4]); // Prints: JavaScript

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Step 4: Modify the second element of the array
myArray[1] = 'Changed value';

// Print the modified array
console.log(myArray);

// ⭐ Challenge: Access the Last Element
/*
  How can you access the *last* item of an array without knowing its exact index beforehand?
  Hint: The length of `myArray` is 5. What is the index of the last element?

  Solution:
  console.log('Last element:', myArray[myArray.length - 1]);
*/
console.log('Last element:', myArray[myArray.length - 1]);
console.log('\n'); // Adding a line break for clarity

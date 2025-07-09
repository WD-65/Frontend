// Step 1: Initialize an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Step 2: Use the map method to create a new array with doubled values
const doubledNumbers = numbers.map((number) => number * 2);
console.log('Doubled Numbers:', doubledNumbers); // Prints: Doubled Numbers: [2, 4, 6, 8, 10]

// Step 3: Use the map method to create a new array of strings
const stringNumbers = numbers.map((number) => `Number: ${number}`);
console.log('String Numbers:', stringNumbers); // Prints: String Numbers: ["Number: 1", "Number: 2", "Number: 3", "Number: 4", "Number: 5"]

// Step 4: Use the map method to create a new array of objects
const numberObjects = numbers.map((number) => ({
  original: number,
  squared: number * number,
  // isEven: number % 2 === 0,
}));
console.log('Number Objects:', numberObjects);
// Prints: Number Objects: [
//   { original: 1, squared: 1 },
//   { original: 2, squared: 4 },
//   { original: 3, squared: 9 },
//   { original: 4, squared: 16 },
//   { original: 5, squared: 25 }
// ]

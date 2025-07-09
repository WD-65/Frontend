// Step 1: Initialize an array of numbers
const numbers = [4, 8, 15, 16, 23, 42];

// Step 2: Use the some method to check for numbers greater than 20
const hasNumberGreaterThan20 = numbers.some((number) => number > 20);
console.log('Are there any numbers greater than 20?', hasNumberGreaterThan20);
// Prints: Are there any numbers greater than 20? true

// Step 3: Use the every method to check for numbers less than 50
const allNumbersLessThan50 = numbers.every((number) => number < 50);
console.log('Are all numbers less than 50?', allNumbersLessThan50);
// Prints: Are all numbers less than 50? true

// Step 4: Initialize an array of objects
const students = [
  { name: 'Alice', age: 25, passed: true },
  { name: 'Bob', age: 22, passed: false },
  { name: 'Charlie', age: 27, passed: true },
  { name: 'David', age: 20, passed: true },
];

// Step 5: Use the some method to check if any student failed
const hasAnyStudentFailed = students.some(
  (student) => student.passed === false
);
console.log('Did any student fail?', hasAnyStudentFailed);
// Prints: Did any student fail? true

// Step 6: Use the every method to check if all students are older than 18
const allStudentsOlderThan18 = students.every((student) => student.age > 18);
console.log('Are all students older than 18?', allStudentsOlderThan18);
// Prints: Are all students older than 18? true

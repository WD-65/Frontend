// --- Higher-Order Array Methods ---

const numbers = [1, 2, 3, 4, 5];
const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 20 },
];

// .map() - Creates a new array by transforming every element.
const namesUpperCase = people.map((person) => person.name.toUpperCase());
// namesUpperCase is now ['ALICE', 'BOB', 'CAROL', 'DAVE']

// --- Spread Syntax (...) ---

// Used to create a shallow copy of an array.
const animals = ['tiger', 'zebra', 'lion', 'giraffe'];
const copyOfAnimals = [...animals]; // copyOfAnimals is ['tiger', 'zebra', 'lion', 'giraffe']

// Used to create a shallow copy of an object and update properties.
const person = { firstName: 'John', age: 40 };
const copyOfPerson = { ...person, age: 50, isStudent: false };
// copyOfPerson is { firstName: 'John', age: 50, isStudent: false }

// --- Chaining Array Methods ---

// .find() - Returns the first element that satisfies a condition.
const firstPersonOver25 = people.find((person) => person.age > 25);
// firstPersonOver25 is { name: 'Bob', age: 30 }, the first person to meet the condition.

// .filter() - Creates a new array with all elements that pass a test.
const allPeopleOver25 = people.filter((person) => person.age > 25);
// allPeopleOver25 is [{ name: 'Bob', age: 30 }, { name: 'Carol', age: 35 }]

// .reduce() - Reduces the array to a single value.
// Iteration 1: accumulator starts at 0 + 15 (Alice's age) => 15
// Iteration 2: accumulator is 15 + 30 (Bob's age) => 45
// Iteration 3: accumulator is 45 + 35 (Carol's age) => 80
// Iteration 4: accumulator is 80 + 20 (Dave's age) => 100
const totalAge = people.reduce(
  (accumulator, person) => accumulator + person.age,
  0
);
// totalAge is 100

// .some() - Checks if at least one element passes a test.
const isAnyoneAChild = people.some((person) => person.age < 18);
// isAnyoneAChild is true because Alice's age (15) is less than 18.

// .every() - Checks if all elements pass a test.
const areAllAdults = people.every((person) => person.age >= 18);
// areAllAdults is false because Alice's age (15) fails the test.

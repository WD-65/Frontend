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
// console.log(namesUpperCase); // ['ALICE', 'BOB', 'CAROL', 'DAVE']

// --- Spread Syntax (...) ---

// Used to create a shallow copy of an array.
const animals = ['tiger', 'zebra', 'lion', 'giraffe'];
const copyOfAnimals = [...animals];

// Used to create a shallow copy of an object and update properties.
const person = { firstName: 'John', age: 40 };
const copyOfPerson = { ...person, age: 50, isStudent: false };

// --- Chaining Array Methods ---

// .find() - Returns the first element that satisfies a condition.
const firstPersonOver25 = people.find((person) => person.age > 25);
// console.log(firstPersonOver25); // { name: 'Bob', age: 30 }

// .filter() - Creates a new array with all elements that pass a test.
const allPeopleOver25 = people.filter((person) => person.age > 25);
// console.log(allPeopleOver25); // [{ name: 'Bob', age: 30 }, { name: 'Carol', age: 35 }]

// .reduce() - Reduces the array to a single value.
const totalAge = people.reduce(
  (accumulator, person) => accumulator + person.age,
  0
);
// console.log(totalAge); // 100

// .some() - Checks if at least one element passes a test.
const isAnyoneAChild = people.some((person) => person.age < 18);
// console.log(isAnyoneAChild); // true

// .every() - Checks if all elements pass a test.
const areAllAdults = people.every((person) => person.age >= 18);
// console.log(areAllAdults); // false

// ###############################################
// SECTION 1: JAVASCRIPT OBJECTS FUNDAMENTALS
// ###############################################

// An object is a collection of key-value pairs. Think of it like a real-world object (like a person) with properties (like name and age).
const person = {
  // 'firstName' is the KEY (or property), 'John' is the VALUE.
  firstName: 'John',
  age: 40,
  // Boolean values are common for properties that represent a "yes/no" state. Prefixes like "is" or "has" are good naming conventions.
  isStudent: true,
  // The value of a key can be another object. This is called a nested object.
  address: { street: 'Sesame street', houseNo: '40c', city: 'Berlin' },
  // The value can also be an array.
  languages: ['english', 'german', 'spanish'],
  // If your key contains special characters (like a hyphen), you MUST wrap it in quotes.
  'user-Id': '003423',
};

// # Accessing Object Properties

// 1. Dot Notation -> The most common and direct way to access a property.
console.log(person.firstName); // John

// To access properties of a nested object, you can chain dot notation.
console.log(person.address.city); // Berlin

// 2. Bracket Notation -> Required for keys with special characters or when using variables.
console.log(person['age']); // 40

// The real power of bracket notation is accessing properties dynamically.
// Here, the string 'age' is stored in a variable. We use that variable to look up the property in the 'person' object.
const whatUserClickedOn = 'age';
console.log(person[whatUserClickedOn]); // 40. This is the same as person['age'].

// ###############################################
// SECTION 2: MODIFYING & CREATING OBJECTS
// ###############################################

// # Changing Property Values

// Even though 'person' is a const, we can still change the values of its properties.
// 'const' just prevents the variable 'person' from being reassigned to a completely new object.
console.log('Age before changing', person.age); // 40
person.age = 45; // We reassign the value of the 'age' property.
console.log('Age after changing', person.age); // 45

// This is similar to how we can change elements in a const array.
const array = [1, 4, 6];
array[1] = 7; // The array is now [1, 7, 6]

// # Creating Objects from Variables

// Let's say we have some variables.
const make = 'Toyota';
const model = 'Corolla';
const year = 2025;

// We can use these variables to construct an object.
const car = {
  make: make,
  model: model,
  year: year,
};

// We can also add new properties to an object at any time.
car.color = 'Yellow';
console.log(car);

// ES6 Shorthand: If the variable name is the SAME as the property key you want to create, you can just write it once.
const car2 = {
  make,
  model,
  year,
};
console.log(car2); // This will look identical to the 'car' object above. It's just a cleaner way to write it.

// ###############################################
// SECTION 3: OBJECT METHODS
// ###############################################

// A method is simply a function that is a property of an object.

const personWithMethod = {
  firstName: 'John',
  age: 40,
  // A method allows the object to perform an action.
  // This is the modern, shorter syntax for defining a method.
  sayHi() {
    // 'this' keyword refers to the object the method is called on.
    // So, `this.firstName` means "the firstName property of THIS object".
    console.log(`Hi, my name is ${this.firstName}`); // Hi, my name is John
  },
  // An arrow function would behave differently. Arrow functions don't have their own 'this' context;
  // they inherit it from the surrounding code, which often leads to unexpected behavior in object methods.
  //   sayArrow: () => {
  //     console.log(`Hi, my name is ${this.firstName}`); // This would likely be 'undefined' in this context.
  //   },
};

// To call a method, use dot notation followed by parentheses.
personWithMethod.sayHi();

// ###############################################
// SECTION 4: BUILT-IN GLOBAL OBJECTS
// ###############################################

// JavaScript comes with useful built-in objects that have their own properties and methods.

// # The Math Object -> For mathematical constants and functions.
console.log(Math.random()); // A random decimal between 0 and 0.99...
console.log(Math.round(4.7)); // 5 (Rounds to the nearest whole number)
console.log(Math.max(1, 5, 28)); // 28 (Returns the largest of the numbers)
console.log(Math.min(1, 5, 28)); // 1 (Returns the smallest)

// # The Date Object -> For working with dates and times.
// Creating a new Date object gives you the current date and time.
const now = new Date();
console.log(now);

// You can use its methods to get specific parts of the date.
console.log(now.getFullYear()); // e.g., 2025
// Note: getMonth() is zero-based (0 = January, 11 = December), so we often add 1 for readability.
console.log(now.getMonth() + 1); // e.g., 7 for July

// You can also create a date from a specific string.
const birthday = new Date('2000-02-01');
console.log(birthday.getFullYear()); // 2000

// ###############################################
// SECTION 5: DESTRUCTURING
// ###############################################

// Destructuring is a special syntax that allows us to "unpack" values from arrays or properties from objects into distinct variables. It's like a shortcut.

// # Object Destructuring

const user = {
  firstName: 'Jane',
  age: 35,
  isStudent: false,
  address: { city: 'Munich' },
};

// The old way to get object properties into variables:
// const firstName = user.firstName;
// const age = user.age;
// const city = user.address.city;

// The new, destructuring way:
// This line says: "Create variables `firstName`, `age`, and `isStudent` and pull their values from the `user` object."
// For nested objects, `{ address: { city } }` means "go into `address`, then pull out `city` and create a variable called `city`."
// We can also set a default value. `nationality` doesn't exist in `user`, so it will be 'Unknown nationality'.
const {
  firstName,
  age,
  isStudent,
  address: { city },
  nationality = 'Unknown nationality',
} = user;

console.log(firstName); // Jane
console.log(age); // 35
console.log(city); // Munich
console.log(nationality); // Unknown nationality

// # Array Destructuring

const numbers = [3, 7, 9, 16];

// The old way:
// const firstNumber = numbers[0];
// const secondNumber = numbers[1];

// The destructuring way:
// It unpacks values based on their position in the array.
const [firstNumber, secondNumber] = numbers;

console.log(firstNumber); // 3
console.log(secondNumber); // 7

// You can use commas to skip elements you don't care about.
const [, , thirdNumber] = numbers;
console.log(thirdNumber); // 9

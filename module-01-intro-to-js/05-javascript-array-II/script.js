// A standard function declaration.
// It returns the doubled sum of two numbers.
function add(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    console.log('Please add positive integers');
    return; // Early return if condition is met
  }
  return (num1 + num2) * 2;
}

// An arrow function provides a more concise syntax.
const addArrowFunc = (num1, num2) => (num1 + num2) * 2;

// --- Higher-Order Functions ---

// 1. A function that accepts another function as an argument (callback).
function higherOrderFunc(func) {
  func();
}

// This is a callback function because it's passed into another function.
function callbackFunction() {
  console.log(`Hi, I'm a regular function!`);
}

// 2. A function that returns another function.
function multiplier(factor) {
  // This inner function "remembers" the factor.
  return (number) => {
    return number * factor;
  };
}

// Create a specialized function from the higher-order function.
const double = multiplier(2); // double is now a function: (number) => number * 2
const triple = multiplier(3); // triple is now a function: (number) => number * 3

/**
 * How to run:
 * node script.js 5 10
 */

// Get user-provided arguments, ignoring the first two (node executable and script path).
const args = process.argv.slice(2);

// Check if the user provided exactly two arguments.
if (args.length !== 2) {
  console.error('❌ Please provide exactly two arguments.');
  console.log('Usage: node index.js <number1> <number2>');
  return; // Exit the script.
}
//  Alternativ:
// if (!inputOne || !inputTwo) { ... }

// Unpack the two arguments into variables.
const [inputOne, inputTwo] = args;

// Convert string arguments to numbers.
// `Number()` will return `NaN` if the string isn't a valid number.
const num1 = Number(inputOne);
const num2 = Number(inputTwo);

// Alternative shorter syntax for converting strings to numbers using the unary plus operator.
// const num1 = +inputOne;
// const num2 = +inputTwo;

// --- Why `typeof` doesn't work for this check ---

// if (typeof num1 !== 'number' || typeof num2 !== 'number') { ... }

// However, this will not work as expected because in JavaScript, the type of NaN
// (Not a Number) is surprisingly... 'number'! `typeof NaN;` returns 'number'.
// So, if a user enters `node adder.js hello world`, `num1` becomes `NaN`, but
// `typeof num1` is still 'number', so the check would fail to catch the error.

// --- `isNaN()` vs `Number.isNaN()` ---
// There are two ways to check for NaN:
//
// 1. isNaN() (Global function): This function first tries to convert its argument
//    to a number. So, `isNaN('hello')` is true, because `Number('hello')` is NaN.
//
// 2. Number.isNaN() (safer method): This function does NOT convert. It
//    checks if the value is *already* the numeric value NaN. So, `Number.isNaN('hello')`
//    is false, because 'hello' is a string, not NaN.
//
// Since we have already converted our inputs with `Number()`, either function would
// work here. However, `Number.isNaN()` is generally the safer and recommended choice.

// Check if the conversion resulted in NaN (Not a Number).
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log('❌ Both arguments must be valid numbers.');
  return;
  // process.exit(); // Another way to explicitly exit the script.
}

// Perform the calculation.
const sum = num1 + num2;

// Print the final result.
console.log(`✅ ${num1} + ${num2} = ${sum}`);

// An alternative, but less flexible way to write the sum calculation.
// const sum = Number(process.argv[2]) + Number(process.argv[3]);

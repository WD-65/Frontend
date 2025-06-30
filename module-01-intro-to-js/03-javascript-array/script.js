// ###############################################
// SECTION 1: PRIMITIVE VS. REFERENCE TYPES
// ###############################################

// Primitive types are compared by their value.
let a = 10;
let b = 10;
console.log(a === b); // true -> Both variables hold the same value.

// Objects are reference types, compared by their reference (location in memory).
let obj1 = { value: 10 };
let obj2 = { value: 10 };
console.log(obj1 === obj2); // false -> They look the same, but are two separate objects in memory.

// obj3 now points to the exact same object as obj1.
let obj3 = obj1;
console.log(obj1 === obj3); // true -> Both variables reference the same object.

// ###############################################
// SECTION 2: ARRAYS
// ###############################################

// An array is an ordered list that can hold items of any data type.
['John', 40, true, [], {}, function () {}];
const names = ['Chinwe', 'Maryam', 'Bahry', 'Oleksandr', 'David'];

// Access array elements using their zero-based index.
console.log(names[2]); // 'Bahry'

// Accessing an index that doesn't exist returns undefined.
console.log(names[9]); // undefined

// ###############################################
// SECTION 3: COMMON ARRAY & STRING METHODS
// ###############################################

// ! .push() -> Adds elements to the END of an array. MUTATES the original array.
names.push('Reagen', 'Maria');
console.log('After push:', names); // ['Chinwe', 'Maryam', 'Bahry', 'Oleksandr', 'David', 'Reagen', 'Maria']

// ! .pop() -> Removes the LAST element from an array. MUTATES the original array.
names.pop(); // 'Maria' is removed.
console.log('After pop:', names); // ['Chinwe', 'Maryam', 'Bahry', 'Oleksandr', 'David', 'Reagen']

// ! .toReversed() -> Returns a NEW, reversed array. Does NOT change the original array.
const reversedNames = names.toReversed();
console.log('Original array:', names); // Unchanged
console.log('New reversed array:', reversedNames); // ['Reagen', 'David', 'Oleksandr', 'Bahry', 'Maryam', 'Chinwe']

// ! .slice(start, end) -> Returns a NEW copy of a portion of an array. Does NOT change the original.
const slicedArray = names.slice(1, 4); // Grabs elements from index 1 up to (but not including) index 4.
console.log('Sliced portion:', slicedArray); // ['Maryam', 'Bahry', 'Oleksandr']

// ! .splice(start, deleteCount, ...items) -> Adds/Removes elements from an array. MUTATES the original.
const fruits = ['Apple', 'Banana', 'Orange', 'Kiwi'];
// At index 1, remove 2 elements and insert 'Mango'.
fruits.splice(1, 2, 'Mango');
console.log('Fruits after splice:', fruits); // ['Apple', 'Mango', 'Kiwi']

// ! .join(separator) -> Joins all array elements into a single string.
const nameListString = names.join(', ');
console.log(nameListString); // 'Chinwe, Maryam, Bahry, Oleksandr, David, Reagen'

// ! .split(separator) -> A STRING method that creates an array of substrings.
const sentence = 'Hi, my name is Renke';
const words = sentence.split(' '); // Splits the string at each space.
console.log(words); // ['Hi,', 'my', 'name', 'is', 'Renke']

// ###############################################
// SECTION 4: LOOPS
// ###############################################

const studentNames = ['Chinwe', 'Maryam', 'Bahry', 'Oleksandr', 'David'];

// ! The 'for' loop -> Best when you need the index of each element.
for (let i = 0; i < studentNames.length; i++) {
  const upperCaseName = studentNames[i].toUpperCase();
  // Template literals (`) make embedding variables in strings easy.
  console.log(`Name at index ${i}: ${upperCaseName}.`);
}

// ! The 'for...of' loop -> A cleaner way to loop when you only need the value.
for (const studentName of studentNames) {
  console.log(`Student Name: ${studentName}`);
}

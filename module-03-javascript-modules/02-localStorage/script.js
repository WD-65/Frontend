// get Items
const userName = localStorage.getItem('name');
console.log(userName);

const email = localStorage.getItem('email');
console.log(email);

const age = localStorage.getItem('age');
console.log(age);

// Setting an item
localStorage.setItem('isStudent', false);

// Removin an item
// localStorage.removeItem('name');

// Clear all items
// localStorage.clear();

// Change a value
localStorage.setItem('name', 'David');

// You can work here or download the template
// Array of 10 random tasks as strings
const tasks = [
  'Complete the project',
  'Attend the meeting',
  'Write a report',
  'Review the code',
  'Fix the bugs',
  'Update the documentation',
  'Plan the next sprint',
  'Conduct user testing',
  'Optimize the performance',
  'Design',
];

// Select the buttons and the ul element
const addItemBtn = document.getElementById('add-item-btn');
const alertBtn = document.getElementById('alert-btn');
const consoleBtn = document.getElementById('console-btn');
const itemList = document.getElementById('item-list');

// Attach event to add a new li to the ul
addItemBtn.addEventListener('click', () => {
  const newItem = document.createElement('li');
  newItem.textContent = tasks[Math.floor(Math.random() * 10)];
  itemList.appendChild(newItem);
  itemList.scrollTop = itemList.scrollHeight;
});

// Attach event to display an alert
alertBtn.addEventListener('click', () => {
  alert('This is an alert message!');
});

// Attach event to output a message to the console
consoleBtn.addEventListener('click', () => {
  console.log('Button was clicked!');
});

// Discussion: addEventListener vs onEvent
console.log(`Discussion:
1. addEventListener:
   - Allows multiple event listeners of the same type to be added to an element.
   - Syntax: element.addEventListener('event', callback);
   - More flexible, can specify options like 'capture', 'once', and 'passive'.
   
2. onEvent properties:
   - Only one event handler can be assigned to an event property at a time.
   - Syntax: element.onevent = callback;
   - Simpler, but less flexible as it overrides any existing event handlers of the same type on the element.
`);

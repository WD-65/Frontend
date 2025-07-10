// Get references to the form and todo container elements
const form = document.querySelector('form');
const todoContainer = document.getElementById('todo-container');

// Function to create and display a new todo item
const createTodo = (todoText) => {
  // Create a new list item element
  const todo = document.createElement('li');
  todo.textContent = todoText;
  // Add the new todo to the top of the container (newest first)
  todoContainer.prepend(todo);
};

// Listen for form submission (when user clicks "Add Todo")
form.addEventListener('submit', (event) => {
  // Prevent the form from refreshing the page
  event.preventDefault();

  // Get the text value from the input field
  const inputValue = event.target['todo-input'].value;

  // Create and display the new todo
  createTodo(inputValue);

  // Clear the input field after adding the todo
  event.target['todo-input'].value = '';

  // Save todos to localStorage for persistence
  let todoArray = [];

  // Check if there are existing todos in localStorage
  if (localStorage.getItem('todos')) {
    // Get existing todos from localStorage (they're stored as JSON string)
    const existingTodosJSON = localStorage.getItem('todos');
    // Convert JSON string back to JavaScript array
    const existingTodosJavaScript = JSON.parse(existingTodosJSON);

    // Copy existing todos to our array using spread operator
    todoArray = [...existingTodosJavaScript];
  }

  // Add the new todo to our array
  todoArray.push(inputValue);

  // Save updated array back to localStorage (convert to JSON string)
  localStorage.setItem('todos', JSON.stringify(todoArray));
});

// Listen for when the page loads to restore saved todos
window.addEventListener('load', () => {
  // Exit early if no todos are saved
  if (!localStorage.getItem('todos')) return;

  // Get saved todos from localStorage
  const existingTodosJSON = localStorage.getItem('todos');
  // Convert JSON string back to JavaScript array
  const existingTodosJavaScript = JSON.parse(existingTodosJSON);

  // Display each saved todo by calling createTodo for each item
  existingTodosJavaScript.forEach((eachTodo) => {
    createTodo(eachTodo);
  });
});

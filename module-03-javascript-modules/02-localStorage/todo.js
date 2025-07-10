const form = document.querySelector('form');
const todoContainer = document.getElementById('todo-container');
// console.log(todoContainer.children);
const createTodo = (todoText) => {
  const todo = document.createElement('li');
  todo.textContent = todoText;
  todoContainer.prepend(todo);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputValue = event.target['todo-input'].value;
  createTodo(inputValue);

  event.target['todo-input'].value = '';

  //   localStorage
  let todoArray = [];
  if (localStorage.getItem('todos')) {
    const existingTodosJSON = localStorage.getItem('todos');
    const existingTodosJavaScript = JSON.parse(existingTodosJSON);

    todoArray = [...existingTodosJavaScript];
  }
  todoArray.push(inputValue);
  //   todoArray= EVERYTHING + my new todo
  localStorage.setItem('todos', JSON.stringify(todoArray));
});

window.addEventListener('load', () => {
  if (!localStorage.getItem('todos')) return;
  const existingTodosJSON = localStorage.getItem('todos');
  const existingTodosJavaScript = JSON.parse(existingTodosJSON);
  // console.log(existingTodosJavaScript);
  existingTodosJavaScript.forEach((eachTodo) => {
    createTodo(eachTodo);
  });
});

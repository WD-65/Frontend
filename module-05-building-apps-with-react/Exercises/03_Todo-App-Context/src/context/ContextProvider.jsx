import { TodoContext } from './context';
import { useState } from 'react';

const ContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [filter, setFilter] = useState('all');

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const newState = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <TodoContext
      value={{
        setTodos,
        filter,
        setFilter,
        toggleTodo,
        todos,
      }}>
      {children}
    </TodoContext>
  );
};
export default ContextProvider;

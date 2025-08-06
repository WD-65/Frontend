import { createContext, use } from 'react';

const TodoContext = createContext();

const useTodos = () => {
  const context = use(TodoContext);
  if (!context)
    throw new Error('useTodos must be inside of a TodoContextProvider');
  // console.log('context: ', context);
  return context;
};

export { TodoContext, useTodos };

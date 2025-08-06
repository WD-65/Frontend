import ToDoItem from './ToDoItem';
import { useTodos } from '../context/context';

const ToDoList = () => {
  const { todos, toggleTodo, filter } = useTodos();
  // const context = useTodos();
  // const { todos, toggleTodo, filter } = context;

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed' && todo.completed) return true;
    if (filter === 'active' && !todo.completed) return true;
    return false;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  );
};

export default ToDoList;

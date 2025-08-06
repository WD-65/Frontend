import AddToDo from './components/AddToDo';
import ContextProvider from './context/ContextProvider';
import FilterComponent from './components/FilterComponents';
import TodoList from './components/ToDoList';

const App = () => {
  return (
    <ContextProvider>
      <div className='container mx-auto p-4'>
        <AddToDo />
        <FilterComponent />
        <TodoList />
      </div>
    </ContextProvider>
  );
};

export default App;

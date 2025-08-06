import { useTodos } from '../context/context';

const AddToDo = () => {
  const { setTodos } = useTodos();

  const handleSubmit = (formData) => {
    const text = formData.get('todo')?.trim();
    if (!text) return;

    setTodos((prev) => {
      const newState = [{ id: Date.now(), text, completed: false }, ...prev];
      localStorage.setItem('todos', JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <form action={handleSubmit} className='mb-4 flex'>
      <input
        type='text'
        name='todo'
        placeholder='Add a new todo'
        className='flex-1 rounded-l-md border px-2 mr-2'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 cursor-pointer'>
        Add
      </button>
    </form>
  );
};

export default AddToDo;

import './index.css';

const App = () => {
  const submitAction = async (formData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const validationErrors = validate({ name, email, message });

    if (Object.keys(validationErrors).length === 0) {
      await sleep(2000); // Simulate network delay
      console.log('Submitted:', { name, email, message });
      alert('Form submitted successfully!');
    } else {
      console.error(validationErrors);
    }
  };

  return (
    <main className='min-h-screen p-8 font-sans bg-gray-100'>
      <div className='max-w-xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>
          Contact Us
        </h2>
        <form action={submitAction} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              name='name'
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='Leia Organa'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              name='email'
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='leia@rebellion.org'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              name='message'
              rows={4}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='Tell us how we can help...'
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 text-white bg-blue-600 rounded hover:bg-blue-700'>
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;

const validate = ({ name, email, message }) => {
  const newErrors = {};
  if (!name.trim()) newErrors.name = 'Name is required.';
  if (!email.trim()) {
    newErrors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = 'Invalid email format.';
  }
  if (!message.trim()) newErrors.message = 'Message is required.';
  return newErrors;
};

const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

import './index.css';

import { useActionState, useEffect, useState } from 'react';

const submitAction = async (prevState, formData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  const validationErrors = validate({ name, email, message });

  if (Object.keys(validationErrors).length > 0) {
    return { error: validationErrors, success: false };
  }

  await sleep(2000); // Simulate network delay
  console.log('Submitted:', { name, email, message });
  alert('Form submitted successfully!');
  return { error: null, success: true }; // clear errors on success
};

const App = () => {
  const [state, formAction, isPending] = useActionState(submitAction, {});
  const [{ name, email, message }, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (state.success) {
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  }, [state]);

  return (
    <main className='min-h-screen p-8 font-sans bg-gray-100'>
      <div className='max-w-xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>
          Contact Us
        </h2>
        <form action={formAction} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              name='name'
              value={name}
              onChange={handleChange}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='Leia Organa'
            />
            {state.error?.name && (
              <p className='mt-1 text-sm text-red-600'>{state.error?.name}</p>
            )}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              name='email'
              value={email}
              onChange={handleChange}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='leia@rebellion.org'
            />
            {state.error?.email && (
              <p className='mt-1 text-sm text-red-600'>{state.error?.email}</p>
            )}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              name='message'
              value={message}
              onChange={handleChange}
              rows={4}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='Tell us how we can help...'
            />
            {state.error?.message && (
              <p className='mt-1 text-sm text-red-600'>
                {state.error?.message}
              </p>
            )}
          </div>
          <button
            type='submit'
            className={`w-full py-2 rounded text-white ${
              isPending
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
            disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
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

import './index.css';

import { useState } from 'react';

import { validate, sleep } from './utils/validation';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    const hasNoErrors = Object.keys(validationErrors).length === 0;
    // empty === 0 hasNoErros is true
    // {name: 'Name is required'} then hasNoErros is false

    if (hasNoErrors) {
      await sleep(2000); // Simulate network delay
      console.log('Submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
    setLoading(false);
  };

  return (
    <main className='min-h-screen p-8 font-sans bg-gray-100'>
      <div className='max-w-xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              name='name'
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='Leia Organa'
            />
            {errors.name && (
              <p className='mt-1 text-sm text-red-600'>{errors.name}</p>
            )}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Email
            </label>
            <input
              name='email'
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='leia@rebellion.org'
            />
            {errors.email && (
              <p className='mt-1 text-sm text-red-600'>{errors.email}</p>
            )}
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              name='message'
              rows={4}
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              className='w-full px-3 py-2 mt-1 border border-gray-300 rounded'
              placeholder='Tell us how we can help...'
            />
            {errors.message && (
              <p className='mt-1 text-sm text-red-600'>{errors.message}</p>
            )}
          </div>
          <button
            type='submit'
            disabled={loading}
            className={`w-full py-2 rounded text-white ${
              loading
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}>
            {loading ? 'Sending message...' : 'Send Message'}
          </button>
        </form>
      </div>
    </main>
  );
};

export default App;

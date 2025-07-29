import './index.css';

import { useFormStatus } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';

const Submit = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className={`w-full py-2 rounded text-white ${
        pending
          ? 'bg-blue-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700'
      }`}
      disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
};

const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className='p-4 text-red-700 bg-red-100 border border-red-300 rounded'>
    <p className='font-semibold'>
      There was an error while submitting the form:
    </p>
    <pre className='mt-2 text-sm'>{error.message}</pre>
    <button
      onClick={resetErrorBoundary}
      className='px-4 py-1 mt-2 text-sm text-white bg-red-600 rounded hover:bg-red-700'>
      Retry
    </button>
  </div>
);

const App = () => {
  const submitAction = async (formData) => {
    throw new Error('This error was thrown from the action');
  };

  return (
    <main className='min-h-screen p-8 font-sans bg-gray-100'>
      <div className='max-w-xl p-6 mx-auto space-y-6 bg-white rounded-lg shadow'>
        <h2 className='text-2xl font-bold text-center text-gray-800'>
          Contact Us
        </h2>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
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
            <Submit />
          </form>
        </ErrorBoundary>
      </div>
    </main>
  );
};

export default App;

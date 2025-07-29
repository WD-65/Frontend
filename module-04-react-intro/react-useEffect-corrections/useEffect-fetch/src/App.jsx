import { useEffect, useState } from 'react';

import ErrorMessage from './components/ErrorMessage';
import Loading from './components/Loading';
import People from './components/People';
import PreviousNext from './components/PreviousNext';

const App = () => {
  const [url, setUrl] = useState('https://swapi.tech/api/people');
  const [nextUrl, setNextUrl] = useState(null);
  const [previousUrl, setPreviousUrl] = useState(null);
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const fetchPeople = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Failed to fetch!');
        const data = await res.json();
        if (!ignore) {
          setPeople(data.results);
          setNextUrl(data.next);
          setPreviousUrl(data.previous);
        }
      } catch (err) {
        if (!ignore) {
          setError('Could not load characters!');
          console.error(err);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };

    fetchPeople();
    return () => {
      ignore = true;
    };
  }, [url]);

  console.log(people);
  console.log(previousUrl);
  console.log(nextUrl);
  return (
    <main className='min-h-screen p-8 font-sans bg-gray-100'>
      <div className='max-w-3xl mx-auto space-y-6'>
        <PreviousNext
          previousUrl={previousUrl}
          nextUrl={nextUrl}
          setUrl={setUrl}
        />
        <h1 className='text-3xl font-bold text-center text-gray-800'>
          Star Wars Characters
        </h1>

        {error && <ErrorMessage error={error} />}
        {loading && <Loading />}
        {!loading && <People people={people} />}
      </div>
    </main>
  );
};

export default App;

import { Link } from 'react-router';

const Home = ({ characters }) => {
  return (
    <ul>
      {characters?.map((character) => (
        <li key={character.uid}>
          <div className='card w-96 bg-base-100 card-xs shadow-sm'>
            <div className='card-body'>
              <h2 className='card-title'>{character.name}</h2>
              <div className='justify-end card-actions'>
                <Link to={`/characters/${character.uid}`} className='btn btn-primary'>
                  GoTo
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Home;

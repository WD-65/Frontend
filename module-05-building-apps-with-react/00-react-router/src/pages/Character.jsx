import { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const Character = () => {
  const [data, setData] = useState(null);

  const { characterId } = useParams();

  useEffect(() => {
    // Effect
    fetch(`https://swapi.tech/api/people/${characterId}`)
      .then((res) => res.json())
      .then((data) => setData(data.result))
      .catch((err) => console.log(err));
  }, [characterId]);

  console.log(data);

  return <div>{data && <p>Birth Year: {data.properties.birth_year}</p>}</div>;
};

export default Character;

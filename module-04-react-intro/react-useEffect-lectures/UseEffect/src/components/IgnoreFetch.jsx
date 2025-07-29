import { useState, useEffect } from "react";

function IgnoreFetch() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

    const getPokemon = async () => {
      setLoading(true);
      setError(null);
      await sleep(2000); // simulate 2-second delay
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        if (!ignore) {
        setPokemon(data.results);
        }
      } catch (e) {
        if (!ignore) {
        setError("Failed to fetch Pokémon.");
        console.error(e);
        }
      } finally {
        if (!ignore) {
        setLoading(false);
        }
      }
    };

    getPokemon();

    return () => {
      ignore = true;
    };
  }, []);
  
  return (
    <div>
      <h1>Pokémon List</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {pokemon.map((poke) => (
          <li key={poke.name}>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default IgnoreFetch;

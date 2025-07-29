import { useEffect } from "react";
import { useState } from "react";

function FetchPokemonByName({ pokemon, setPokemon, pokemonName }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    let ignore = false;

    const fetchPokemonByName = async () => {
      try {
        setTimeout(async () => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
          );
          const data = await response.json();
          if (!ignore) {
            setPokemon(data);
          }
        }, 12000); // Simulate a delay
      } catch (error) {
        if (!ignore) {
          setError(error);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    };
    fetchPokemonByName();

    return () => {
      ignore = true; // Cleanup function to prevent state updates on unmounted component
    };
  }, [pokemonName]);

  return (
    <div className="flex flex-col items-center mt-4">
      {pokemon ? (
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="overflow-hidden">
            <img className="object-cover w-full h-48" src={pokemon.sprites.front_default} alt={pokemon.name} />
          </figure>
          <div className="card-body">
            <h3 className="card-title">{pokemon.name}</h3>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchPokemonByName;

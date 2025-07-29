import { useState, useEffect } from "react";

function FetchAllPokemon() {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=9&offset=0"
        );
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchPokemon();
  }, []);
  return (
    <ul className="w-full flex flex-wrap justify-center">
      {pokemons.map((pokemon, index) => (
        <li key={index} className="card w-20 bg-base-100 card-xs shadow-sm m-2 p-1">
          {pokemon.name}
        </li>
      ))}
    </ul>
  );
}

export default FetchAllPokemon;

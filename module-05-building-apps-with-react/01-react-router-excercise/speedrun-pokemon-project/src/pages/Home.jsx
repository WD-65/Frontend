import { useEffect, useState } from "react";

import PokemonCard from "../components/PokemonCard";

const Home = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  // console.log(allPokemon);

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        // console.log(data.results);
        setAllPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllPokemon();
  }, []);

  return (
    <main>
      {allPokemon.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} age={40} />
      ))}
    </main>
  );
};

export default Home;

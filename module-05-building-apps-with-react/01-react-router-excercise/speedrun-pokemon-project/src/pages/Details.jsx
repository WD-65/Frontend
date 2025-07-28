import { useEffect, useState } from "react";

import { useParams } from "react-router";

const Details = () => {
  const [pokemon, setPokemon] = useState(null);
  const { name } = useParams();
  // console.log(name);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();
        // console.log(data.results);
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  });

  if (!pokemon) return <h3>Loading...</h3>;

  return <>{pokemon.name}</>;
};

export default Details;

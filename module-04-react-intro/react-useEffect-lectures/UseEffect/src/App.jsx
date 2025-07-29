import { useState, useEffect } from "react";
import FetchAllPokemon from "./components/FetchAllPokemon";
import SearchPokemon from "./components/SearchPokemon";
import FetchPokemonByName from "./components/FetchPokemonByName";
import Interval from "./components/Interval";

function App() {
  const [count, setCount] = useState(3);
  const [showInterval, setShowInterval] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("ditto");
  const [searchPokemon, setSearchPokemon] = useState("");
  const [pokemon, setPokemon] = useState(null);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">UseEffect</h1>
      <div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">Interval</div>
          <div className="collapse-content text-sm">
            <button
              className="btn"
              onClick={() => setShowInterval(!showInterval)}
            >
              Toggle Interval
            </button>
            {showInterval && <Interval count={count} setCount={setCount} />}
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">Pokemon List</div>
          <div className="collapse-content text-sm">
            <FetchAllPokemon />
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">Search Pokemon</div>
          <div className="collapse-content text-sm">
            <SearchPokemon
              searchPokemon={searchPokemon}
              setSearchPokemon={setSearchPokemon}
              setPokemonName={setPokemonName}
            />
            <FetchPokemonByName
              pokemon={pokemon}
              setPokemon={setPokemon}
              pokemonName={pokemonName}
              setPokemonName={setPokemonName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

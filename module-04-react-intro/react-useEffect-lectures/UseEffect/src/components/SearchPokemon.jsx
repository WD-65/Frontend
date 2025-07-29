function SearchPokemon({ searchPokemon, setSearchPokemon, setPokemonName }) {
  const handleClick = () => {
    setPokemonName(searchPokemon);
    setSearchPokemon("");
  };

  return (
    <form className="flex justify-center space-x-2 items-center">
      <input
        className="input input-bordered w-64"
        type="text"
        value={searchPokemon}
        onChange={(e) => setSearchPokemon(e.target.value)}
        placeholder="Enter Pokémon name"
      />
      <button className="btn bg-amber-300 text-xs" type="button" onClick={handleClick}>
        Search Pokémon
      </button>
    </form>
  );
}
export default SearchPokemon;

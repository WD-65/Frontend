const pokemonContainer = document.getElementById('pokemon-container');

fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Something went wrong!');
    }
    return response.json();
  })
  .then((pokemonData) => {
    console.log(pokemonData.results);

    pokemonData.results.forEach((pokemon) => {
      displayPokemon(pokemon);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Function that handles DOM manipulation
function displayPokemon(pokemon) {
  const pokemonListItem = document.createElement('li');
  pokemonListItem.textContent = pokemon.name;
  pokemonContainer.appendChild(pokemonListItem);
}

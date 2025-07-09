const pokemonContainer = document.getElementById('pokemon-container');

for (let i = 1; i <= 150; i++) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json();
    })
    .then((pokemonData) => {
      // console.log(pokemonData);
      if (!pokemonData) {
        return;
      }
      displayPokemon(pokemonData);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function that handles DOM manipulation
function displayPokemon(pokemon) {
  const pokemonCard = document.createElement('div');

  pokemonCard.classList.add(
    'shadow-md',
    'flex',
    'flex-col',
    'gap-4',
    'items-center'
  );

  const pokemonImg = document.createElement('img');
  pokemonImg.src = pokemon.sprites.front_default;
  pokemonImg.className += 'mb-4';

  const pokemonName = document.createElement('h2');
  pokemonName.textContent = pokemon.name;
  pokemonName.setAttribute('class', 'text-xl font-bold');

  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

  pokemonContainer.appendChild(pokemonCard);
}

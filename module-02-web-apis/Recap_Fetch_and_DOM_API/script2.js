// Get the container element where we'll display all Pokemon cards
const pokemonContainer = document.getElementById('pokemon-container');

// Loop through Pokemon IDs 1 to 150 to fetch individual Pokemon data
for (let i = 1; i <= 150; i++) {
  // Make API request to get data for each Pokemon by ID
  fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    .then((response) => {
      // Check if the API request was successful
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      // Convert response to JSON format
      return response.json();
    })
    .then((pokemonData) => {
      // Check if we received valid Pokemon data
      if (!pokemonData) {
        return;
      }
      // Call function to create and display the Pokemon card
      displayPokemon(pokemonData);
    })
    .catch((err) => {
      // Log any errors that occur during the fetch process
      console.log(err);
    });
}

// Function that creates HTML elements and displays Pokemon information
function displayPokemon(pokemon) {
  // Create a container div for each Pokemon card
  const pokemonCard = document.createElement('div');

  // Add CSS classes for styling the card (shadow, padding, margin, layout)
  pokemonCard.classList.add(
    'shadow-md',
    'p-4',
    'm-2',
    'flex',
    'flex-col',
    'items-center'
  );

  // Create image element for Pokemon sprite
  const pokemonImg = document.createElement('img');
  pokemonImg.src = pokemon.sprites.front_default; // Set image source from API data
  pokemonImg.className += 'mb-4'; // Add margin bottom for spacing

  // Create heading element for Pokemon name
  const pokemonName = document.createElement('h2');
  // Capitalize first letter of Pokemon name
  pokemonName.textContent =
    pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  // Add CSS classes for text styling
  pokemonName.setAttribute('class', 'text-xl font-bold text-gray-600');

  // Add image and name to the Pokemon card
  pokemonCard.appendChild(pokemonImg);
  pokemonCard.appendChild(pokemonName);

  // Add the completed Pokemon card to the main container
  pokemonContainer.appendChild(pokemonCard);
}

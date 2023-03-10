const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');




const fetchPokemon = async (pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    
   
    const data = await APIResponse.json();
    return data;
    }
  

const renderPokemon = async (pokemon) => {

   

    const data = await fetchPokemon(pokemon);

    if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    }
    
    

}

form.addEventListener('submit', (Event) => {
    Event.preventDefault();
    renderPokemon(input.value.toLowerCase());
    input.value = '';
});


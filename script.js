
let allPokemons = [];


async function loadInitPokemons() {
  const list = await loadPokemonList(20, 0);

  for (let i = 0; i < list.length; i++) {
    const url = list[i].url;
    const pokemon = await loadPokemonDetails(url);
    allPokemons.push(pokemon);
  }
}

function flipCard(button) {
  const card = button.closest('.card-flip');
  card.classList.toggle('flipped');
}

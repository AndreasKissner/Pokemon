async function loadPokemonList(limit, startIndex) {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startIndex}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function loadPokemonDetails(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function loadPokemonList(limit, startIndex) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startIndex}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fehler beim Laden der Pokémon-Liste:', error);
    return [];
  }
}

async function loadPokemonDetails(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fehler beim Laden der Pokémon-Daten:', error);
    return null;
  }
}

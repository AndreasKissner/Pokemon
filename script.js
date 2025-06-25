let list = await loadPokemonList(20, 0);
let fullPokemon = await loadPokemonDetails(list[0].url);

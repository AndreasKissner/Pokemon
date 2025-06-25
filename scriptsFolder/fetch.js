async function loadPokemonList(limit, startIndex) { // Limit = wieviel POkemon  startIndex ab welchem Pokemon//await und gibt versprochen später ein Ergebnis zurück
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${startIndex}`;//${limit} wird ersetzt mit dem Wert, wie viele Pokémon du willst ${startIndex} wird ersetzt mit dem Startpunkt
  const response = await fetch(url);// Warte ( await) Bis ANtwort >Komplet da ist- Ergebniss kommt dann in response
  const data = await response.json();// Liest und wandelt den Inhalt in JSon um und steckt es in die data const
  return data.results;// data.results ist ein Array mit Einträgen Nur der Teil der doe Okemon enthält
}

async function loadPokemonDetails(url) {// hier werdem die Detials zu einem einzigem PM geholt mit diesen Infos: name id, sprites (für das Bild), types, stats (HP, Stärke, etc.)
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

  
  const pokeApi = {}
  
  function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getpokemonDetail = (pokemon) =>{
  return fetch(pokemon.url)
   .then((responde) => responde.json())
   .then(convertPokeApiDetailToPokemon)
}


   pokeApi.getpokeAPI = (offset = 0, limit =5) =>{
    
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

  return  fetch(url)
      .then((reponse) => reponse.json())
      .then((reponseBody) => reponseBody.results)
      .then((pokemons) => pokemons.map(pokeApi.getpokemonDetail))
      .then((detailRequest) => Promise.all(detailRequest))
      .then((pokeomDetails) =>{pokeomDetails })
    }
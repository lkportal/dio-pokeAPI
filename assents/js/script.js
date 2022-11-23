const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function pokemonTypos(pokemonType){
    return pokemonType.map((typleSlot) =>{ `<li class="type">${typleSlot.type.name}</li>`})
}

function pokemonList(pokemon){
   return `
   <li class="pokemon ${pokemon.type}">
   <span class="number">${pokemon.number}</span>
   <span class="name">${pokemon.name}</span>

   <div class="detail-div">
       <ol class="types">
       ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
       </ol>

       <img src="${pokemon.photo}"
           alt="${pokemon.name}">
   </div>
</li>
    `
}
 const pokemonsLista = document.getElementById('pokemon')


pokeApi.getpokeAPI().then((pokemonListH = [] ) =>{
    const newHtml = pokemonListH.map(pokemonList).join('')
    pokemonsLista.innerHTML += newHtml
}     
 
)
        

    
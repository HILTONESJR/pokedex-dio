

const pokeApi = {}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json()) // converte reponse para json
        .then((jsonBody) => jsonBody.results) // converte json para results
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        }
        

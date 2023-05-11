
const offset = 0;
const limit = 10;
const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertePokemonToLi(pokemon) {
    return `
         <li class=" pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">Glass</li>
            <li class="type">Poison</li>
        </ol>    
    <img src="https://media.tenor.com/6nHb-yHC2pkAAAAi/bulbasaur.gif" alt="${pokemon.name}">
    </div>
</li>
`
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertePokemonToLi).join('')
})

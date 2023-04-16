function convertPokemonToLi(pokemon){
    return `
    
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="/assets/images/Pokemon-Bulbasaur-PNG-Pic.png" alt="${pokemon.name}">
                </div>
            </li>
    
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})

.catch((error) => console.error(error))











 /*
        const listItens = []

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItens.push(convertPokemonToLi (pokemon))
        }
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
        console.log(listItens)

        .catch((error) => console.error(error))



/* 

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons()
    .then((pokemons) => {

        const listItens = []

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            listItens.push(convertPokemonToLi (pokemon))
        }
        pokemonList.innerHTML += convertPokemonToLi(pokemon)
        console.log(listItens)
    })
    .catch((error) => console.error(error))

/* => Função especial

fetch(url)
    .then((response) => response.json())
    .then(function (jsonBody){
        console.log(jsonBody)
    })
    .catch(function (error) {
        console.log (error)    
    })
    .finally(function () {
        console.log('Requisição concluída')
    })
    
*/
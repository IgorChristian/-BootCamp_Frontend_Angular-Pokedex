// main.js

const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");

const limit = 12;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}" data-id="${pokemon.number}">
      <span class="number">${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img src="${pokemon.photo}" alt="${pokemon.name}">
      </div>
    </li>
  `;
}

function loadPokemonItens(offset, limit) {
  pokeApi
    .getPokemons(offset, limit)
    .then((pokemons = []) => {
      const newHtml = pokemons.map(convertPokemonToLi).join("");
      pokemonList.innerHTML += newHtml;
      const pokemonElements = document.querySelectorAll(".pokemon");
      pokemonElements.forEach((element) => {
        const pokemonNumber = element.getAttribute("data-id");
        element.addEventListener("click", () => {
          window.location.href = `detail.html?number=${pokemonNumber}`;
        });
      });
    })
    .catch((error) => console.error(error));
}

loadPokemonItens(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  loadPokemonItens(offset, limit);
});

// detail-pokemon.js

const infoPokemon = document.getElementById("infoPokemon");

function convertPokemonToDetail(pokemon_detail) {
  return `
  <li class="pokemon_detail ${pokemon_detail.type}">
  <span class="number">${pokemon_detail.number}</span>
  
  <div class="detail-total">
      <div class="detail">
          <img src="${pokemon_detail.photoStatic}" alt="${pokemon_detail.name}">
          <span class="name-detail">${pokemon_detail.name}</span>
              <ol class="types">
                  ${pokemon_detail.types
                    .map((type) => `<li class="type ${type}">${type}</li>`)
                    .join("")}
              </ol>
      </div>
      <div class="detail-col">
          <section class="about">
              <h2> Sobre </h2>
              <span class="height">Altura: ${pokemon_detail.height} </br></span>
              <span class="weight">Peso: ${pokemon_detail.weight} </br></span>
          </section>

          <section class="hab">
              <h2> Habilidades </h2>
              <span class="abilities">${pokemon_detail.abilities.join(
                " </br> "
              )}</span>
          </section>

          <section class="status">
              <h2> Status </h2>
              <span class="stats">${pokemon_detail.stats
                .map((stat) => stat.name + " : " + stat.value)
                .join("</br>")}</span>
          </section>
      </div>
  </div>
  </li>
  `;
}

function getPokemonDetailsByNumber(number) {
  return pokeApi.getPokemonDetail({
    url: `https://pokeapi.co/api/v2/pokemon/${number}/`,
  });
}

function getPokemonNumberFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("number");
}

function loadPokemonDetails() {
  const pokemonNumber = getPokemonNumberFromUrl();
  if (pokemonNumber) {
    getPokemonDetailsByNumber(pokemonNumber)
      .then((pokemonDetail) => {
        const newHtmlDetail = convertPokemonToDetail(pokemonDetail);
        infoPokemon.innerHTML += newHtmlDetail;

        const section = document.querySelector(".content");
        section.classList.add(pokemonDetail.type.toLowerCase());
      })
      .catch((error) => console.error(error));
  }
}

loadPokemonDetails();

const backGo = document.getElementById("backBtn");

function backPage() {
  window.location.href = "/index.html";
}

backGo.addEventListener("click", () => {
  backPage();
});

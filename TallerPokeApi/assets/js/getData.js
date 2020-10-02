/* Este script se encarga de consumir la api de pokeAPI y pintar cada pokemon en cards */

//url de la api
const API = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=00";

//Obtener resultado del API
const getDataAPI = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            getAllPokemons(json), paginacion(json)
        })
        .catch((error) => {
            console.log("Error", error);
        })
}
const getAllPokemons = (data) => {
    for (let i = 1; i < data.results.length; i++) {
        getPokemon(i);
    }
}
//Obtener cada id de los poqkemones
const getPokemon = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    //console.log(data);
    fetch(url)
        .then((response) => response.json())
        .then((json) => {
            mostarPokemon(json)
        })
        .catch((error) => {
            console.log("Error", error);
        })
}
const mostarPokemon = (data) => {
    const listPokemonDiv = document.createElement('div');
    listPokemonDiv.classList.add('col');

    let pokemonCardBody = "";
    pokemonCardBody += '<div class="col">';
    pokemonCardBody += '<div class="card" style="width:10rem;">';
    pokemonCardBody += `<img src="${data.sprites.front_default}" class="card-img-top" alt="Card image cap">`;
    pokemonCardBody += '<div class="card-body">';
    pokemonCardBody += `<h5 class="card-title">${data.name}</h5>`;
    pokemonCardBody += `<p class="card-text">Abilities: ${data.abilities[0].ability.name}</p>`;
    pokemonCardBody += `<p class="card-text">Type: ${data.types[0].type.name}</p>`;
    pokemonCardBody += `<p class="card-text">Height: ${data.height}</p>`;
    pokemonCardBody += `<p class="card-text">Weight: ${data.weight}</p>`;
    pokemonCardBody += '</div>';
    pokemonCardBody += '</div>';
    pokemonCardBody += '</div>';
    listPokemonDiv.innerHTML = pokemonCardBody;
    document.getElementById('datosPersonajes').appendChild(listPokemonDiv);
}
// Paginacion
const paginacion = (info) => {
    console.log(info);
    let prevDisabled = "";
    let nextDisabled = "";
    let createElementHtml = "";
    createElementHtml += `<li class="page-item ${info.prev == null ? prevDisabled = "disabled": prevDisabled = ""} "><a class="page-link" onlick="getData('${info.prev}')">Previous</a></li>`;
    createElementHtml += `<li class="page-item ${info.next == null ? nextDisabled = "disabled": nextDisabled = ""}"><a class="page-link" onlick="getData('${info.next}')">Next</a></li>`;
    document.getElementById("paginacion").innerHTML = createElementHtml;
}
//EjecutarData
getDataAPI(API);
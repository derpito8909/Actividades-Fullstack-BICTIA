/* Este script se encarga de consumir la api de pokeAPI y pintar cada pokemon en cards */

//url de la api
const API = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=00";

//Obtener resultado del API
const getDataAPI = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            getAllPokemons(json.results);
        })
        .catch((error) => {
            console.log("Error", error);
        })
}
const getAllPokemons = (data) => {
    for (let i = 1; i < data.length; i++) {
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
    console.log(data);
    let createElementHtml = "";
    createElementHtml += '<div class="col">';
    createElementHtml += '<div class="card" style="width:10rem;">';
    createElementHtml += `<img src="${data.sprites.front_default}" class="card-img-top" alt="Card image cap">`;
    createElementHtml += '<div class="card-body">';
    createElementHtml += `<h5 class="card-title">${data.name}</h5>`;
    createElementHtml += `<p class="card-text">Abilities: ${data.abilities[0].ability.name}</p>`;
    createElementHtml += `<p class="card-text">Type: ${data.types[0].type.name}</p>`;
    createElementHtml += `<p class="card-text">Height: ${data.height}</p>`;
    createElementHtml += `<p class="card-text">Weight: ${data.weight}</p>`;
    createElementHtml += '</div>';
    createElementHtml += '</div>';
    createElementHtml += '</div>';
    document.getElementById('datosPersonajes').innerHTML = createElementHtml;
}
// Paginacion
const paginacion = (info) => {
    let prevDisabled = "";
    let nextDisabled = "";
    let createElementHtml = "";
    createElementHtml += `<li class="page-item ${info.prev == null ? prevDisabled = "disabled": prevDisabled = ""} "><a class="page-link" onlick="getData('${info.prev}')">Previous</a></li>`;
    createElementHtml += `<li class="page-item ${info.next == null ? nextDisabled = "disabled": nextDisabled = ""}"><a class="page-link" onlick="getData('${info.next}')">Next</a></li>`;
    console.log(createElementHtml);
    document.getElementById("paginacion").innerHTML = createElementHtml;
    console.log(API);
}
//EjecutarData
getDataAPI(API);
/* Este script se encarga de consumir la api de pokeAPI y pintar cada pokemon en cards */

//url de la api
const API = "https://pokeapi.co/api/v2/pokemon/";

//Obtener resultado del API
const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            getDataPokemon(json.results)
        })
        .catch((error) => {
            console.log("Error", error);
        })
}
//Obtener cada id de los poqkemones
const getDataPokemon = (data) => {
    for (const miniData of data) {
        fetch(miniData.url)
            .then((response) => response.json())
            .then((json) => {
                llenarDatos(json);
            })
            .catch((error) => {
                console.log("error", error)
            })
    }
}
const llenarDatos = (data) => {
    console.log(data)
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
    // for (const dt in data) {
    //     console.log(dt)
    //     // createElementHtml += '<div class="col">';
    //     // createElementHtml += '<div class="card" style="width:10rem;">';
    //     // createElementHtml += `<img src="${dt.sprites.front_default}" class="card-img-top" alt="Card image cap">`;
    //     // createElementHtml += '<div class="card-body">';
    //     // createElementHtml += `<h5 class="card-title">${dt.name}</h5>`;
    //     // createElementHtml += `<p class="card-text">Abilities: ${dt.abilities[0].ability.name}</p>`;
    //     // createElementHtml += `<p class="card-text">Type: ${dt.types[0].type.name}</p>`;
    //     // createElementHtml += `<p class="card-text">Height: ${dt.height}</p>`;
    //     // createElementHtml += `<p class="card-text">Weight: ${dt.weight}</p>`;
    //     // createElementHtml += '</div>';
    //     // createElementHtml += '</div>';
    //     // createElementHtml += '</div>';
    // }
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
getData(API);
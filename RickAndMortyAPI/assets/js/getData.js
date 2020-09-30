//url de la api

const API = "https://rickandmortyapi.com/api/character";

//Obtener resultado del API
const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            llenarDatos(json);
        })
        .catch((error) => {
            console.log("Error", error);
        })
}
const llenarDatos = (data) => {
    let createElementHtml = "";
    data.results.forEach((pj) => {
        createElementHtml += '<div class="col">';
        createElementHtml += '<div class="card" style="width:10rem;">';
        createElementHtml += `<img src="${pj.image}" class="card-img-top" alt="Card image cap">`;
        createElementHtml += '<div class="card-body">';
        createElementHtml += `<h5 class="card-title">${pj.name}</h5>`;
        createElementHtml += `<p class="card-text">${pj.species}</p>`;
        createElementHtml += '</div>';
        createElementHtml += '</div>';
        createElementHtml += '</div>';
    });
    document.getElementById('datosPersonajes').innerHTML = createElementHtml;
}
//EjecutarData
getData(API);
let nombreArtista = document.getElementById('nombrePersonaje1');
let edadArtista = document.getElementById('edadPersonaje1');
let ciudadArtista = document.getElementById('ciudadPersonaje1');
let profesionArtista = document.getElementById('profesionPersonaje1');
let imagenArtista = document.getElementById('imagenArtistaPersonaje1');

let nombreArtista2 = document.getElementById('nombrePersonaje2');
let edadArtista2 = document.getElementById('edadPersonaje2');
let ciudadArtista2 = document.getElementById('ciudadPersonaje2');
let profesionArtista2 = document.getElementById('profesionPersonaje2');
let imagenArtista2 = document.getElementById('imagenArtistaPersonaje2');

let nombreArtista3 = document.getElementById('nombrePersonaje3');
let edadArtista3 = document.getElementById('edadPersonaje3');
let ciudadArtista3 = document.getElementById('ciudadPersonaje3');
let profesionArtista3 = document.getElementById('profesionPersonaje3');
let imagenArtista3 = document.getElementById('imagenArtistaPersonaje3');

imagenArtista.addEventListener('click', () => {
    let nombre = prompt("Digite el nombre");
    let edad = prompt("Digite la edad");
    let ciudad = prompt("Digite la ciudad");
    let profesion = prompt("Digite la profesion");

    nombreArtista.textContent = "Nombre: " + nombre;
    edadArtista.textContent = "Edad: " + edad + " años";
    ciudadArtista.textContent = "Ciudad: " + ciudad;
    profesionArtista.textContent = "Profesion: " + profesion;
});

imagenArtista2.addEventListener('click', () => {
    let nombre = prompt("Digite el nombre");
    let edad = prompt("Digite la edad");
    let ciudad = prompt("Digite la ciudad");
    let profesion = prompt("Digite la profesion");

    nombreArtista2.textContent = "Nombre: " + nombre;
    edadArtista2.textContent = "Edad: " + edad + " años";
    ciudadArtista2.textContent = "Ciudad: " + ciudad;
    profesionArtista2.textContent = "Profesion: " + profesion;
});

imagenArtista3.addEventListener('click', () => {
    let nombre = prompt("Digite el nombre");
    let edad = prompt("Digite la edad");
    let ciudad = prompt("Digite la ciudad");
    let profesion = prompt("Digite la profesion");

    nombreArtista3.textContent = "Nombre: " + nombre;
    edadArtista3.textContent = "Edad: " + edad + " años";
    ciudadArtista3.textContent = "Ciudad: " + ciudad;
    profesionArtista3.textContent = "Profesion: " + profesion;
});
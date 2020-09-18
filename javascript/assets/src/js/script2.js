let nombre = document.getElementById('name');
let edad = document.getElementById('age');
let ciudad = document.getElementById('city');
let cancion = document.getElementById('song');

let userData = JSON.parse(localStorage.getItem('datosUsuario'));

nombre.textContent = userData.name;
edad.textContent = userData.age;
ciudad.textContent = userData.city;
cancion.textContent = userData.cancion;
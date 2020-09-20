/*este script se encarga de validar los datos ingresados en el el fomulario
 y guardarlos en un objeto y  insertarlos en el local storage del navegador */
const mensajeError = document.getElementById('mensajeError');
const formulario = document.getElementById('formulario');
let teamList = [];
// funcion para validar los datos del formulario
formulario.addEventListener('submit', (e) => {
    // funcion para prevenir que se envien los datos sin validar
    e.preventDefault();
    const team = document.getElementById('team').value;
    const location = document.getElementById('location').value;
    const stadium = document.getElementById('stadium').value;
    //condiciones para la validacion de los datos
    if (team == "" || location == "" || stadium == "") {
        swal("Please fill out all fields", {
            className: "swal-text",
            icon: "warning",
        });
    } else {
        const list = {
            equipo: team,
            lugar: location,
            stadium: stadium
        }
        listTeamInStorage(list);
        swal("Registro exitoso", {
            className: "swal-text",
            icon: "success",
        });
        formulario.reset();
    }
});
/* function para guardar en el local storage 
y se verifica si no exite se crea el arreglo donde va a contener la lista y agregando los nuevos valores */
const listTeamInStorage = (list) => {
    if (localStorage.getItem('listTeams') == null) {
        teamList.push(list);
        const teamString = JSON.stringify(teamList);
        localStorage.setItem("listTeams", teamString);
    } else {
        teamList2 = JSON.parse(localStorage.getItem('listTeams'));
        teamList2.push(list);
        const teamString = JSON.stringify(teamList2);
        localStorage.setItem('listTeams', teamString);
    }
}
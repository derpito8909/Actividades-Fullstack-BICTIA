const mensajeError = document.getElementById('mensajeError');
const formulario = document.getElementById('formulario');
// funcion para validar los datos del formulario
function validar(e) {
    // funcion para prevenir que se envien los datos sin validar
    e.preventDefault();

    let name = formulario['nombre'].value;
    let age = formulario['edad'].value;
    let city = formulario['ciudad'].value;
    let cancion = formulario['cancion'].value;
    //condiciones para la validacion de los datos
    if (name == "" || age == "" || city == "" || cancion == "") {
        swal("No se puede dejar campos vacios", {
            className: "swal-text",
            icon: "warning",
        });
    } else {
        let datos = {
            name,
            age,
            city,
            cancion,
        }
        localStorage.setItem("datosUsuario", JSON.stringify(datos));
        window.location = 'assets/src/pages/user.html';

    }
}
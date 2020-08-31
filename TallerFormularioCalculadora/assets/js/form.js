const mensajeError = document.getElementById('mensajeError');
// funcion para validar los datos del formulario
function validar(e) {
    // funcion para prevenir que se envien los datos sin validar
    e.preventDefault();
    const emailValidation = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let inputName = document.getElementById("nombre");
    let inputSurname = document.getElementById("apellido");
    let inputPass = document.getElementById("pass");
    let inputEmail = document.getElementById("mail");
    let inputCheckDatos = document.getElementById("checkDatos");
    //condiciones para la validacion de los datos
    if (inputName.value == "" || inputSurname.value == "" || inputPass.value == "" || inputEmail.value == "") {
        swal("No se puede dejar campos vacios", {
            className: "swal-text",
            icon: "warning",
        });
    } else if (!emailValidation.test(inputEmail.value)) {
        swal("Formato de email incorrecto", {
            className: "swal-text",
            icon: "warning",
        });
    } else if (inputCheckDatos.checked == false) {
        swal("Debes aceptar los terminos y condiciones antes de continuar", {
            className: "swal-text",
            icon: "warning",
        });
    } else {
        swal("Registro exitoso", {
            className: "swal-text",
            icon: "success",
        });
        setTimeout(() => {
            window.location = './assets/pages/calculadora.html'
        });
    }
}
/*este script se encarga de validar los datos ingresados en el el fomulario
 y guardarlos en un objeto y  insertarlos en el local storage del navegador */
const formularioLogin = document.getElementById('formLogin');
let userResgistedList = [];
let userInStorage;
let passwordInStorage;
// funcion para validar los datos del formulario
formularioLogin.addEventListener('submit', (e) => {
    // funcion para prevenir que se envien los datos sin validar
    e.preventDefault();
    const inputEmail = formularioLogin['email'].value;
    const inputPassword = formularioLogin['password'].value;
    getUserInStorage();
    if (userInStorage == inputEmail && passwordInStorage == inputPassword) {
        window.location = './tareas.html';
    } else {
        swal("El usuario y contraseña no existen", {
            className: "swal-text",
            icon: "warning",
        });
    }
});
/*  funcion que obtiene el nombre de usuario y la contraseña  guardados en el local storage*/
const getUserInStorage = () => {
    const userInStorageList = JSON.parse(localStorage.getItem('userRegisted'));
    for (let i = 0; i < userInStorageList.length; i++) {
        userInStorage = userInStorageList[i].email;
        passwordInStorage = userInStorageList[i].passsword;
    }
}
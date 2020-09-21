/*este script se encarga de validar los datos ingresados en el el fomulario
 y guardarlos en un objeto y  insertarlos en el local storage del navegador */
const formulario = document.getElementById('formulario');
let userResgistedList = [];
// funcion para validar los datos del formulario
formulario.addEventListener('submit', (e) => {
    // funcion para prevenir que se envien los datos sin validar
    e.preventDefault();
    const nombre = formulario['nombre'].value;
    const email = formulario['email'].value;
    const password = formulario['password'].value;
    const password2 = formulario['password2'].value;
    const emailValidation = /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/;
    const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    //condiciones para la validacion de los datos
    if (nombre == "" || email == "" || password == "" || password2 == "") {
        swal("No se pueden dejar campos vacios", {
            className: "swal-text",
            icon: "warning",
        });
    } else if (nombre.lenght < 6) {
        swal("El nombre debe tener más de seis carateres", {
            className: "swal-text",
            icon: "warning",
        });
    } else if (emailValidation.test(email) == false) {
        swal("Formato de correo invalido", {
            className: "swal-text",
            icon: "warning",
        });
    } else if (passwordValidation.test(password) == false) {
        swal("La contraseña debe tener mínimo 8 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener caracteres especiales", {
            className: "swal-text",
            icon: "warning",
        });
    } else if (password2 != password) {
        swal("Las contraseñas no coinciden", {
            className: "swal-text",
            icon: "warning",
        });
    } else {
        const userRegisted = {
            name: nombre,
            email: email,
            passsword: password
        }
        userRegistedInStorage(userRegisted);
        swal("Registro exitoso", {
            className: "swal-text",
            icon: "success",
        });
        formulario.reset();
        setTimeout(() => {
            window.location = './assets/pages/login.html';
        }, 2000);
    }
});
/* function para guardar en el local storage 
y se verifica si no exite se crea el arreglo donde va a contener la lista y agregando los nuevos valores */
const userRegistedInStorage = (list) => {
    if (localStorage.getItem('userRegisted') == null) {
        userResgistedList.push(list);
        const userString = JSON.stringify(userResgistedList);
        localStorage.setItem("userRegisted", userString);
    } else {
        const userResgistedList2 = JSON.parse(localStorage.getItem('userRegisted'));
        userResgistedList2.push(list);
        const userString = JSON.stringify(userResgistedList2);
        localStorage.setItem('userRegisted', userString);
    }
}
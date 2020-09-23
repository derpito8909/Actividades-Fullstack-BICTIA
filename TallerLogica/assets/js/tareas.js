/*  Este script se encarga de capturar las tareas escritas por el teclado virtual y tambien lista escritas en un input, guardarlas en el local storage y mostarlas en una lista en la pagina*/
window.addEventListener()
//se obtiene el nombre de usuario registrado en el localstorage y se muestra en la pagina
const nombreUsuario = document.getElementById('nombreUsuario');
const userInStorage = JSON.parse(localStorage.getItem('userRegisted'));
let user;

for (let i = 0; i < userInStorage.length; i++) {
    user = userInStorage[i].name;

}
nombreUsuario.textContent = user;

// funcion para obtener lo escrito en los botones del teclado y mostrarlo en el input del teclado
const inputLetras = document.querySelectorAll('.letra');
const inputMensaje = document.getElementById('mensaje');
const inputLista = document.getElementById('inputLista');

const teclado = (e) => {
    const textoTarget = e.target.innerText;

    if (textoTarget == "Espacio") {
        inputMensaje.innerHTML += "&nbsp";
    } else if (textoTarget == "borrar") {
        inputMensaje.innerText = inputMensaje.innerText.slice(0, -1)
    } else {
        inputMensaje.innerText += textoTarget;
    }
}
for (let letra of inputLetras) {
    letra.addEventListener('click', teclado);
}



const btnTareas = document.getElementById('btnTareas');
btnTareas.addEventListener('click', function (e) {
    if (inputMensaje.textContent == "") {
        swal("No se puede crear una tarea vacia", {
            className: "swal-text",
            icon: "warning",
        });
    } else {
        accion('setTarea');
        inputMensaje.textContent = "";
    }
});

const btnLista = document.getElementById('btnLista');
btnLista.addEventListener('click', function (e) {
    if (inputLista.value == "") {
        swal("No se puede crear una lista vacia", {
            className: "swal-text",
            icon: "warning",
        });
    } else {
        accion('setLista');
        inputLista.value = '';
    }
});

// funcion que me pregunta si va generar una tarea o una lista
const accion = (action) => {
    switch (action) {
        case 'setTarea':
            const listTarea = {
                tarea: inputMensaje.textContent
            }
            savedInLocalStorage(listTarea, "tareas");
            const dataTarea = getFromLocalStorage("tareas");
            showList(dataTarea[dataTarea.length - 1], "tarea");
            break;
        case 'setLista':
            const list = {
                lista: inputLista.value
            }
            savedInLocalStorage(list, "listas");
            const dataLista = getFromLocalStorage("listas");
            showList(dataLista[dataLista.length - 1], 'lista')
            break;
    }
}

// funcion para guardar datos en el local storage
const savedInLocalStorage = (list, key) => {
    const arregloContenido = []; // es un arreglo para insertar todas las palbras que se capturen en el input del teclado
    if (localStorage.getItem(key) == null) {
        arregloContenido.push(list);
        const contenidoString = JSON.stringify(arregloContenido);
        localStorage.setItem(key, contenidoString);
    } else {
        const arregloContenidoExistente = JSON.parse(localStorage.getItem(key));
        arregloContenidoExistente.push(list);
        const contenidoStringExistente = JSON.stringify(arregloContenidoExistente);
        localStorage.setItem(key, contenidoStringExistente);
    }
}

//funcion para obtener datos del local storage
const getFromLocalStorage = (key) => {
    let listStorage = JSON.parse(localStorage.getItem(key));
    return listStorage;
}


// funcion para mostar en una lista 
const showList = (text, componet) => {

    if (componet == 'tarea') {
        const ol = document.getElementById(componet);
        const li = document.createElement('li');
        li.textContent = text.tarea;
        ol.appendChild(li);
    } else {
        const ol = document.getElementById(componet);
        const li = document.createElement('li');
        li.textContent = text.lista;
        ol.appendChild(li);
    }
}
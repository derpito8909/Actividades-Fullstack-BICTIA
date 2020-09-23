/* Este   scrip se encarga de mostar en las casillas del campo letras las letras ordenadas del A hasta la J y los numeros 
ordenados del 1 al 0. se realiza validaciones que no puede dijitar dos veces la misma letra y dijitar las letras en desorder
a demas hacer funicones para establecer temas tanto retro o oscuro*/

const botones = document.querySelectorAll('.letra');
let inputletras = document.getElementById('letras');
let inputNumeros = document.getElementById('numeros');
const letrasOrden = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
const numerosOrden = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let contadorLetraA = 1;
let contadorLetraB = 1;
let contadorLetraC = 1;
let contadorLetraD = 1;
let contadorLetraF = 1;
let contadorLetraG = 1;
let contadorLetraH = 1;
let contadorLetraI = 1;
let contadorLetraJ = 1;
let contadorNumero1 = 1;
let contadorNumero2 = 1;
let contadorNumero3 = 1;
let contadorNumero4 = 1;
let contadorNumero5 = 1;
let contadorNumero6 = 1;
let contadorNumero7 = 1;
let contadorNumero8 = 1;
let contadorNumero9 = 1;
let contadorNumero0 = 1;

let terminarNumeros = false;
const themeContainer = document.getElementById('container');

//funcion para el cambio de los temas
$(function () {
    $('#oscuro').change(function () {
        if ($(this).prop('checked') == true) {
            themeContainer.className = "container border dark";
            guardarTemaLocalStorage('container border dark');
        } else {
            themeContainer.className = "container border";
            guardarTemaLocalStorage('container border');
        }
    })
});
$(function () {
    $('#retro').change(function () {
        if ($(this).prop('checked') == true) {
            themeContainer.className = "container border retro";
            guardarTemaLocalStorage('container border retro');
        } else {
            themeContainer.className = "container border";
            guardarTemaLocalStorage('container border');
        }
    })
});
// funcion para guardar los datos en el local storage
const guardarTemaLocalStorage = (tema) => {
    localStorage.setItem("temaGuardado", tema);
}
// funcion para cargar los datos del tema en el local storage
const cargarTema = () => {
    const temaGuardado = localStorage.getItem('temaGuardado');
    themeContainer.className = temaGuardado;
}
cargarTema();

// 1) funcion  que me optine el contenido del boton y y me valida la accion del boton 
function teclado(e) {
    const textoTarget = e.target.innerText;
    if (textoTarget == '--') {
        swal("Esta letra no esta disponible", {
            className: "swal-text",
            icon: "success",
        });
    } else if (textoTarget == 'reset') {
        inputletras.textContent = '';
        inputNumeros.textContent = '';
    }

    const arregloLetrasNumeros = textoTarget.split("-");
    if (terminarNumeros == true) {
        validacionNumeros(obtenerNumeroDigitado(arregloLetrasNumeros));
    } else {
        validacionLetras(obtenerLetraDigitada(arregloLetrasNumeros));
    }


}
// funcion que me recoreo todos los boton y me les agrega a cada uno un evento onclick
for (let boton of botones) {
    boton.addEventListener('click', teclado);
}
// 2a) funcion para obtener el nombre de la letra digitada
function obtenerLetraDigitada(botonDigitado) {
    return botonDigitado[0];
}
// 2b) funcion para obtener el nombre del numero digitado
function obtenerNumeroDigitado(botonDigitado) {
    return botonDigitado[1];
}


//funcion que me realiza la validacion las letras o los numeros digitados tengan su orden de digitacion
function validacionLetras(letraDigitada) {
    if (letraDigitada == letrasOrden[0]) { // me valida si la letra digita es igual al primer indici del arreglo de las letras ordenadas
        inputletras.textContent += letraDigitada;
        letrasOrden.shift(); // me elimina el primer elementto de la lista para decir que esta letra esta digitada y no volverla a validar
        if (letrasOrden.length == 0 && letraDigitada == 'J') {
            swal("Ya se terminaron las letras, continue con los numeros", {
                className: "swal-text",
                icon: "success",
            });
            terminarNumeros = true; // me indica si ya se termino de digitar las letras para darle el turno para digigitar las letras
        }
    } else {
        switch (letraDigitada) { // en cada uno de los caso se valida si dijita dos veces, y si digita una letra que no este en orden muestra cuales faltan  
            case 'A':
                contadorLetraA += 1;
                if (contadorLetraA >= 2) {
                    swal("La letra A ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break
            case 'B':
                if (contadorLetraB == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraB += 1;
                } else if (contadorLetraB >= 2) {
                    swal("La letra B ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'C':
                if (contadorLetraC == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A y B", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraC += 1;
                } else if (contadorLetraC >= 2) {
                    swal("La letra C ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'D':
                if (contadorLetraD == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A ,B ,C", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraD += 1;
                } else if (contadorLetraD >= 2) {
                    swal("La letra D ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'E':
                if (contadorLetraE == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A ,B ,C ,D", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraE += 1;
                } else if (contadorLetraE >= 2) {
                    swal("La letra B ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'F':
                if (contadorLetraF == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A ,B ,C ,D ,E ", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraF += 1;
                } else if (contadorLetraF >= 2) {
                    swal("La letra F ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'G':
                if (contadorLetraG == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A ,B ,C ,D ,E ,F", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraG += 1;
                } else if (contadorLetraG >= 2) {
                    swal("La letra G ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'H':
                if (contadorLetraH == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A ,B ,C ,D ,E ,F, G", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraH += 1;
                } else if (contadorLetraH >= 2) {
                    swal("La letra H ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'I':
                if (contadorLetraB == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A ,B ,C ,D ,E ,F ,G ,H", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraI += 1;
                } else if (contadorLetraI >= 2) {
                    swal("La letra I ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case 'J':
                if (contadorLetraJ == 1) {
                    swal("No puedes oprimir esta letra te falta la letra A ,B ,C ,D ,E ,F ,G ,H ,I", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorLetraJ += 1;
                } else if (contadorLetraJ >= 2) {
                    swal("La letra J ya fue digitada", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
        }
    }
}
//funcion que me realiza la validacion las letras o los numeros digitados tengan su orden de digitacion
function validacionNumeros(numeroDigitado) {
    if (numeroDigitado == numerosOrden[0]) {
        inputNumeros.textContent += numeroDigitado;
        numerosOrden.shift();
        if (numerosOrden.length == 0 && numeroDigitado == '0') {
            swal("Ya se terminaron los numeros", {
                className: "swal-text",
                icon: "success",
            });
        }
    } else {
        switch (numeroDigitado) {
            case '1':
                contadorNumero1 += 1;
                if (contadorNumero1 >= 2) {
                    swal("El numero 1 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break
            case '2':
                if (contadorNumero2 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero2 += 1;
                } else if (contadorNumero2 >= 2) {
                    swal("El numero 2 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '3':
                if (contadorNumero3 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1 y 2", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero3 += 1;
                } else if (contadorNumero3 >= 2) {
                    swal("El numero 3 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '4':
                if (contadorNumero4 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1, 2 ,3", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero4 += 1;
                } else if (contadorNumero4 >= 2) {
                    swal("El numero 4 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '5':
                if (contadorNumero5 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1, 2 ,3 ,4", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero5 += 1;
                } else if (contadorNumero5 >= 2) {
                    swal("El numero 5 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '6':
                if (contadorNumero6 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1 ,2 ,3 ,4 ,5", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero6 += 1;
                } else if (contadorNumero6 >= 2) {
                    swal("El numero6 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '7':
                if (contadorNumero7 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1 ,2 ,3 ,4 ,5 ,6", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero7 += 1;
                } else if (contadorNumero7 >= 2) {
                    swal("El numero7 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '8':
                if (contadorNumero8 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1 ,2 ,3 ,4 ,5 ,6 ,7", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero8 += 1;
                } else if (contadorNumero8 >= 2) {
                    swal("El numero 8 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '9':
                if (contadorNumero9 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1 ,2 ,3 ,4 ,5 ,6 ,7 ,8", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero9 += 1;
                } else if (contadorNumero9 >= 2) {
                    swal("El numero 9 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
            case '0':
                if (contadorNumero0 == 1) {
                    swal("No puedes oprimir este numero te falta el numero 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9", {
                        className: "swal-text",
                        icon: "warning",
                    });
                    contadorNumero0 += 1;
                } else if (contadorNumero0 >= 2) {
                    swal("El numero 0 ya fue digitado", {
                        className: "swal-text",
                        icon: "warning",
                    });
                }
                break;
        }
    }
}

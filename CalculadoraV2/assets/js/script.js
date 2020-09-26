/* Este script se encarga de capturar todos los botones que se tiene en una calculadora y poder hacer todas sus operaciones basicas, 
mostrarlas en un input de la pantalla y ademas guardar el historial de las operaciones y ver las en una lista */

const botones = document.querySelectorAll(".letra");
let displayResultado = document.getElementById("displayResultado");
const botonDelete = document.getElementById("btnDelete");
const botonClear = document.getElementById("btnClear");
const botonResultado = document.getElementById("btnResultado");

// 1) funcion  que me optine el contenido del boton y y me valida la accion del boton
function teclado(e) {
  const textoTarget = e.target.textContent;
  displayResultado.textContent += textoTarget;
  console.log(displayResultado.textContent);
}
// funcion que me recoreo todos los boton y me les agrega a cada uno un evento onclick
for (let boton of botones) {
  boton.addEventListener("click", teclado);
}
//funcion para borrar los digitos introducios en el display
function borrarDigitos() {
  displayResultado.textContent = displayResultado.textContent.slice(0, -1);
}
botonDelete.onclick = function () {
  borrarDigitos();
};
// funcion que me limpia por completo el display
function borrarContenidoTotal() {
  displayResultado.textContent = "";
}
botonClear.onclick = function () {
  borrarContenidoTotal();
};
// funcion que me indica que operacion se se va a realizar de acuerdo a lo capturado en el display
function obtenerOperacion() {
  if (displayResultado.textContent.indexOf("+") !== -1) {
    sumar();
  } else if (displayResultado.textContent.indexOf("-") !== -1) {
    restar();
  } else if (displayResultado.textContent.indexOf("X") !== -1) {
    multiplicacion();
  } else if (displayResultado.textContent.indexOf("÷") !== -1) {
    dividir();
  } else if (displayResultado.textContent.indexOf("x²") !== -1) {
    potencia();
  } else if (displayResultado.textContent.indexOf("√") !== -1) {
    raiz();
  } else if (displayResultado.textContent.indexOf("%") !== -1) {
    porcentaje();
  } else {
    swal("Operacion no disponible", {
      className: "swal-text",
      icon: "success",
    });
  }
}
botonResultado.onclick = function () {
  obtenerOperacion();
};
// operacion que realizar la operacion de la suma
function sumar() {
  let numeros = displayResultado.textContent.split("+");
  displayResultado.textContent = parseFloat(numeros[0]) + parseInt(numeros[1]);
  mostarHistorial(numeros[0] + "+" + numeros[1] + "=" + displayResultado.textContent);
}
function restar() {
  let numeros = displayResultado.textContent.split("-");
  displayResultado.textContent = parseFloat(numeros[0]) - parseInt(numeros[1]);
  mostarHistorial(numeros[0] + "-" + numeros[1] + "=" + displayResultado.textContent);
}
function multiplicacion() {
  let numeros = displayResultado.textContent.split("X");
  displayResultado.textContent = parseFloat(numeros[0]) * parseInt(numeros[1]);
  mostarHistorial(numeros[0] + "X" + numeros[1] + "=" + displayResultado.textContent);
}
function dividir() {
  let numeros = displayResultado.textContent.split("÷");
  displayResultado.textContent = parseFloat(numeros[0]) / parseInt(numeros[1]);
  mostarHistorial(numeros[0] + "/" + numeros[1] + "=" + displayResultado.textContent);
}
function potencia() {
  let numeros = displayResultado.textContent.slice(0, -2);
  displayResultado.textContent = parseInt(numeros) ** 2;
  mostarHistorial(numeros + "²" + " = " + displayResultado.textContent);
}
function raiz() {
  let numeros = displayResultado.textContent.slice(2, displayResultado.textContent.length);
  displayResultado.textContent = parseFloat(Math.sqrt(numeros));
  mostarHistorial("√" + numeros + " = " + displayResultado.textContent);
}
function porcentaje() {
  let numeros = displayResultado.textContent.slice(0, -1);
  displayResultado.textContent = parseFloat(numeros / 100);
}
// funcion que me muestra el historial en una lista
function mostarHistorial(texto) {
  const ul = document.getElementById("historial");
  const li = document.createElement("li");
  li.textContent = texto;
  ul.appendChild(li);
}

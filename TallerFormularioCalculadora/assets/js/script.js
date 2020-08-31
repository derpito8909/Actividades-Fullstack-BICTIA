let num1;
let num2;
let resultado;

//funcion para obtener la operacion y realizar la segun el caso y mostarla segun el caso
let obtenerOperacion = (operacion) => {
    switch (operacion) {
        case '+':
            num1 = document.getElementById('inputNumber1').value;
            num2 = document.getElementById('inputNumber2').value;
            resultado = parseInt(num1) + parseInt(num2);
            document.getElementById('resultado').textContent = resultado;
            break
        case '-':
            num1 = document.getElementById('inputNumber1').value;
            num2 = document.getElementById('inputNumber2').value;
            resultado = parseInt(num1) - parseInt(num2);
            document.getElementById('resultado').textContent = resultado;
            break
        case '*':
            num1 = document.getElementById('inputNumber1').value;
            num2 = document.getElementById('inputNumber2').value;
            resultado = parseInt(num1) * parseInt(num2);
            document.getElementById('resultado').textContent = resultado;
            break
        case '/':
            num1 = document.getElementById('inputNumber1').value;
            num2 = document.getElementById('inputNumber2').value;
            resultado = parseInt(num1) / parseInt(num2);
            document.getElementById('resultado').textContent = resultado;
            break
    }
}
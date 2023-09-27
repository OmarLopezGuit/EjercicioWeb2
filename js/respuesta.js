function validar() {
  var num1 = document.getElementById("numero_1").value;
  var num2 = document.getElementById("numero_2").value;

  if (num1.trim() === '' || num2.trim() === '') {
    alert('Por favor, no dejes espacios en blanco en los campos.');
  } else {
    var resultado = parseFloat(num1) + parseFloat(num2);
    if (isNaN(resultado)) {
        alert('Hubo un error al sumar los números.');
    } else {
        //mostrarResultado(resultado);
        if (esDivisible(num1,num2)) {
          alert('Resultado: ' + (num1/num2) + '\nResiduo: ' + (num1 % num2) + '\nEl numero ' + num1 + ' es divisible entre el numero ' + num2);
        } else {
          alert('El numero ' + num1 + ' no es divisible sobre el número ' + num2);
        }
    }
  }
}

function esDivisible(numero1, numero2) {
  try {
    if (numero1 % numero2 == 0) {
      return true;
    } else {
      return false;
    }
  } catch {
    return false;
  }
}
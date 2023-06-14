//variables

var numero = 123;

var nombre = "Alejandro es el instructor";



//Operadores

var resultado = 2 + 7;



//Operadores
var comparacion = 3 >= 4



//logicos

var resultadoLogico = (100 > 200)&&( 3 >= 3);




//métodos

var nombre = 'Alejo';

var numero = 9;

// returnnumero.length) //cuenta los caracteres del stri

//funciones

function sumar (a, b) {
  var suma = a + b;
  return suma;
}

// returnsumar(3, 4)
// returnsumar(8, 9)


//condicionales

var edad = 15;

// if(edad > 18) {
//   return'soy mayor de edad'
// } else {
//   return'soy menor de edad'
// }

function dominioDelPais(dominio){
  if(dominio==="co"){
    return 'el pais es colombia'
  } else if (dominio==="br"){
    return 'el pais es brasil'
  } else {
    return 'el pais es argentina'
  }
}

console.log(dominioDelPais('uy'));
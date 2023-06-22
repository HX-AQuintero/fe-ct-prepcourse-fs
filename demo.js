//variables

// var numero = 123;
// var nombre = "Alejandro es el instructor";


//Operadores

// var resultado = 2 + 7;

//Operadores
// var comparacion = 3 >= 4

//logicos

// var resultadoLogico = (100 > 200)&&( 3 >= 3);

//métodos

// var nombre = 'Alejo';

// var numero = 9;

// returnnumero.length) //cuenta los caracteres del stri

//funciones

// function sumar (a, b) {
//   var suma = a + b;
//   return suma;
// }

// returnsumar(3, 4)
// returnsumar(8, 9)


//condicionales

// var edad = 15;

// if(edad > 18) {
//   return'soy mayor de edad'
// } else {
//   return'soy menor de edad'
// }

// function dominioDelPais(dominio){
//   if(dominio==="co"){
//     return 'el pais es colombia'
//   } else if (dominio==="br"){
//     return 'el pais es brasil'
//   } else {
//     return 'el pais es argentina'
//   }
// }

// console.log(dominioDelPais('uy'));

//for

// for (var i = 0; i < "hola".length; i++) {
//   console.log("hola"[i]);
// }

// i = 0 --> 'h' 
//i = 1 --> 'o'
//...
// i = 4 -->  termina el for

// for (var i = 0; i >= 0; i++){
//   console.log(i);
// }

// function encontrarVocalA(string){
//   for(var i = 0; i < string.length; i++){
//     if(string[i] === 'a'){
//       return "Encontramos la vocal a"
//     }
//   }
//   return "El string no tiene ninguna letra a"
// }

// console.log(encontrarVocalA('hola'))

//while

// var contador = 1; 
//   while(contador <= 6) {
//     contador++;
//     return "contador es: ", contador;
//   }

//do while

// var count = 6; 
//   do {
// 	 console.log("count es: " + count);
//     	count++;
//  }
//   while(count < 6)

//switch

// function diaSemana(dia) {
//   switch (dia) {
//     case "lunes":
//       console.log("Hoy es lunes");
//       break;
//     case "martes":
//       console.log("Hoy es martes");
//       break;
//     case "miercoles":
//       console.log("Hoy es miércoles");
//       break;
//     case "jueves":
//       console.log("Hoy es jueves");
//       break;
//     case "viernes":
//       console.log("Hoy es viernes");
//       break;
//     default:
//       console.log("El día no es válido");
//       break;
//   }
// }

// console.log(diaSemana('Lunes'));

// console.log('hola');

// var comidas = ['Pizza', 'Hamburguesa', 'Pastas', 'Lasagna'];

// var hola = "hola123"
// comidas.push('Sandwich', 'Empanada', 4, "hola", "hola", hola, [1,2,3]);

// comidas.pop();
// comidas.pop();
// comidas.pop();

// comidas[1] = 'Platano';

// comidas.unshift('buñuelo', 'pan', 'milanesa');
// console.log(comidas);

// var autos = ["Ford", "Chevrolet", "Toyota", "Tesla"];

// //callback
// function mostrarNombres(elemento) {
    // console.log(elemento);
//    }

// autos.forEach(mostrarNombres);

//  console.log(autos);

// var numeros = [2, 3, 4, 5];

// function multi(elemento) {
//   return elemento * 3;
// }

// console.log(numeros.map(multi)); //aqui hay un arreglo


// numeros.map(function (elemento) {
//   return elemento * 3;
// });


// console.log(triple[1]);

// var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function sumatoria (acc, elemento) {
//   return acc + elemento;
// }

// var suma = numeros.reduce(sumatoria)

// console.log(suma);


// function saludo(nombre, apellido){
// 	console.log(arguments) // 
// }

// saludo(1,2,3,4,5) //--> 120


// function agregarItemAlFinalDelArray(array, elemento) {
//     // Agrega el "elemento" al final del arreglo recibido.
//     // Retorna el arreglo.
//     // Tu código:
//     return array.push(elemento);
//  }

//  console.log(agregarItemAlFinalDelArray([1,2],5));
// [1,2,5] --> 3 total elementos
//  console.log(agregarItemAlFinalDelArray([1,2,3,4],8));
// [1,2,3,4,8] --> 5 total elementos

// function agregarItemAlComienzoDelArray(array, elemento) {
//     // Agrega el "elemento" al comienzo del arreglo recibido.
//     // Retorna el arreglo.
//     // Tu código:
//     return array.unshift(elemento);
//  }

//  console.log(agregarItemAlComienzoDelArray([1,2,3], 4))
// // [4,1,2,3] --> 4 total elementos


//OBJETOS

var usuario = {
    nombre: "Alejo",
    password: "hola123",
    edad: 26,
    online: true,
    amigos: ['Maria', 'jose', 'Luis']
};


//dot notation
// console.log(usuario.nombre);
// console.log(usuario.edad);

//bracket notation
// console.log(usuario["amigos"]);
// console.log(usuario["online"]);

//asignar y modificar

usuario.pais = "Colombia";
usuario["identificacion"] = 235323542356;
usuario["telefono"] = 23452352345;

usuario.pais = "Argentina";
usuario["pais"] = "Uruguay";

var profesion = "Developer";

usuario.profesion = profesion;
usuario["profesion"] = profesion;

usuario[profesion] = profesion;

usuario["5hola123"] = true;

usuario["5hola123"] = false;

//eliminar

delete usuario["5hola123"];

delete usuario.telefono;

var pais = "Bolivia";


// console.log(usuario.decirHola("Lucas"));

// console.log(usuario.hasOwnProperty("pais"));

// console.log(Object.values(usuario));

// console.log(usuario.amigos.push("Joel"));
// console.log(usuario);

//bucle for...in

// for(var clave in usuario) {
//     console.log(usuario[clave]);
// }


//this

// usuario.decirHola = function() {
//     return "Hola! " + this.nombre + "tienes " + this.edad;
// }

// console.log(usuario.decirHola());

/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1]; // array=[1,2,3,4] --> length = 4; array[array.length - 1] = array[3]
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   //array=[1,2,3,4] --> [2,3,4,5]
   for(var i = 0; i < array.length; i++) {
      array[i] = array[i] + 1;
   }
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) { //palabras = ['hola', 'chao', 'adios', 'buenas']
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase = palabras.reduce(function (acc, palabra) {
      return acc + " " + palabra; //'hola chao adios buenas'
   })

   return frase;

   //solución callback
   // function union(acc, palabra) {
   //    return acc + " " + palabra;
   // }

   // var concatenacion = palabras.reduce(union);
   // return concatenacion;
}

function arrayContiene(array, elemento) { //array = [1, 2, 4, 56, 8]; elemento = 9
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   for (var i = 0; i < array.length; i++) {
      if (array[i] === elemento) {
         return true;
      }
   }
   return false;
}

function agregarNumeros(arrayOfNums) { //arrayOfNums = [1,2,3,4,5,6] --> 21
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var suma = arrayOfNums.reduce(function (acc, numero) {
      return acc + numero;
   })

   return suma;
}

function promedioResultadosTest(resultadosTest) { //resultadosTest= [1.4, 3.7, 6.2, 5.7] --> promedio=?
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   // var suma = resultadosTest.reduce(function (acc, nota) {
   //    return acc + nota;
   // })
   // return suma / resultadosTest.length;

   var suma = 0;
   for (var i = 0; i < resultadosTest.length; i++) {
      suma = suma + resultadosTest[i];
   }
   return suma / resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) { 
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   //arrayOfNums = [1, 6, 8, 3, 9, 11, 5] --> 11
   //                                   ^
   // mayor --> 11

   var mayor = arrayOfNums[0];

   arrayOfNums.forEach(function(numero) {
      if (numero > mayor) {
         mayor = numero;
      }
   })
   return mayor;
}


function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var producto = 1;
   if (arguments.length > 0) {
      for (var i = 0; i < arguments.length; i++) {
         producto = producto * arguments[i];
      }
      return producto;
   } else {
      return 0;
   }
}

function cuentoElementos(array) { //array = [1,5,46,67,23,45,99] --> 5
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var total = 0;
   array.forEach(function (numero) {
      if (numero > 18) {
         total++;
      }
   })

   return total;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return "Es fin de semana";
   } else {
      return "Es dia laboral";
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var string = num.toString(); // 3978 --> '3978'

   if (string[0] === "9") {
      return true;
   } else {
      return false;
   }
}

function todosIguales(array) { //array = [2,2,2,2,2]
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var primerValor = array[0];

   for (var i = 1; i < array.length; i++) {
      if (array[i] !== primerValor) {
         return false;
      }
   }
   return true;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var meses = [];

   array.forEach(function(mes) {
      if (mes === "Enero" || mes === "Marzo" || mes === "Noviembre") {
         meses.push(mes);
      }
   })

   if (meses.length === 3) {
      return meses;
   } else {
      return "No se encontraron los meses pedidos";
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   // var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

   // var tabla = numeros.map(function (numero) { //tabla = [0, 6, 12, ..., 60]
   //    return numero * 6;
   // })

   // return tabla;

   var tabla = [];

   for (var i = 0; i < 11; i++) {
      tabla.push(i * 6);
   }

   return tabla;
}

function mayorACien(array) {//array = [0, 3, ..., 200] --> [101, 106, ..., 200]
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var filtro = [];
   
   array.forEach(function (numero) {
      if (numero > 100) {
         filtro.push(numero);
      }
   })

   return filtro;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

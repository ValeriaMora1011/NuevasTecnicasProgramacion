//Concat

var numeros = [1, 2, 3, 4, 5];
var nuevoNumeros = numeros.concat([6, 7, 8, 9, 0]);

//console.log(numeros);
//console.log(nuevoNumeros);

//Join
//Join funciona en espacios entre elementos

var nombre = ["V", "a", "l", "e", "r", "i", "a"]
//console.log(nombre.join(""));
//console.log(numeros.join("-"));

//Slice
//console.log(nombre.slice(2));

//Index of

//console.log(nombre.indexOf("i"));

//Last index of

//console.log(nombre.lastIndexOf("a"));

//Reverse
//console.log(nombre.reverse());

//Sort
var numerosDesordenados = [5, 4, 7, 0, 2, 6, 1, 3, 9, 8]
//console.log(numerosDesordenados.sort());

//Shift

//console.log(numerosDesordenados.shift());

//Pop

//console.log(numerosDesordenados.pop());

//Push
numerosDesordenados.push(1012)
//console.log(numerosDesordenados);

//Map

var pares = [2, 4, 6, 8, 10]

//console.log(pares.map((elemento) => elemento +1));

//--------------------------------------------------------------------------------------------------------------------------

//Consultar funciones de arreglo 5

// 1.- INCLUDES
//Busca el elemento que se le asigna y devuelve un true o false si el elemento es o no encontrado

var numero = [1, 2, 3, 4, 5, 6];
//console.log(numero.includes(2));

// 2.- FILTER
//Crea un nuevo conjunto de datos con los elementos que cumplan con la condificion solicitada

//var resultado = numero.filter(numero1 => numero1 > 3);
//console.log(resultado);

//3.- REDUCE
//Acumula el valor de cada elemento del conjunto de datos para obtener un solo valor final

//var suma = numero.reduce((total, valor) => total + valor);
//console.log(suma);

//4.- SOME
//Verifica si un elemento del conjunto de datos cumple con la funcion realizada, de acuerdo a eso devuelve true o false

//var numeroLargo = numero.some(numero1 => numero1 > 4);
//console.log(numeroLargo);

//5.- EVERY
//Verifica si todos los elementos del conjunto de datos cumple con la funcion realizada, de acuerdo a eso devuelve true o false

//var numerosMayores = numero.every(numero1 => numero1 < 10);
//console.log(numerosMayores);


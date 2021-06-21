// Funciones declarativas

//retorno de valores
function saludar(){
    return "Hola soy Valeria"; //retorna un string
}
//funciones void
function saludar2() {
    console.log("Hola soy Ariana");
}

//funciones con parametros
function saludarConParametros(nombre, apellido) {
return `Hola soy ${nombre} ${apellido}`
}
//funciones con parametros por defecto
function saludarConProfesion(nombre, profesion="Artista"){
    retur `Hola ${nombre} mi profesion es ${profesion}`
}
//console.log(saludarConProfesion("Valeria", "Diseñadora"))

//console.log(saludarConParametros("Valeria", "Mora"));

//var resultado = saludar() //almacenamos para imprimir
//console.log(resultado); //imprimimos resultado
//console.log(saludar()); //segunda forma de imprimir

//Funciones expresivas - funciones anonimas

var saludoConEdad = function(nombre, edad){
    return `Hola soy ${nombre} y tengo ${edad} año(s)`
}
//console.log(saludoConEdad("Valeria", 30));

//Arrow functions - funciones flecha

var saludoConApellido = (nombre, apellido) => `Hola soy ${nombre} ${apellido}`

var suma = (num1, num2) => num1 + num2
//console.log(saludoConApellido("Ariana", "Mora"));
//console.log(suma(2, 3));

//Funciones como parametros de otras funciones

function saludoConFunciones(nombre, cb) {
return cb(nombre)
}

var miSaludo = saludoConFunciones("Valeria", function(nombre){
    return `Hola soy ${nombre}`
})

var miSaludo2 = saludoConFunciones("Ariana", (nombre) => `Hola soy ${nombre}`)
//console.log(miSaludo2);

//setTimeout(() => {
 //   console.log("Hola mundo");
//}, 3000);

//setInterval(() => {
  //  console.log("Hola mundo");
//}, 2000);
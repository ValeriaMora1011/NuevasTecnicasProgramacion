// While
//while (condition) {

//}

//for
// for (let index = 0; index < Array.length; index++) {
//     const element = array[index];
// }
// for in
var persona = {
    nombre: "Valeria",
    apellido: "Mora",
    viajes: ["",""]
}
for (const key in persona) {
    console.log(persona[key])
}
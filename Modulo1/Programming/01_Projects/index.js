const express = require('express');

// genera una aplicacion express
//Creacion del servidor
const app = express()

//EndPoint
app.get('/', (req, res) => {
    res.send("Hola mundo con ExpressJs")
})

//Levanta servidor
app.listen(3000, () => { //Da vida o levanta el servidor app.listen
    console.log("Servidor escuchando en http://localhost:3000");
})
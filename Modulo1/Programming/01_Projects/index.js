//Creacion del servidor
const express = require("express");      

const app = express();                                             //Genera una aplicacion express

const { RouterIndex } = require('./routes2/index');                 //Routes

app.use("/", RouterIndex);

app.listen(3000, () => {                                           //Levanta servidor
    console.log("Servidor escuchando en http://localhost:3000");
});
















/*const express = require("express");

// genera una aplicacion express
//Creacion del servidor
const app = express();

// Routes
const { RouterIndex } = require('./routes2/index');

app.use("/", RouterIndex);
// app.use("/user", RouterIndex);
// app.use("/user/data", RouterIndex);

/*
    "/" + "/" = "//" => "/"
    "/" + "/saludo" = "//saludo" => "/saludo" 
    "/" + "/saludo/:nombre" = "//saludo/:nombre" => "/saludo/:nombre"

    "/user" + "/" = "/user/"
    "/user" + "/saludo" = "/user/saludo"
    "/user/data" + "/saludo" = "/user/data/saludo"
*

//Levanta servidor
app.listen(3000, () => { //Da vida o levanta el servidor app.listen
    console.log("Servidor escuchando en http://localhost:3000");
}); */

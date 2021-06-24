const express = require('express');

// genera una aplicacion express
//Creacion del servidor
const app = express()

//EndPoint
app.get('/', (req, res) => {
    res.send("Hola mundo con ExpressJs")
});

app.get("/saludo", (req, res) => {
    //req.query
    //console.log(req.query);


    //Desestructuracion de objetos
    //Obtenemos la query del objeto request

    const { 
        query: { nombre, apellido },
     } = req;


    //Otra forma de obtener los datos
    // const nombre = req.query.nombre
    // const apellido = req.query.apellido


    //Ejemplo
    //--------------------
    // const user = {
    //     nombre "Val",
    //     apellido = "Mora"
    // }
    // user.nombre
    // user.apellido
    // req.query.nombre
    //---------------------

    res.json({
        saludo: `Hola soy ${query.nombre} ${query.apellido}`,
    });
});

app.get("/saludo/:nombre", (req, res) => {
    const { 
        params: { nombre },
    } = req; //Desestructamos nombre de params

    //const { params } = req;
    //res.json({
    //    nombre: params.nombre,
   //});

    //console.log(req.params);
    //const nombre = req.params.nombre

    res.json({
        nombre: nombre,
    });
});

//Levanta servidor
app.listen(3000, () => { //Da vida o levanta el servidor app.listen
    console.log("Servidor escuchando en http://localhost:3000");
});

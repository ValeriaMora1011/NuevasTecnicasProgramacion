
const { Router } = require("express");                          //Traemos el paquete 

const data = require("../data.json");                           //Traemos la data

const router = Router();                                        //Inicializamos Router

//Creacion de los EdPoint
router                                                          //Path adicional Mensaje inicial
    .get("/", (req, res) => {
        res.send("Recepción de request tipo GET");
    })                                                          //Primer Path servir los datos del archivo data.json
    .get("/users", (req, res) => {
        res.json({
            message: "Lista de usuarios",
            body: data

           // data: data.map((person) => { person.first_name = person.first_name.toUpperCase()})
        })
    })
    .get("/users/:query", (req, res) => {
        res.json({
            data: req.query.id ? data.filter((e) => e.id == req.query.id) : data
        })
        .get("/users/:params", (req, res) => {
            const { params } = req;
            res.json({
                apellido: params.email,
            });
        });
    });

module.exports.RouterIndex = router;                        // Exportamos las rutas

//Promesas

function promesa(bandera) {
    return new Promise((resolve, reject) => {
        if (bandera) {
        setTimeout(() => {
            resolve("Peticion resuelta");
        }, 3000);
    } else {
        setTimeout(() => {
            reject("La operacion fallo")
        }, 2000);
        }
    })
}

/*promesa(true)
    .then((resultado) => {
        console.log("Respuesta positiva", resultado)
    })
    .catch((error) => {
        console.log("Error", error);
    }) */

    // resolve con then
    // reject con catch

    var segundaPromesa = (bandera) => new Promise((resolve, reject) => {
        if (bandera) {
            setTimeout(() => {
                resolve("Peticion resuelta");
            }, 3000);
        } else {
            setTimeout(() => {
            reject("La operacion fallo")
        }, 2000);
        }
        })

        segundaPromesa(true)
            .then((respueta) => {
                console.log(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })

            promesa(true) //peticion de clientes
            .then((respueta) => { // respuesta de lista de clientes
                console.log(respuesta)
                return segundaPromesa(true) // Compras del cliente
            })
            .then(() => { //Respuesta de la segunda promesa
                console.log(respuesta);
            })
            .catch((error) => {
                console.log(error);
            })
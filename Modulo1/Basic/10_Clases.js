/*// Como se hacia antes

function Rectangulo(base, altura) {
    this.base = base
    this.altura = altura
}

Rectangulo.prototype.calcularArea = function () {
    return this.base * this.altura
}

var rectangulo = new Rectangulo(6, 3)

console.log(rectangulo.calcularArea())
console.log(rectangulo.base) */

/*// Declaracion de clases

class Rectangulo2 {
    constructor(base, altura) {
        this.base = base
        this.altura = altura
    }

    calcularArea() {
        return this.base * this.altura
    }
}

var retangulo2 = new Rectangulo2(6, 3)

console.log(rectangulo2.calcularArea()) */

//------------------------------------------------------------------------------------------------------------------------

// Clase Persona
// implementar getters, setter y realizar una implementacion
// implementar metodos estaticos - Clase Punto, Funcion distancia
// Construir clase Persona y estudiante, extender Estudiante con Persona>

/*
    DEBER
*/

class Persona {
    constructor(nombre, apellido, edad) {
        
public = getNombre() 
{
    return this.nombre;
}

	public void setNombre(nombre)
    {
    this.nombre = nombre;
}

public = getApellido() 
{
    return this.apellido;
}

	public void setApellido(apellido) 
    {
    this.apellido = apellido;
}

public = getEdad() 
{
    return this.edad;
}

	public void setEdad(edad) 
    {
    this.edad = edad;
}


    }
    
}

var persona = new Persona(Valeria, Mora, 30)

console.log(persona)
// Objetos utilizando destructores
const pez = {
    nombre: 'tiburon',
    edad: 120,
    raza: ['submarino', 'hibrido'],
    vivo: true
}

// Destructor
const {nombre, edad, raza, vivo} = pez
console.log(nombre)
console.log(edad)
console.log(raza[1])
console.log(vivo)
// invocar las propiedades en una sola declaracion
console.log(nombre, edad, raza[0], vivo)
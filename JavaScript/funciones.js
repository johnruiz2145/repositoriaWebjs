// funcion: basica
function sumar (num1, num2){
    console.log("la suma es = " + (num1 + num2))
}
sumar(10, 20)

// funciones: tipo flechita de ES6 la flecha remplaza la palabra function
const restar = (num1, num2) => {
    console.log("la resta es = " + (num1 - num2))
}
restar(5, 9)

// funcion flechita corta
const resta2 = (num1, num2) => {console.log("Resta funcion corta = "+(num1 - num2))}
resta2(8, 10)


// funcion flechita: con un parametro no necesita parentesis
const sumarDos = num1 => {
    console.log("Valor con un solo parametro = " +  num1)
}
sumarDos(4)


// funcion flechita: con retorno
const sumarTres = (num1, num2) =>{
    return 'La suma es  = ' + (num1 + num2)
}
const resultado = sumarTres(13, 4)
console.log(resultado)


//funcion flechita eliminado la palabra return
const sumarCuatro = (num1, num2) => ('la suma es = ' + (num1 + num2))
let resultado2 = sumarCuatro(5, 9)
console.log(resultado2)

//funcion flechita asigando un valor al parametro
const multiplicar = (num1 = 5) => ('LA multiplicacion es = ' + (num1 * 3))
const resultado3 = multiplicar()
console.log(resultado3)


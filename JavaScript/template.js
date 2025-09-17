// template alt+96 sacar comitas invertidas
let price = 10
let VAT = 0.25;
let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`
console.log(total)
document.getElementById("total").innerText=total;
// funcion flechita
const numero = (num) => {return 'el numero es :' + num}
const resultado = numero(10)
console.log(resultado)
// funcion flechita
const sumar = (num1, num2) => {return 'el numero es :' + (num1+num2)}
let resultado1 = sumar(10,20)
console.log(resultado1)
//reduccion con ES6
const sumar2 = (num1, num2) => ('el numero es :' + (num1+num2))
let resultado2 = sumar2(25,90)
console.log(resultado2)
//flecha reduccion return
const sumar3 = (num1=23) => ('el numero es :' + (num1+44))
let resultado3 = sumar3()
console.log(resultado3)
//template y funciones flechita
//const numeros4 = (num3, num6, num4, num5) =>{return `el numero es : ${(num3+num4)/(num5*num6)}`}
const numeros4 = (num3, num6, num4, num5) =>(`el numero es : ${(num3+num4)/(num5*num6)}`) // reducir codigo
const resultado5 = numeros4(2,9,4,89)
console.log(resultado5)

// Esperar a que el DOM esté completamente cargado antes de ejecutar el script
window.onload = () => {

    let resultado5 = dividir(23, 34, 36, 76);
    document.getElementById("resultado5").textContent = resultado5;

   
};

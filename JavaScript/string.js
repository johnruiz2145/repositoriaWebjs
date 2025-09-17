//template string
const numero = (num) =>{return 'el numero es: ' + num};
////template string
const numero1 = (num) =>{return `el numero es: ${num}`}
//const sumar
const sumar = (num1, num2)=>{return `la suma es: ${(num1+num2)}`}
//const sumar
const sumar2 = (num1, num2)=>{return `la suma es: ${(num1+num2)}`}
//template
const sumar4 = (num1 = 10) =>(`la suma es: ${(num1+80)}`)
// Definir la función dividir
const dividir = (num1, num2, num3, num4) => {return `El número es: ${(num1 + num2) / (num3 + num4)}`;};
// Esperar a que el DOM esté completamente cargado antes de ejecutar el script
window.onload = () => {

    let resultado5 = dividir(23, 34, 36, 76);
    document.getElementById("ejercicio5").textContent = resultado5;

    let resultado3 = sumar2(10,20);
    document.getElementById("ejercicio6").textContent = resultado3;

    let resultado4 = sumar4();
    document.getElementById("ejercicio7").textContent = resultado4;

    let price = 10;
    let VAT = 0.25;
    let total = `Total: ${(price * (1+VAT)).toFixed(2)}`;
    document.getElementById("ejercicio1").textContent = total;

    const resultado = numero(10);
    document.getElementById("ejercicio2").textContent = resultado;

    const resultado1 = numero(10);
    document.getElementById("ejercicio3").textContent = resultado1;

    let resultado2 = sumar(10,20);
    document.getElementById("ejercicio4").textContent = resultado2;
};

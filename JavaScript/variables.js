// variable primaria de js
var edad = 10
var edad = 20
console.log("Variable var = "+edad) // 20

//variable let mutable
let edad1 = 10
edad1 = 30
console.log("variable let mutable = "+edad1) // error

// variable const
const edad2 = 10
//const edad2 = 20
console.log("Variable const imutable = " + edad2) // 10

// estructura if con const
const edad3 = 10
    if(true){
        const edad3 = 20
        console.log("variable estructura if =" + edad3) // 20
    }

   

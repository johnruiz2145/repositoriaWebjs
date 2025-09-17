  
// Async Await - funcion promesa
const obtenerUsers = async()=>{
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users/')
      const data = await res.json()
      //Muestra todo el objeto
      //console.log(data)
      //Metodo Map
      //const arraynombres = data.map(user => user.name)
      //console.log(arraynombres)
      //Metodo filter
      //const arrayfilter = data.filter(user => user.name === 'Leanne Graham')
      //console.log(arrayfilter)
      //Metodo filter2
      //const arrayfilter2 = data.filter(user => user.name !== 'Leanne Graham')
      //console.log(arrayfilter2)
      


    } catch (error) {
        console.log(error)
    }
}
obtenerUsers()


 
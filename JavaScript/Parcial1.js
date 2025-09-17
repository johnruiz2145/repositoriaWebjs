// Async Await - funcion promesa
const obtenerrescountries = async()=>{
    try {
      const res = await fetch('https://restcountries.com/v3.1/all')
      const data = await res.json()
      console.log(data)
      //Metodo Map
      //const arraynombres = data.map(user => user.name)
      //console.log(arraynombres)
      //Metodo filter
      //const arrayfilter = data.filter(user => user.common === 'Equatorial Guinea')
      //console.log(arrayfilter)
      //Metodo filter2
      //const arrayfilter2 = data.filter(user => user.name !== 'Leanne Graham')
      //console.log(arrayfilter2)

    } catch (error) {
        console.log(error)
    }
}
obtenerrescountries()
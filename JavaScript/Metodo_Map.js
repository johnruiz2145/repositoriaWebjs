// metodo Map
const Obtenerpokemones  = async ()=>{
    try {
       const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
       const data = await res.json()
       //Metodo Map
       const arraynombres = data.results.map(poke => poke.name)
       console.log(arraynombres)
    } catch (error) {
       console.log(error) 
    }
}
Obtenerpokemones()
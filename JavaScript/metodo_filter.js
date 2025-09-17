//Metodo filter
const obtenerpokemones = async () =>{
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        //Metodo filter
        const arrayfilter = data.results.filter(poke => poke.name === 'bulbasaur')
        console.log(arrayfilter)
        //filter 2
        
    } catch (error) {
        console.log(error)
    }
}
obtenerpokemones()
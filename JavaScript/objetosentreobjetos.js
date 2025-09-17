// Objetos entre objetos (Padre e Hijos)
const web = {
    nombre: 'udi',
        //Obj2
        link: {
        enlace: 'www.udi.com'
    },
            //obj3
            redessociales:{
                //Obj4
                youtube:{
                    enlace: 'youtubr.com/udi',
                    nombre: 'UDI Sistemas'
                },
                //Obj5
                Facebook:{
                    enlace1: 'facebook.com/udi',
                    nombre1: 'udi facebook sistemas'
                }

    }
}
const enlaceUDI = web.redessociales.youtube.enlace
const enlaceUDI1 = web.redessociales.youtube.nombre
console.log(enlaceUDI)
console.log(enlaceUDI1)
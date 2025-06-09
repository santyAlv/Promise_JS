import {usuarios} from "./arrays.js"

function buscar() {
    return new Promise((resolve,reject)=>{
        if (usuarios==0) {
            reject(new Error('api no encontrada'));

        }
        setTimeout(() => {
            resolve(usuarios);
        }, 3000);

    })
}

console.log('buscando...');


buscar()

.then((Response)=>{
    console.clear()
    console.log("arrays encontrada",Response);
    
})

.catch((Error)=>{

    console.log("error", Error);
    
})

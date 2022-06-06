function verifica(numeros) {
    if(!numeros) return "Inexistente!";

    if(!numeros.length) return "Sem valores na lista";

    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] % 2 === 0){
            numeros[i] = 0;
        }
    }

    return numeros;
}

let numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

console.log(verifica(numeros));
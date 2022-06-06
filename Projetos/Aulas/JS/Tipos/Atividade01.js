// solução 1
function verifica(palavra) {
    if (!palavra) return "string inexistente";

    return palavra.split("").reverse().join("") === palavra;
}

console.log(verifica("ama"));

// solução 2
function verifica2(palavra) {
    if (!palavra) return "string inexistente";

    for(let i=0; i < palavra.length / 2; i++) {
        if(palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

console.log(verifica2("vaca"));
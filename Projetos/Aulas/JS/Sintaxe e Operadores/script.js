function comparaNumeros(num1, num2) {
    if(!num1 || !num2) {
        return 'Defina dois números!';
    } else {
        const primeiraFrase = criaPrimeiraFrase(num1, num2);
        const segundaFrase = criaSegundaFrase(num1, num2);

        return `${primeiraFrase} ${segundaFrase}`;
    }
}

function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2}${saoIguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    let frase;

    if(soma < 10) {
        frase = 'menor que 10 e menor que 20';
    } else if(soma > 10 && soma < 20) {
        frase = 'maior que 10 e menor que 20';
    } else {
        frase = 'maior que 10 e maior que 20';
    }

    return `Sua soma é ${soma}, que é ${frase}.`;
}

console.log(comparaNumeros(10, 10));
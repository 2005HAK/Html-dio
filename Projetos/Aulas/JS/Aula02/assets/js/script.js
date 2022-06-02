// Tipos primitivos

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number
var numero = 1;
console.log(typeof(numero));

// String 
var nome = "José";
console.log(typeof(nome));

// Como declarar
var variavel;
console.log(variavel);

// Let
let variavel2 = 4;
console.log(variavel2);

// Constante
const Constante = "alguem";
console.log(Constante);

// Global e Local
var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

escopoLocal();

// Atribuição
var atribuição = "algo";

// Comparação
var comparacao = '0' == 0;
console.log(comparacao);

// Comparação identica
var comparacaoIdentica ='0' === 0;
console.log(comparacaoIdentica);

// Adição
var adicao = 1 + 1;
console.log(adicao);

// Subtracao
var subtracao = 3 - 1;
console.log(subtracao);

// Multiplicação
var multiplicacao = 5 * 8;
console.log(multiplicacao);

// Divisão real
var divisao = 9 / 3;
console.log(divisao);

// Divisão Inteira
var divisaoInteira = 5 % 2;
console.log(divisaoInteira);

// Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

// Maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

// Menor que
var menorQue = 5 < 10;
console.log(menorQue);

// Maior ou igual
var maiorOuIgual = 5 >= 6;
console.log(maiorOuIgual);

// Menor ou igual
var menorOuIgual = 5 <= 6;
console.log(menorOuIgual);

// Operadores logicos

var e = true && false;
console.log(e);

var ou = true || false;
console.log(ou);

var nao = !true;
console.log(nao);
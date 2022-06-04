// tipos de função

// declarativas
function funcao() {
    console.log("Função declarativa");
}

funcao();

// expressão de função

// com nomeação
var algo = function funcao2() {
    console.log("Com nomeação");
}

algo();

// sem nomeação
var funcao3 = function() {
    console.log("Sem nomeação");
}

funcao3();

// arrow function
var funcao4 = () => {
    console.log("arrow function");
}

funcao4();
let nome = "João";
let sobrenome = "Pedro";
let concatenado = nome.concat(sobrenome);
let exemplo = new String("nãosei");

console.log(nome);

console.log(nome.concat(sobrenome));

console.log(typeof(concatenado));

console.log(concatenado.length);

console.log(typeof(exemplo));

console.log(exemplo);

console.log(exemplo.length);

console.log(nome[1]);

concatenado = nome + " " + sobrenome;

console.log(concatenado);

concatenado = nome + "\n" + sobrenome;

console.log(concatenado);

concatenado = `${nome} ${sobrenome}`;

console.log(concatenado);

concatenado = nome + "\"" + sobrenome;

console.log(concatenado);

let frase = "Olá, tudo bem?";

console.log(frase.split(""));

console.log(frase.split(" "));

console.log(frase.includes("tudo"));

console.log(frase.startsWith("O"));

console.log(frase.startsWith("R"));

console.log(frase.endsWith("?"));

console.log(frase.replace(",", "!"));

let stringModificada = frase.replace(",", "!");

console.log(stringModificada);
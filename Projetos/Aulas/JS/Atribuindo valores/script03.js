/*
const FIRST_NAME = "Stephany";
                                    // Não pode redeclarar uma constante!
const FIRST_NAME = "Julia";
*/

/*
FIRST_NAME = "Stephany";

console.log(FIRST_NAME); // Não faz hoisting

const FIRST_NAME;
*/

const FIRST_NAME = "João";

console.log(FIRST_NAME); // Deve ser feita a declaração primeiro

/*
if (FIRST_NAME = "João") {
    const LAST_NAME = "Ferraz";
}                                   // constantes tem escopo de bloco assim como as let

console.log(FIRST_NAME, LAST_NAME);
*/
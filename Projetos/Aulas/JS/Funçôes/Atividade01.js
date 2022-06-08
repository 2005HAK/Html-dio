const alunos = [
    {
        nome: "Juquinha",
        nota: 6,
        turma: "2C"
    },
    {
        nome: "Julia",
        nota: 10,
        turma: "3B"
    },
    {
        nome: "João",
        nota: 8,
        turma: "1C"
    },
    {
        nome: "Ana",
        nota: 7,
        turma: "3C"
    },
    {
        nome: "Lucas",
        nota: 3,
        turma: "2C"
    }
]

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 6));
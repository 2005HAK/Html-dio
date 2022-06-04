function calculadora() {
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"));

    if (!operacao || operacao >= 7) {
        alert("Erro - Operação inválida!");
        calculadora();
    } else {
        let n1 = Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resul;

        if (!n1 || !n2) {
            alert("Erro - Operação inválida!");
            calculadora();
        } else {
            function soma() {
                resul = n1 + n2;
                alert(`${n1} + ${n2} = ${resul}`);
                novaOperacao();
            }

            function subtracao() {
                resul = n1 - n2;
                alert(`${n1} - ${n2} = ${resul}`);
                novaOperacao();
            }

            function multiplicacao() {
                resul = n1 * n2;
                alert(`${n1} x ${n2} = ${resul}`);
                novaOperacao();
            }

            function divisaoReal() {
                resul = n1 / n2;
                alert(`${n1} / ${n2} = ${resul}`);
                novaOperacao();
            }

            function divisaoInteira() {
                resul = n1 % n2;
                alert(`O resto da divisão de ${n1} e ${n2} é igual a ${resul}`);
                novaOperacao();
            }

            function potenciacao() {
                resul = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resul}`);
                novaOperacao();
            }

            function novaOperacao() {
                let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert("Até mais!");
                } else {
                    alert("Digite uma opção válida!");
                    novaOperacao();
                }
            }

            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}

calculadora();
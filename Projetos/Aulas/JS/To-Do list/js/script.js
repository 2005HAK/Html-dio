const dado = document.getElementById("entradaDados");
const erro = document.getElementById("error");


function adicionar() {

    if (dado["value"] == '') {

        erro.style.visibility = "visible";
        erro.style.color = "red";

    } else {

        erro.style.visibility = "hidden";
        let divAtual = document.getElementById("checkbox");
        let interna = document.createElement("div");
        interna.className = "itens";
        let entrada = document.createElement("input");
        let texto = document.createElement("p");
        entrada.type = "checkbox";

        texto.innerText = dado["value"];
        interna.appendChild(entrada);
        interna.appendChild(texto);
        divAtual.appendChild(interna);

        dado["value"] = "";
    }

}
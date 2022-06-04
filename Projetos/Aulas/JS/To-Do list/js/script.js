

function adicionar() {
    var divAtual = document.getElementById("checkbox");
    var divNova = document.createElement("div");
    var checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    let conteudo = document.getElementById("entradaDados");
    checkbox.textContent = conteudo;
    divNova.appendChild(checkbox);


    document.body.insertBefore(divNova, divAtual);
}
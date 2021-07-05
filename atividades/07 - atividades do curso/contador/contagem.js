function contar() {
    inicio = Number(document.getElementById("inicio").value);
    fim = Number(document.getElementById("fim").value);
    passo = Number(document.getElementById("passo").value);
    resultado = document.getElementById("input"); // id em que será imprimido a contagem.
    resultado.innerHTML = "";

    /* Caso algum dos input estejam com um valor inválido, será automaticamente atribuido um valor para substituir o valor inválido, exemplo: se inicio = 0 recebe 1, se fim = 0 recebe 2 e se passo = 0 recebe 1. */
    if (inicio <= 0) {
        alert("⚠ Erro: Você precisa colocar um valor maior que 0 no início para ser válido, iremos considerar 1");
        inicio = 1;

        if (fim <= 0) {
            alert("⚠ Erro: Você precisa colocar um valor maior que 0 no fim para ser válido, iremos considerar 2");
            fim = 2;
        } else if (passo <= 0) {
            alert("⚠ Erro: Você precisa colocar um valor maior que 0 no passo para ser válido, iremos considerar 1");
            passo = 1;
        }
        contagem(); // function responsável por realizar a contagem progressiva ou regressiva, usando  as variáveis -> inicio, fim e passo.

    } else if (fim <= 0) {
        alert("⚠ Erro: Você precisa colocar um valor maior que 0 no fim para ser válido, iremos considerar 2");
        fim = 2;

        if (inicio <= 0) {
            alert("⚠ Erro: Você precisa colocar um valor maior que 0 no início para ser válido, iremos considerar 1");
            inicio = 1;
        } else if (passo <= 0) {
            alert("⚠ Erro: Você precisa colocar um valor maior que 0 no passo para ser válido, iremos considerar 1");
            passo = 1;
        }
        contagem(); // function responsável por realizar a contagem progressiva ou regressiva, usando  as variáveis -> inicio, fim e passo.

    } else if (passo <= 0) {
        alert("⚠ Erro: Você precisa colocar um valor maior que 0 no passo para ser válido, iremos considerar 1");
        passo = 1;
        contagem(); // function responsável por realizar a contagem progressiva ou regressiva, usando  as variáveis -> inicio, fim e passo.

    } else if (inicio == fim) { // caso o inicio e fim sejam iguais, não terá como fazer uma contagem.
        p = document.createElement("span");
        p.innerHTML = ` &#X1F635 Os valores do inicio e fim precisam ser diferentes !`;
        resultado.appendChild(p);
    } else if (inicio >= 1 && fim >= 1 && passo >= 1) {
        contagem(); // function responsável por realizar a contagem progressiva ou regressiva, usando  as variáveis -> inicio, fim e passo.

    }
}

function contagem() {

    if (inicio < fim) { // caso o valor inicial for menor que o fim, irá sempre acrescentar um novo span acrescentando +1 na variável c.

        for (c = inicio; c <= fim; c += passo) {
            p = document.createElement("span");
            p.innerHTML = ` ${c} &#X1F449`
            resultado.appendChild(p);

        }
        a = document.createElement("span");
        a.innerHTML = "✔";
        resultado.appendChild(a);

    } else if (inicio > fim) { // caso o valor inicial for maior que o fim, será retirada -1 da variável c até terminar a contagem. 

        for (c = inicio; c >= fim; c -= passo) { // sempre que um novo ciclo se iniciar será criado um novo span com um valor novo para realizar a contagem.
            p = document.createElement("span");
            p.innerHTML = ` ${c} &#X1F449`
            resultado.appendChild(p);

        }
        a = document.createElement("span");
        a.innerHTML = " ✔ ";
        resultado.appendChild(a);
    }
}
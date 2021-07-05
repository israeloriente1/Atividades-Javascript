function converter() {
    saldo = Number(document.getElementById("saldo").value);
    pais = document.getElementsByName("pais"); /* Existem 4 radios, sendo [0] = TODOS, [1] = Estados Unidos, [2] = Canada e [3] = China */
    resultado = document.getElementById("resultado"); // id que receberá o resultado da function result().
    valor_converter = 0; // irá receber o valor da moeda 
    pais_moeda(); // function responsável por verificar qual radio foi selecionada, e agregar o valor da moeda dentro da variável valor_converter e agregar o nome da moeda dentro da variável pais.
    saldo_novo = saldo / valor_converter;
    result(); // function responsável por imprimir o resultado dentro do id resultado já com o valor formatado para a moeda do pais selecionado, que está dentro da variável pais_moeda.
}

function pais_moeda (){

    if (pais[0].checked) { 
        // caso queira a conversão de todas as moedas, será criado 3 variáveis que será utilizada na function result()
        pais = "TODOS";
        americana = saldo / 5.06;
        canadense = saldo / 4.12;
        chinesa = saldo / 7.09;

    }else if (pais[1].checked) {
        pais = "USD";
        valor_converter = 5.06;

    }else if (pais[2].checked) {
        pais = "CAD";
        valor_converter = 4.12;

    }else if (pais[3].checked) {
        pais = "GBP"
        valor_converter = 7.07;
    }
}

function result() {
    if (pais == "TODOS") { // utilizará as 3 variáveis criadas na function pais_moeda para converter o saldo.
        resultado.innerHTML = `
            <h2>${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} convertido para outras moedas</h2>
            <p> <strong>Estados Unidos</strong>: ${americana.toLocaleString("pt-BR", {style: "currency", currency: "USD"})} </p>
            <p> <strong>Canadá</strong>: ${canadense.toLocaleString("pt-BR", {style: "currency", currency: "CAD"})}</p>
            <p> <strong>Reino Unido</strong>: ${chinesa.toLocaleString("pt-BR", {style: "currency", currency: "GBP"})}</p>`;

    }else if (pais == "USD") {
        resultado.innerHTML = `
            <h2>${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} </h2>
            <p> Valor convertida para a moeda dos <strong>Estados Unidos</strong>: ${saldo_novo.toLocaleString("pt-BR", {style: "currency", currency: "USD"})} </p>`;

    }else if (pais == "CAD") {
        resultado.innerHTML = `
            <h2>${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} </h2>
            <p> Valor convertida para a moeda do <strong>Canadá</strong>: ${saldo_novo.toLocaleString("pt-BR", {style: "currency", currency: "CAD"})} </p>`;

    }else if (pais == "GBP") {
        resultado.innerHTML = `
            <h2>${saldo.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} </h2>
            <p> Valor convertida para a moeda do <strong>Reino Unido</strong>: ${saldo_novo.toLocaleString("pt-BR", {style: "currency", currency: "GBP"})} </p>`;

    }else {
        prompt("Error: algo deu errado, por favor tente novamente !");

    }
}
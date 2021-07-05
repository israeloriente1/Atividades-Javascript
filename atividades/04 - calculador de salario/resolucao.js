function next_1() {
    nome = String(document.getElementById("nome").value);
    apelido = String(document.querySelector("input#apelido").value);
    resultado = document.querySelector("div#calculo"); // id que em que será imprimido o resultado sempre que umas das funções forem chamadas.
    resultado.innerHTML = `
        <h2>Olá ${apelido}, insira os dado sobre o seu trabalho </h2>
        <p>Sálario por hora: R$<input type="number" name="salario" id="salario" min="1" max="1000"></p>
        <p>Horas de trabalho por dia: <input type="number" name="horas" id="horas" min="1" max="15">Horas</p>
        <input type="button" value="Avançar" class="botao" onclick="next_2()">`; // id resultado, irá receber o input para receber os valores de, salario na variável salario e horas de trabalho na variável horas, logo em seguinta a função next_2 será chamada e ira calcular e imprimir novamente o resultado nesse mesmo id.
}

function next_2() {
    salario = Number(document.querySelector("input#salario").value);
    horas = Number(document.querySelector("input#horas").value);
    dia = salario.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    semana = (salario * 7).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    mes = (salario * 30).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    ano = (salario * 365).toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
    
    resultado.innerHTML = `
        <h2>Resultado</h2>
        <h3>De acordo com os dados informados, você tem os seguintes valores</h3>
        <h4>Funcionário: ${nome} </h4>
        <h4>Por dia: ${dia} </h4>
        <h4>Por semana: ${semana} </h4>
        <h4>Por mês: ${mes} </h4>
        <h4>Por ano: ${ano} </h4>
        <a href="index.html" class="botao" target="_self" rel="prev">Consultar Novamente</a>`; // id resultado, irá receber o retorno com os valores já formatados dentro de cada variável.
}
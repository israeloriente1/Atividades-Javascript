function calcular() {
    dia = Number(document.getElementById("dia").value);
    dia_atual = new Date().getDate();
    mes = Number(document.getElementById("mes").value);
    mes_atual = new Date().getMonth() + 1;
    ano = Number(document.getElementById("ano").value);
    ano_atual = new Date().getFullYear();
    resultado = document.getElementById("resultado");

    if (ano > ano_atual) {
        alert("Error: o ano informado está inválido !")

    }else if (mes > 12 || mes < 1) {
        alert("Error: o mês informado está inválido !")

    }else if (dia > 31 || dia  < 1) {
        alert("Error: o dia informado está inválido !");
    }else if (mes_atual > mes || mes_atual >= mes && dia_atual >= dia) {
        idade = ano_atual - ano;
        resultado.innerHTML = `
        <h2> Resultado </h2>
        <p> De acordo com os dados informados, você está com ${idade} ${idade > 1 ? "anos": "ano"} </p>`;
    }else {
        idade = (ano_atual - ano) - 1;
        resultado.innerHTML = `
        <h2> Resultado </h2>
        <p> De acordo com os dados informados, você está com ${idade} ${idade > 1 ? "anos": "ano"} </p>`;
    }
}
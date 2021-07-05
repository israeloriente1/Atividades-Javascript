tabela = document.getElementById("valores"); // irá receber a tabela com todos os valores dentro do vetor -> valores
resultado = document.getElementById("resultado"); // receberá o resultado final com base nos valores adicionados
valores = [] // Receberá os valores que forem sendo adicionados a cada chamada da function adicionar(), esse mesmo vetor será usado para a leitura dos valores dentro dele quando for chamado pela a function finalizar().
repetido = false; // Será usado como uma chave para verificar se o valor que o usuário esta adicionando já foi adicionado anteriormente, caso já tenha sido adicionado repetido = true caso não repetido = false.

function adicionar() {
    add2 = document.getElementById("valor");
    add = Number(add2.value); // valor que estará sendo adicionado pelo o usuário
    resultado.innerHTML = ""; // irá limpar o último resultado imprimido
    
    if (add < 1 || add > 100) { // caso o input em que o usuário digite o valor que será adicionado esteja vazio, seja maior que 100 ou menor que 1

        if (add > 100 || add < 1) {
            alert("⚠ Erro: Os valores precisam estar entre 1 e 100 !");
        }else {
            alert("⚠ Error: Algo deu errado, por favor tente novamente !");
        }

    }else {
        repetido = (valores.indexOf(add) == -1 ? false : true); // irá verificar se o valor que o usuário quer adicionar já foi adicionado, caso dê -1 = significa que ainda não foi adicionado.
    
        if (repetido == true) { // Caso o valor analisado anteriormente já tenha sido digitado, não será adicionado
            alert(`⚠ Error: O valor ${add} já foi adicionado, Digite outro valor !`);
            repetido = false;
            
        }else {

            tabela.innerHTML = ""; // irá limpar o total de valores adicionados.
            valores.push(add); // O valor digitado será adicionado dentro do vetor valores.    
            tabela.innerHTML = `
                <fieldset id="dados">
                    <legend>Valores adicionados</legend>
                </fieldset>`; // será criado um fieldset que irá receber todos os valores já adicionados dentro do vetor -> valores

            fieldset = document.getElementById("dados"); // receberá todos os valores que estiver dentro do vetor -> valores, ou seja, quando um novo valor for adicionado o script irá refazer o fieldset e adicionar novamente todos os valores que estiver dentro do vetor -> valores para dentro do fieldset.
    
            for (let a in valores) { // Irá ler o total de posições preenchidos dentro do vetor valores e irá imprimir cada valor dentro da variável fieldset.
                p = document.createElement("span");
                p.innerHTML = `${valores[a]} Adicionado <br>`;
                fieldset.appendChild(p);
            }

            add2.value = ""; // irá limpar o valor de que o usuário digitou dentro do input e focar novamente no mesmo bloco, para o usuário digitar o próximo valor
            add2.focus();  
        }
    }
}

function finalizar() {
    total_cadastrados = valores.length; // total de valores cadastrados
    maior_valor = 0; // irá receber o maior valor cadastrado
    menor_valor = valores[0]; // irá receber o menor valor cadastrado
    soma = 0; // irá receber a soma entre todos os valores dentro do vetor -> valores
    media = 0; // irá receber a média entre os valores dentro do vetor -> valores
    resultado.innerHTML = ""; // irá limpar o último resultado imprimido

    if (total_cadastrados == 0) { // caso nenhum valor tenha sido adicionado
        alert("⚠ Erro: É preciso adicionar valores para finalização !");

    }else {
        for (let a in valores) {
            maior_valor = (valores[a] > maior_valor ? valores[a] : maior_valor); // irá receber o maior valor que estiver dentro do vetor -> valores
            menor_valor = (valores[a] < menor_valor ? valores[a] : menor_valor); // irá receber o menor valore que estiver dentro do vetor -> valores
            soma += valores[a]; // irá receber a soma de todos os valores adicionados
        }
        media = soma / total_cadastrados; // irá dividir o valor da soma pelo o total de valores cadastrados.
        resultado.innerHTML = `
            <h2>Resultado</h2>
            <p><strong>Total de valores adicionados</strong>: ${total_cadastrados}</p>
            <p><strong>Maior valor informado</strong>: ${maior_valor}</p>
            <p><strong>Menor valor informado</strong>: ${menor_valor}</p>
            <p><strong>Soma de todos os valores</strong>: ${soma}</p>
            <p><strong>Média entre os valores digitados</strong>: ${Number.parseInt(media)}</p>`;
    }
}
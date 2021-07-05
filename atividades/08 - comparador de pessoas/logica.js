function dados() {
    cadastros = document.getElementById("cadastros");
    titulo = document.querySelector("h2#titulo");
    botao = document.querySelector("div#botao"); 
    total_pessoas = Number(document.getElementById("totalpessoas").value); // recebera o total de pessoas que serão cadastras, e essa mesma variável será utilizadas na function coletar_dados()

    if (total_pessoas > 1) { // precisa de pelo o menos 2 pessoas para realizar o cadastro e comparação
        cadastros.innerHTML = "";
        titulo.innerHTML = "Por favor, preencha os seguintes dados"
        for (let a = 0; a < total_pessoas; a++) { // bloco responsável por inserir os input dentro do id = cadastros
            cadastros.innerHTML += `
                <p>
                <strong>${a+1}</strong>° | <strong>Nome</strong>: <input type="text" name="nome" id="nome${a}">
                        <strong>Idade</strong>: <input type="number" name="idade" id="idade${a}" min="1" max="140">
                        <strong>Sexo</strong>: <input type="radio" name="sexo${a}" id="sexo${a}" checked>
                                <label for="sexo${a}">Masculino</label>
                                <input type="radio" name="sexo${a}" id="sexo${a}"
                                <label for="sexo${a}">Feminino</label>
                        </p>`;
        }
        botao.innerHTML = `<input type="button" value="Consultar" class="botao" onclick="coletar_dados()"> `; // assim que todos os dados forem preenchidos e o botão for apertado novamente, será chamado a function coletar_dados() que irá coletar os dados preenchidos e irá imprimir o resultado dentro da variável cadastros
    }else {
        window.alert("⚠ O valor mínimo para realizar o cadastro é de 2 pessoas ⚠")
    }

}

function coletar_dados() {
    nome = []; // recebera o nome do input nome na devida posição
    idade = []; // recebera o idade do input nome na devida posição
    sexo = []; // recebera o sexo do input nome na devida posição
    maior_idade = Number(document.getElementById("idade1").value); // recebera a idade da pessoa mais velha
    maior_idadenome = ""; // recebera o nome da pessoa mais velha
    mulher_menoridade = 999; // recebera a idade da mulher mais jovem
    mulher_menoridadenome = "" // recebera o nome da mulher mais jovem
    mulher_dezoito = 0; // quantidade de mulheres com menos de 18 anos
    media_idade = 0; // media de idade de todas as idades cadastradas
    homem_trinta = 0; // quantidade de homens com mais de 30 anos
    error = 0; // irá receber a quantidade de input que não foram preenchidos
    
    for (let a = 0; a < total_pessoas; a++) { // irá verificar se algum dos input não foram preenchidos, caso não tenha sido não será realizado a continuação do algoritmo até tudo estiver preenchido

        if (document.getElementsByName("nome")[a].value.length == "" || document.getElementsByName("idade")[a].value.length == 0) {
            error++;
        }
    }

    if (error == 0) { // caso a variável error = 0 significa que tudo foi preenchido normalmente

        for (var a = 0; a < total_pessoas; a++) { // irá pegar os valores dentro dos input = nome, idade e sexo e irá guardar dentro de cada vetor nas posições conforme foi gerada, ex: nome1 = vetor nome[1], idade2 = vetor idade[2] ...

            nome.push(String(document.getElementsByName("nome")[a].value));
            idade.push(Number(document.getElementsByName("idade")[a].value));
            sexo.push(String(document.getElementsByName(`sexo${a}`)[0].checked ? "masculino" : "feminino"));
    
            media_idade += idade[a]; // irá juntar a idade de todos para depois realizar o calculo da media do total
    
            if (idade[a] > maior_idade) { // caso a idade em que estiver sendo verificada for maior que as anteriores então será guardada dentro das seguintes variáveis: maior_idade <- idade e maior_idadenome <- nome
                maior_idade = idade[a];
                maior_idadenome = nome[a];
            }
            
            if (sexo[a] == "masculino") {                
                if (idade[a] > 30) { // caso a idade que esteja sendo verificado tenha mais de 30 anos, será contabilizado +1 na variável abaixo
                    homem_trinta++;
                }

            }else if (sexo[a] == "feminino") {   
                 
                if (idade[a] < 18) { // caso a idade que esteja sendo verificado tenha menos de 18 anos, será contabilizado +1 na variável abaixo
                    mulher_dezoito++;
                }
    
                if (idade[a] < mulher_menoridade) { // caso a idade em que estiver sendo verificada for menor que as anteriores então será guardada dentro das seguintes variáveis: mulher_menoridade <- idade e mulher_menoridadenome <- nome
                    mulher_menoridade = idade[a];
                    mulher_menoridadenome = nome[a];
                }
            }        
        }

        if (mulher_menoridade == 999) { // por padrão a variável mulher_menoridade já vai estar com o valor 999, ou seja, se nenhuma mulher for cadastrada a variável continuará com os 999, o que no caso será atribuido o valor 0 dentro da variável mulher_menoridade já que nenhuma idade de mulher foi cadastrada.
            mulher_menoridade = 0;
        }

        media_idade /= a - 1; // irá dividir o valor de media_idade pela a quantidade de pessoas cadastradas que está dentro da variável (a) - 1, já que no for sempre acrescenta um valor a mais quando para de fazer o loop.
        titulo.innerText = "Resultado"
        cadastros.innerHTML = `
                <p><strong>Maior idade cadastrada</strong>: ${maior_idadenome} de ${maior_idade} anos </p>
                <p><strong>Mulher mais jovem</strong>: ${mulher_menoridade == 0 ? `Nenhuma` : `${mulher_menoridadenome} de ${mulher_menoridade} ${mulher_menoridade > 1 ? "anos" : "ano"}`} </p>
                <p><strong>Media de idade do grupo</strong>: ${Number.parseInt(media_idade)} anos </p>
                <p><strong>Total de homens com mais de 30 anos</strong>: ${homem_trinta > 0 ? homem_trinta : "Nenhum"} </p>
                <p><strong>Total de mulheres com menos de 18 anos</strong>: ${mulher_dezoito > 0 ? mulher_dezoito : "Nenhuma"} </p>`;
        botao.innerHTML = `<a href="index.html" target="_self" rel="prev" class="botao">Consultar novamente</a>`;

    }else { // caso algum campo não tenha sido preenchido
        window.alert("⚠ Por favor, preencha todos os campos antes de prosseguir ⚠");
    } 

}
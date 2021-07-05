function dados() {
    cadastros = document.getElementById("cadastros");
    titulo = document.querySelector("h2#titulo");
    botao = document.querySelector("div#botao"); 
    totalPessoas = Number(document.getElementById("totalpessoas").value); // recebera o total de pessoas que serão cadastras, e essa mesma variável será utilizadas na function coletar_dados()

    if (totalPessoas > 1) { // precisa de pelo o menos 2 pessoas para realizar o cadastro e comparação
        cadastros.innerHTML = "";
        titulo.innerHTML = "Por favor, preencha os seguintes dados"
        for (let a = 0; a < totalPessoas; a++) { // bloco responsável por inserir os input dentro do id = cadastros
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
    maiorIdade = Number(document.getElementById("idade1").value); // recebera a idade da pessoa mais velha
    maiorIdadenome = ""; // recebera o nome da pessoa mais velha
    mulherMenoridade = 999; // recebera a idade da mulher mais jovem
    mulherMenoridadenome = "" // recebera o nome da mulher mais jovem
    mulherDezoito = 0; // quantidade de mulheres com menos de 18 anos
    mediaIdade = 0; // media de idade de todas as idades cadastradas
    homemTrinta = 0; // quantidade de homens com mais de 30 anos
    error = 0; // irá receber a quantidade de input que não foram preenchidos
    
    for (let a = 0; a < totalPessoas; a++) { // irá verificar se algum dos input não foram preenchidos, caso não tenha sido não será realizado a continuação do algoritmo até tudo estiver preenchido

        if (document.getElementsByName("nome")[a].value.length == "" || document.getElementsByName("idade")[a].value.length == 0) {
            error++;
        }
    }

    if (error == 0) { // caso a variável error = 0 significa que tudo foi preenchido normalmente

        for (var a = 0; a < totalPessoas; a++) { // irá pegar os valores dentro dos input = nome, idade e sexo e irá guardar dentro de cada vetor nas posições conforme foi gerada, ex: nome1 = vetor nome[1], idade2 = vetor idade[2] ...

            nome.push(String(document.getElementsByName("nome")[a].value));
            idade.push(Number(document.getElementsByName("idade")[a].value));
            sexo.push(String(document.getElementsByName(`sexo${a}`)[0].checked ? "masculino" : "feminino"));
    
            mediaIdade += idade[a]; // irá juntar a idade de todos para depois realizar o calculo da media do total
    
            if (idade[a] > maiorIdade) { // caso a idade em que estiver sendo verificada for maior que as anteriores então será guardada dentro das seguintes variáveis: maiorIdade <- idade e maiorIdadenome <- nome
                maiorIdade = idade[a];
                maiorIdadenome = nome[a];
            }
            
            if (sexo[a] == "masculino") {                
                if (idade[a] > 30) { // caso a idade que esteja sendo verificado tenha mais de 30 anos, será contabilizado +1 na variável abaixo
                    homemTrinta++;
                }

            }else if (sexo[a] == "feminino") {   
                 
                if (idade[a] < 18) { // caso a idade que esteja sendo verificado tenha menos de 18 anos, será contabilizado +1 na variável abaixo
                    mulherDezoito++;
                }
    
                if (idade[a] < mulherMenoridade) { // caso a idade em que estiver sendo verificada for menor que as anteriores então será guardada dentro das seguintes variáveis: mulherMenoridade <- idade e mulherMenoridadenome <- nome
                    mulherMenoridade = idade[a];
                    mulherMenoridadenome = nome[a];
                }
            }        
        }

        if (mulherMenoridade == 999) { // por padrão a variável mulherMenoridade já vai estar com o valor 999, ou seja, se nenhuma mulher for cadastrada a variável continuará com os 999, o que no caso será atribuido o valor 0 dentro da variável mulherMenoridade já que nenhuma idade de mulher foi cadastrada.
            mulherMenoridade = 0;
        }

        mediaIdade /= a - 1; // irá dividir o valor de mediaIdade pela a quantidade de pessoas cadastradas que está dentro da variável (a) - 1, já que no for sempre acrescenta um valor a mais quando para de fazer o loop.
        titulo.innerText = "Resultado"
        cadastros.innerHTML = `
                <p><strong>Maior idade cadastrada</strong>: ${maiorIdadenome} de ${maiorIdade} anos </p>
                <p><strong>Mulher mais jovem</strong>: ${mulherMenoridade == 0 ? `Nenhuma` : `${mulherMenoridadenome} de ${mulherMenoridade} ${mulherMenoridade > 1 ? "anos" : "ano"}`} </p>
                <p><strong>Media de idade do grupo</strong>: ${Number.parseInt(mediaIdade)} anos </p>
                <p><strong>Total de homens com mais de 30 anos</strong>: ${homemTrinta > 0 ? homemTrinta : "Nenhum"} </p>
                <p><strong>Total de mulheres com menos de 18 anos</strong>: ${mulherDezoito > 0 ? mulherDezoito : "Nenhuma"} </p>`;
        botao.innerHTML = `<a href="index.html" target="_self" rel="prev" class="botao">Consultar novamente</a>`;

    }else { // caso algum campo não tenha sido preenchido
        window.alert("⚠ Por favor, preencha todos os campos antes de prosseguir ⚠");
    } 

}
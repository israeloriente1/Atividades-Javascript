function verificador() {
    ano_nascimento = document.getElementById("ano");
    idade = new Date().getFullYear() - (Number(ano_nascimento.value));
    sexo = document.getElementsByName("sexo")[0].checked ? "masculino" : "feminino";
    resultado = document.getElementById("resultado"); // div que será alterado após a conclusão da verificação.

    /* Abaixo será realizado a verificação da idade, e imprimir o resultado e imagem, de acordo com a idade que foi informado */

    if (ano_nascimento.value.length < 4 || ano_nascimento.value > new Date().getFullYear()){ // caso o ano informado esteja inválido ou no formato incorreto.

        if (ano_nascimento.value.length < 4){
            alert("Error: ⚠ Por favor insira o ano de nascimento no seguinte formato: 2003, 2004, 2005 ...");
        }else {
            alert("Error: ⚠ Por favor insira um ano de nascimento válido.");
        }

    }else if (sexo == "masculino") {
        // sexo masculino
        img = document.createElement("img"); // irá criar a tag img que será usado dentro do id resultado

        if(idade > 0 && idade < 6) { // bebê
            resultado.innerHTML = `<p>Foi detectado um bebê com ${idade} ${(idade > 1)?"anos":"ano"}</p>`;
            img.setAttribute("src", "imagens/menino-bebe.png");

        }else if (idade >= 6 && idade < 14) { // criança
            resultado.innerHTML = `<p>Foi detectado uma criança com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menino-crianca.png");

        }else if (idade >= 14 && idade < 28) { // jovem
            resultado.innerHTML = `<p>Foi detectado um jovem com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menino-jovem.png");

        }else if (idade >= 28 && idade < 59) { // adulto
            resultado.innerHTML = `<p>Foi detectado um adulto com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menino-adulto.png");

        }else if (idade >= 29 && idade < 120) { // idoso
            resultado.innerHTML = `<p>Foi detectado um idoso com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menino-velho.png");

        }else {
            alert("Error: ⚠ Essa idade não conrresponde com a realidade.");
        }

        resultado.style.textAlign = "center"; // centraliza a imagem
        resultado.style.fontWeight = "500";
        resultado.appendChild(img); // O id resultado irá receber a imagem conforme foi programado aparecer de acordo com a idade.
        resultado.setAttribute("class", "texto"); // irá centralizar todos os parágrafos usando a class texto, que foi configurada no style.css

    }else if (sexo == "feminino"){
        // sexo feminino
        img = document.createElement("img"); // irá criar a tag img dentro do id resultado
        
        if(idade > 0 && idade < 6) { // bebê
            resultado.innerHTML = `<p>Foi detectado um bebê com ${idade} ${(idade > 1)?"anos":"ano"}</p>`;
            img.setAttribute("src", "imagens/menina-bebe.png");
            
        }else if (idade >= 6 && idade < 14) { // criança
            resultado.innerHTML = `<p>Foi detectado uma criança com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menina-crianca.png");
            
        }else if (idade >= 14 && idade < 28) { // jovem
            resultado.innerHTML = `<p>Foi detectado uma jovem com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menina-jovem.png");
            
        }else if (idade >= 28 && idade < 59) { // adulta
            resultado.innerHTML = `<p>Foi detectado uma adulta com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menina-adulta.png");
            
        }else if (idade >= 29 && idade < 120) { // idosa
            resultado.innerHTML = `<p>Foi detectado uma idosa com ${idade} anos</p>`;
            img.setAttribute("src", "imagens/menina-velha.png");
            
        }else {
            alert("Error: ⚠ Essa idade não conrresponde com a realidade.");
        }

        resultado.style.textAlign = "center"; // centraliza a imagem
        resultado.style.fontWeight = "500";
        resultado.appendChild(img); // O id resultado irá receber a imagem conforme foi programado aparecer de acordo com a idade.
        resultado.setAttribute("class", "texto"); // irá centralizar todos os parágrafos usando a class texto, que foi configurada no style.css 
    }

    
}
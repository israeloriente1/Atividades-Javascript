 /* Funcionamento do jogo:
  Basicamente o jogo irá funcionar assim, uma palavra será gerada aletóriamente
  pela a function sortear() e essa palavra terá cada letra colocada dentro do vetor (letras)
  tendo um indice para cada letra da palavra guardado nesse vetor, um outro vetor (linhas) será criado
  com exatamente o mesmo total de indice do vetor (letras) tendo a string "_" no lugar das letras e <br> nos indices
  que tiver espaço do vetor (letras) que contém as letras da palavra, para que assim quando o usuário selecionar
  uma letra que exista na palavra as mesma posições onde essa letra existe no vetor (letras)
  será colocado no vetor (linhas), se todos os indices forem preenchidos pelas as letras que o usuário selecionou
  a variável (isComplete = true) o que fará que o jogo acabe, caso o total de chances do usuário chegue a 0
  o jogo também irá finalizar, onde o usuário só terá a opção de clicar no botão (NOVO JOGO)
  onde irá repetir todo o precesso acima.
  Ex:
    palavra = "TESTE TESTE";
    letras = ["T","E","S","T","E"," ","T","E","S","T","E"]; indice: 0 a 10
    linhas = ["_","_","_","_","_","<br>","_","_","_","_","_"]; indice: 0 a 10
    usuário selecionou a letra = "E";
    linhas = ["_","E","_","_","E","<br>","_","E","_","_","E"];
    usuário selecionou a letra = "T";
    linhas = ["T","E","_","T","E","<br>","T","E","_","T","E"];
   */

listaPalavras = [
    {dica: "Profissão", palavra: "MOTORISTA"},
    {dica: "Profissão", palavra: "PROGRAMADOR"},
    {dica: "Profissão", palavra: "DENTISTA"},
    {dica: "Profissão", palavra: "ELETRICISTA"},
    {dica: "País", palavra: "BRASIL"},
    {dica: "País", palavra: "REINO UNIDO"},
    {dica: "País", palavra: "ESTADOS UNIDOS"},
    {dica: "País", palavra: "ALEMANHA"},
    {dica: "Objeto", palavra: "CELULAR"},
    {dica: "Objeto", palavra: "COLHER"},
    {dica: "Objeto", palavra: "HEADSET"},
    {dica: "Objeto", palavra: "MOUSE"},
    {dica: "Objeto", palavra: "TECLADO"},
    {dica: "Objeto", palavra: "MONITOR"}
]; // Esses dados serão usado de acordo com o número gerado na function sortear()

chances = 6; // Total de vezes que o usuário pode errar.
divPalavra = document.getElementById("linhasPalavra");
divChance = document.getElementById("chances");
divDica = document.getElementById("dica");
botao = document.getElementsByClassName("botao")[0];
isInclude = false; // Será usado na function verificar(), caso a letra seja encontrado na palavra ficará TRUE caso o contrário FALSE.
isComplete = false;
var palavra; // Receberá a palavra que for gerada dentro da function sortear().
var palavraAnterior; // Rebererá nome da palavra que tiver sido gerado no jogo anterior, que será usado para que a nova palavra gerada não seja igual a anterior.
var spanLetra; // Será usado para pegar a indice do span que foi selecionado com a letra que o usuário selecionou na function verificar().
var categoria; // Receberá a categoria gerada de acordo com o valor random gerado dentro da function sortear()
var letras; // Irá receber cada letra da palavra em suas devidas posições.
var linhas; // Caso a letra selecionada pelo o usuário exista na palavra, será colocado na mesma posição em que tiver sido encontrado no indice do vetor (letras), caso o contrário a posição terá o valor "_ ".
sortear(); // Irá guardar cada letra da variável palavra dentro do vetor (letras) e imprimir os tratos que serão preenchidos pelas as letras corretas que estiver na palavra quando o usuário clicar.

function sortear(){ // Irá gerar um valor random entre 0 e 2, que será usado para filtrar a categoria da variável (listaPalavras) de acordo com o valor que tiver sido gerado (como está no switch(randomValor))
    let randomValor = parseInt(Math.random() * 3);
    categoria;
    let palavraObjeto;
    switch(randomValor){
        case 0:
            categoria = "Profissão";
        break;
        case 1:
            categoria = "País";
        break;
        default:
            categoria = "Objeto";
    }
    divDica.innerHTML = `DICA: <br> ${categoria.toUpperCase()}`;
    palavraObjeto = listaPalavras.filter(p => p.dica == `${categoria}`); // Irá receber a lista de objetos contendo (Categoria e palavra) da categoria que tiver sido gerado
    let palavraLength = palavraObjeto.length - 1;
    randomValor = parseInt(Math.random() * palavraLength); // Irá receber um valor random entre 0 e o total de indices com a categoria que foi gerado na variável (categoria), esse indice que for gerado será usado para pegar o valor de (palavra).
    palavra = palavraObjeto[randomValor].palavra;
    if (palavra == palavraAnterior){ // Caso a palavra gerada seja igual a anterior
        sortear();
    }
    linhas = [];
    letras = [];
    for (let r = 0; r <= palavra.length - 1; r++){
        letras[r] = palavra.charAt(r); // Irá guardar cada letra da palavra dentro do vetor (letras).
        letras[r] == " " ? linhas[r] = "<br>" : linhas[r] = "_ ";
    }
    divPalavra.innerHTML = "";
    for (let r of linhas){ // Imprimi as letras que foram selecionadas de maneira correta.
        divPalavra.innerHTML += r;
    }
    isComplete = false;
}

function imprimirLinhaAtual(){ // Apaga o valor atual e imprimi as letras que foram selecionadas de maneira correta.
    divPalavra.innerHTML = "";
    for (let r of linhas){ 
        divPalavra.innerHTML += r;
    }
}

function verificar(letra, posicao){ // Irá analisar a letra e a posição informado, o valor do parâmetro (posicao) será usado na variável (spanLetra) pagar pegar o id com o valor do parâmetro (posicao) 
    letra = letra.toUpperCase()
    spanLetra = document.getElementById(`${posicao}`);
    if (chances >= 1 && isComplete == false){
        if (spanLetra.hasAttribute("class", "letra")){
            spanLetra.removeAttribute("class", "letra"); // Mudará o estilo da letra selecionada, o que deixará não acessível até o próximo jogo
            letras.includes(letra) ? isInclude = true : isInclude = false; // Irá verificar se a letra selecionada exista na palavra atual
            if (isInclude == false){ // Caso a letra NÃO exista na palavra, será diminuído o total de chances para jogar novamente.
                chances--;
                if (chances > 2){
                    divChance.innerHTML = `CHANCES <br>${chances}`;
                }else{
                    if (chances >=1){
                        divChance.setAttribute("class", "red")
                        divChance.innerHTML = `CHANCES <br>${chances}`;
                    }else {
                        divChance.innerHTML = "GAME <br> OVER";
                        botao.style.display = "block";
                        divDica.innerHTML = `PALAVRA: <br> ${palavra}`
                    }
                }
            }else if (isInclude == true){ // Os índices do vetor (letras) que tiverem a letra selecionada será adicionado no mesmo índice do vetor (linhas).
                for (let l in letras){
                    if (letras[l] == letra){ // Se no mesno indice do vetor(letras) tiver o mesmov valor do parâmetro letra, então o parâmetro (letra) será adicionado neste ínidice dentro do vetor (linhas).
                        linhas[l] = letra;
                    }
                }
                linhas.includes("_ ") ? isComplete = false : isComplete = true;
                if (isComplete == true){
                    botao.style.display = "block";
                    if (divChance.hasAttribute("class", "red")){
                        divChance.removeAttribute("class", "red");
                    }
                    divChance.innerHTML = "CONCLUÍDO"
                }
                imprimirLinhaAtual(); // Irá atualizar o status da divLinhas, onde contém as linhas que recebem as letras conforme for selecionando e completando a palavra.
            }
        }
        isInclude = false;
    }   
}

function novoJogo(){ // Irá criar um novo jogo, deixando todos os botões acessíveis, resetando o total de chances e chamando a função sortear() que irá recriar os dados do jogo (dados: palavra e dica).
    for (let n = 0;n < 26; n++){ // Irá fazer com que todas as letras fiquem acessíveis novamente trocando a classe.
        spanLetra = document.getElementById(`${n}`);
        spanLetra.setAttribute("class", "letra");
    }
    palavraAnterior = palavra;
    chances = 6;
    divChance.innerHTML = `CHANCES <br>${chances}`;
    if (divChance.hasAttribute("class", "red")){
        divChance.removeAttribute("Class", "red");
    }
    sortear(); // Irá guardar cada letra da variável palavra dentro do vetor (letras) e imprimir os tratos que serão preenchidos pelas as letras corretas que estiver na palavra quando o usuário clicar.
    botao.style.display = "none";
}
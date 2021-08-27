chances = 6; // Total de vezes que o usuário pode errar.
palavra = document.getElementById("palavra").innerHTML.toUpperCase();
divPalavra = document.getElementById("linhasPalavra");
divChance = document.getElementById("chances");
var spanLetra; // Será usado para pegar a indice do span que foi selecionado com a letra que o usuário selecionou na function verificar().
letras = []; // Irá receber cada letra da palavra em suas devidas posições.
linhas = []; // Caso a letra selecionada pelo o usuário exista na palavra, será colocado na mesma posição em que tiver sido encontrado no indice do vetor (letras), caso o contrário a posição terá o valor "_ ".
isInclude = false; // Será usado na function verificar(), caso a letra seja encontrado na palavra ficará TRUE caso o contrário FALSE.
organizarPalavra(); // Irá guardar cada letra da variável palavra dentro do vetor (letras) e imprimir os tratos que serão preenchidos pelas as letras corretas que estiver na palavra quando o usuário clicar.
console.log(letras);
console.log(linhas);

function verificar(letra, posicao){
    letra = letra.toUpperCase()
    spanLetra = document.getElementById(`${posicao}`);
    if (spanLetra.hasAttribute("class", "letra")){
        spanLetra.removeAttribute("class", "letra"); // Mudará o estilo da letra selecionada
        for (let l of letras){ // Irá verificar se a letra selecionada exista na palavra atual
            if (letra == l){
                isInclude = true;
            }            
        }
        if (isInclude == false){ // Caso a letra NÃO exista na palavra, será diminuído o total de chances para jogar novamente.
            chances--;
            if (chances > 3){
                divChance.innerHTML = `CHANCES <br>${chances}`;
            }else{
                divChance.setAttribute("class", "red")
                divChance.innerHTML = `CHANCES <br>${chances}`;
            }
        }else if (isInclude == true){ // Os índices do vetor (letras) que tiverem a letra selecionada será adicionado no mesmo índice do vetor (linhas).
            for (let l in letras){
                if (letras[l] == letra){
                    linhas[l] = letra;
                }
            }
            imprimirLinhaAtual(); // Irá atualizar o status da divLinhas, onde contém as linhas que recebem as letras conforme for selecionando e completando a palavra.
        }
    }
    isInclude = false;
}

function organizarPalavra(){
    for (let r = 0; r <= palavra.length - 1; r++){
        letras[r] = palavra.charAt(r); // Irá guardar cada letra da palavra dentro do vetor (letras).
        letras[r] == " " ? linhas[r] = "<br>" : linhas[r] = "_ ";
    }
    for (let r of linhas){ // Imprimi as letras que foram selecionadas de maneira correta.
        divPalavra.innerHTML += r;
    }  
}

function imprimirLinhaAtual(){ // Apaga o valor atual e imprimi as letras que foram selecionadas de maneira correta.
    divPalavra.innerHTML = "";
    for (let r of linhas){ 
        divPalavra.innerHTML += r;
    }
}
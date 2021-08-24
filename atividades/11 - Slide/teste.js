boxSlider = document.getElementById("slide"); // Div slide
listaSlide = []; // Guardar as imagens do slide
slide = 0; // Será usado como indíce na VAR (listaSlide)
var slideLength; // Valor limite do indice do vetor (listaSlide)
tempoSlide = 0; // Receberar o tempo até trocar de slide, irá trocar de slide sempre que chegar a 500.
var porcentagemTempoSlide; // Recebe a porcentagem da tragetória do tempoSlide de 0 até 500 convertido pra  0% até 100%.
var barraSlide; // Barra onde irá preencher conforme o tempo até trocar o slide.
var divSlide; // Div que contem a barra (barraSlide).

window.addEventListener("load", preCarregamento);
function preCarregamento(){ // Irá guardar as imagens dentro de um vetor, carregar a imagem e inicar a animação da barra de troca de slide.
    for (let i = 0; i < 5; i++){
        listaSlide[i] = new Image();
        listaSlide[i].src = `./slides/s${i + 1}.jpg`;
    }
    slideLength = listaSlide.length - 1;
    carregarSlide();
    animarBarra();
}

function carregarSlide(){ // altera o slide atual, utilizando o indice de ondes as imagens estão no vetor (listaSlide)
    boxSlider.style.backgroundImage = `url("${listaSlide[slide].src}")`;      
}

function alterarSlide(valor){ // Avança ou volta a imagem do slide, sendo (1 = Avançar) e (-1 = Voltar)
    barraSlide = document.getElementsByClassName("tempLoadSlide")[slide];
    divSlide = document.getElementsByClassName("divLoadSlide")[slide];    
    if (valor == 1){ // Avançar imagem
        slide == slideLength ? slide = 0 : slide++;
        carregarSlide();
        tempoSlide = 0; // zera o tempo de troca.
        // Irá deixar barra do slide atual redonda
        barraSlide.style.width = "0%";
        divSlide.style.borderRadius = "50%";
        divSlide.style.width = "5px";
    }else { // Voltar imagem
        slide == 0 ? slide = slideLength : slide--;
        carregarSlide();
        tempoSlide = 0; // zera o contador de troca.
        // Irá deixar barra do slide atual redonda
        barraSlide.style.width = "0%";
        divSlide.style.borderRadius = "50%";
        divSlide.style.width = "5px";
    }
}

function animarBarra(){ // Fara a contagem até trocar para o próximo slide, e irá mostrar o progresso conforme a porcentagem que vai de 0% a 100% da variável (porcentagemTempoSlide)
    tempoSlide++;
    barraSlide = document.getElementsByClassName("tempLoadSlide")[slide];
    divSlide = document.getElementsByClassName("divLoadSlide")[slide];
    // Irá largo a barra para realizar a animação dentro, modificando o width de (barraSlide) 
    porcentagemTempoSlide = tempoSlide / 5;
    divSlide.style.borderRadius = "5px";
    divSlide.style.width = "3%";
    barraSlide.style.width = `${porcentagemTempoSlide}%`;
    if (tempoSlide >= 500){
        tempoSlide = 0;
        // Irá aredondar as barra de contagem do slide atual, para ir para a próxima barra.
        barraSlide.style.width = "0%";
        divSlide.style.borderRadius = "50%";
        divSlide.style.width = "5px";
        alterarSlide(1);
    }    
    window.requestAnimationFrame(animarBarra);
}
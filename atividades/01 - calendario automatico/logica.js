
function carregar() {
    horario = document.getElementById("horario");
    horario_foto = document.getElementById("foto");
    calendario = document.getElementById("calendario");
    titulo = document.getElementById("titulo");

    hora = new Date().getHours();
    minuto = new Date().getMinutes();
    dia_data = new Date().getDate();
    dia_semanal = new Date().getDay() + 1;
    mes_data = new Date().getMonth() + 1;
    mes_nome = new Date().getMonth() + 1;
    ano = new Date().getFullYear();

    horario.innerHTML = `${hora}:${minuto}`;
    dia(); // function responsável por agregar o nome do dia dentro da variável dia_semanal.
    mes(); // function responsável por agregar o nome do mês correspondente a variável mes_nome.
    calendario.innerHTML = `${dia_semanal}, ${dia_data} de ${mes_nome} de ${ano}`;
    msg_estilo(); /* function responsável por alterar o titulo da página, alterar imagem centralizada e alterar o backgroundColor tudo de acordo com o horário atual da variável hora */
}

function mes() {
    switch (mes_nome) {
        case 1:
            mes_nome = "Janeiro";
            break;
        case 2:
            mes_nome = "Fevereiro";
            break;
        case 3:
            mes_nome = "Março";
            break;
        case 4:
            mes_nome = "Abril";
            break;
        case 5:
            mes_nome = "Maio";
            break;
        case 6:
            mes_nome = "Junho";
            break;
        case 7:
            mes_nome = "Julho";
            break;
        case 8:
            mes_nome = "Agosto";
            break;
        case 9:
            mes_nome = "Setembro";
            break;
        case 10:
            mes_nome = "Outubro";
            break;
        case 11:
            mes_nome = "Novembro";
            break;
        default:
            mes_nome = "Dezembro";
            break;
    }
}

function dia() {
    switch (dia_semanal) {
        case 1:
            dia_semanal = "Domingo";
            break;
        case 2:
            dia_semanal = "Segunda-Feira";
            break;
        case 3:
            dia_semanal = "Terça-Feira";
            break;
        case 4:
            dia_semanal = "Quarta-Feira";
            break;
        case 5:
            dia_semanal = "Quinta-Feira";
            break;
        case 6:
            dia_semanal = "Sexta-Feira";
            break;
        default:
            dia_semanal = "Sábado";
            break;
    }
}

function msg_estilo() {
    if (hora >= 00 && hora < 6) {
        horario_foto.src = "imagens/madrugada.png";
        titulo.innerHTML = "Boa Madrugada";
        document.body.style.backgroundColor = "#042F40";
    } else if (hora >= 6 && hora < 12) {
        horario_foto.src = "imagens/manha.png";
        titulo.innerHTML = "Bom Dia";
        document.body.style.backgroundColor = "#BFADA8";
    } else if (hora >= 12 && hora < 18) {
        horario_foto.src = "imagens/dia.png";
        titulo.innerHTML = "Boa Tarde";
        document.body.style.backgroundColor = "#F2D49B";
    } else if (hora >= 18 && hora <= 23) {
        horario_foto.src = "imagens/noite.png";
        titulo.innerHTML = "Boa Noite";
        document.body.style.backgroundColor = "#0A2326";
    }
}
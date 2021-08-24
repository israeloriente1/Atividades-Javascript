function calcular() {
    altura = Number(document.getElementById("altura").value);
    peso = Number(document.getElementById("peso").value);
    resultado = document.getElementById("resultado");
    riscosResult = document.getElementById('riscos');
    riscos = [];

    imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    if (imc >= 16 && imc < 17) {
        status = "Muito abaixo do peso";
        riscos = ["Queda de cabelo", "Infertilidade", "Ausência menstrual"];

    }else if (imc >= 17 && imc < 18.5) {
        status = "Abaixo do peso";
        riscos = ["Fadiga", "Stress", "Ansiedade"];

    }else if (imc >= 18.5 && imc < 25) {
        status = "Peso Normal";
        riscos = ["Menos risco de doenças cardíacas", "Vasculares"];

    }else if (imc >= 25 && imc < 30) {
        status = "Acima do peso";
        riscos = ["Fadiga", "Má circulação", "Varizes"];

    }else if (imc >= 30 && imc < 35) {
        status = "Obesidade Grau 1";
        riscos = ["Diabetes", "Angina", "Infarto", "Aterosclerose"];

    }else if (imc >= 35 && imc <= 40) {
        status = "Obesisdade Grau 2";
        riscos = ["Apneia do sono", "Falta de ar"];

    }else if (imc > 40) {
        status = "Obesisdade Grau 3";
        riscos = ["Refluxo", "Dificuldade para se mover", "Escaras", "Diabetes", "Infarto", "AVC"];

    }else {
        alert("Error: Algo deu errado, por favor tente novamente. ");

    }

    resultado.innerHTML = `
        <h2>IMC: ${imc} </h2>
        <p><strong>Status</strong>: ${status} </p>
        <p><strong>Riscos</strong> </p>`;

    riscosResult.innerHTML = "";        
    for (let r of riscos){
        riscosResult.innerHTML += `<li>${r}</li>`;
    }  
}
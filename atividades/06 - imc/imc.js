function calcular() {
    altura = Number(document.getElementById("altura").value);
    peso = Number(document.getElementById("peso").value);
    resultado = document.getElementById("resultado");

    imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    if (imc >= 16 && imc < 17) {
        status = "Muito abaixo do peso";
        riscos = "Queda de cabelo, infertilidade e ausência menstrual.";

    }else if (imc >= 17 && imc < 18.5) {
        status = "Abaixo do peso";
        riscos = "Fadiga, Stress e ansiedade";

    }else if (imc >= 18.5 && imc < 25) {
        status = "Peso Normal";
        riscos = "Menos risco de doenças cardíacas e vasculares";

    }else if (imc >= 25 && imc < 30) {
        status = "Acima do peso";
        riscos = "Fadiga, má circulação e varizes";

    }else if (imc >= 30 && imc < 35) {
        status = "Obesidade Grau 1";
        riscos = "Diabetes, angina, infarto e aterosclerose";

    }else if (imc >= 35 && imc <= 40) {
        status = "Obesisdade Grau 2";
        riscos = "Apneia do sono e falta de ar";

    }else if (imc > 40) {
        status = "Obesisdade Grau 3";
        riscos = "Refluxo, dificuldade para se mover, escaras, diabetes, infarto e AVC";

    }else {
        alert("Error: Algo deu errado, por favor tente novamente. ");

    }

    resultado.innerHTML = `
        <h2>IMC: ${imc} </h2>
        <p><strong>Status</strong>: ${status} </p>
        <p><strong>Riscos</strong>: ${riscos} </p>`;
}
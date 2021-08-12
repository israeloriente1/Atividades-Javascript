function calcular() {
    altura = Number(document.getElementById("altura").value);
    peso = Number(document.getElementById("peso").value);
    resultado = document.getElementById("resultado");
    riscosResult = document.getElementById('riscos');

    imc = peso / (altura * altura);
    imc = imc.toFixed(2);

    // A variável (riscos) irá receber Strings dentro da tag <li>, para que assim que a variável for usado dentro de uma tag <ul> ou <ol> irá retonar as String em forma de lista.

    if (imc >= 16 && imc < 17) {
        status = "Muito abaixo do peso";
        riscos = ["<li>Queda de cabelo</li>", "<li>Infertilidade</li>", "<li>Ausência menstrual</li>"];

    }else if (imc >= 17 && imc < 18.5) {
        status = "Abaixo do peso";
        riscos = ["<li>Fadiga</li>", "<li>Stress</li>", "<li>Ansiedade</li>"];

    }else if (imc >= 18.5 && imc < 25) {
        status = "Peso Normal";
        riscos = ["<li>Menos risco de doenças cardíacas</li>", "<li>Vasculares</li>"];

    }else if (imc >= 25 && imc < 30) {
        status = "Acima do peso";
        riscos = ["<li>Fadiga</li>", "<li>Má circulação</li>", "<li>Varizes</li>"];

    }else if (imc >= 30 && imc < 35) {
        status = "Obesidade Grau 1";
        riscos = ["<li>Diabetes</li>", "<li>Angina</li>", "<li>Infarto</li>", "<li>Aterosclerose</li>"];

    }else if (imc >= 35 && imc <= 40) {
        status = "Obesisdade Grau 2";
        riscos = ["<li>Apneia do sono</li>", "<li>Falta de ar</li>"];

    }else if (imc > 40) {
        status = "Obesisdade Grau 3";
        riscos = ["<li>Refluxo</li>", "<li>Dificuldade para se mover</li>", "<li>Escaras</li>", "<li>Diabetes</li>", "<li>Infarto</li>", "<li>AVC</li>"];

    }else {
        alert("Error: Algo deu errado, por favor tente novamente. ");

    }

    resultado.innerHTML = `
        <h2>IMC: ${imc} </h2>
        <p><strong>Status</strong>: ${status} </p>
        <p><strong>Riscos</strong> </p>`;
        
    riscosResult.innerHTML = `
        <ul>
            ${riscos}
        </ul>`;    
}
function verificar() {
    valor = Number(document.getElementById("valor").value);
    resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (c = 1; c <= 10; c++) {
        p = document.createElement("span");
        p.innerHTML = `${c} x ${valor} = ${c * valor} <br>`;
        resultado.appendChild(p);
    }
}
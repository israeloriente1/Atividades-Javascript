var valores = [42, 345, 437, 3, 65, 45, 225, 23, 41, 51, 235, 12, 51, 23, 512, 3, 512, 313, 512,323, 2351, 123, 34];

const menorValor = valores.reduce((valorAcc, valorAtual) => valorAtual < valorAcc ? valorAcc = valorAtual : valorAcc = valorAcc);

const maiorValor = valores.reduce((valorAcc, valorAtual) => valorAtual > valorAcc ? valorAcc = valorAtual : valorAcc = valorAcc);

console.log(maiorValor);
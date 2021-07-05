var pessoa = {
    fazerAniversario(){
        this.idade++;
        console.log(`${this.nome} fez ${this.idade} ${this.idade > 1 ? "anos" : "ano"} :D`);
    }
};

pessoa.nome = "Israel";
pessoa.nomeCompleto = "Israel de Deus Nogueira do Oriente";
pessoa.idade = 20;

console.log(pessoa);





class Pessoa {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Motoca {
    pessoa: Pessoa | null;
    constructor() {
        this.pessoa = null;
    }
    inserir(pessoa: Pessoa): boolean {
        if (this.pessoa == null) {
            this.pessoa = pessoa;
            return true;
        }
        console.log("fail: moto ocupada");
        return false;
    }
    remover(): Pessoa | null {
        return null;
    }
}

let moto = new Motoca();
moto.inserir(new Pessoa("ana", 7));
console.log(moto)
moto.inserir(new Pessoa("mig", 5));
console.log(moto)
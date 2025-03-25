class Pessoa {
    private idade: number;

    constructor() { };

    public getIdade(): number {
        return this.idade;
    }

    public setIdade(idade: number): void {
        this.idade = idade;
    }
}


const pessoa: Pessoa = new Pessoa();
console.log(pessoa.getIdade());
pessoa.setIdade(20);
console.log(pessoa.getIdade());

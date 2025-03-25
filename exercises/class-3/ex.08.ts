class Funcionario {
    private salario: number;

    constructor(salario: number) { this.salario = salario; }

    public getSalario(): number {
        return this.salario;
    }

    public calcularBonus(): number {
        return this.salario * 0.2;
    }
}

class Gerente extends Funcionario {
    constructor(salario: number) { super(salario); }

    public calcularBonus(): number {
        return this.salario * 0.35;
    }
}


const funcionario: Funcionario = new Funcionario(100);
console.log("Funcionario", funcionario.calcularBonus())

const gerente: Gerente = new Gerente(100);
console.log("Gerente", gerente.calcularBonus())
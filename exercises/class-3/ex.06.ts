class Funcionario {
    private nome: string;
    private salario: number;

    public constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public aumentarSalario(percentual: number): void {
        this.salario *= 1 + percentual / 100;
    }

    public showSalario(): void {
        console.log(`R$${this.salario}`);
    }
}

const lucas: Funcionario = new Funcionario("Lucas", 10000);
lucas.aumentarSalario(10);
lucas.showSalario();
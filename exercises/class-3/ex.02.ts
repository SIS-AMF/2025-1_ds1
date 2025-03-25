class ContaBancaria {
    private saldo: number;

    public constructor() {
        this.saldo = 0;
    }

    public depositar(valor: number): void {
        this.saldo += valor;
    }

    public getSaldo(): number {
        return this.saldo;
    }
}

const conta: ContaBancaria = new ContaBancaria()

conta.depositar(100);
console.log(conta.getSaldo());

conta.depositar(200);
console.log(conta.getSaldo());
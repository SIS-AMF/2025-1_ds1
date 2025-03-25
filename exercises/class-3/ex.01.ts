class Carro {
    private marca: string;
    private modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public detalhes(): void {
        console.log(`marca: ${this.marca}`);
        console.log(`modelo: ${this.modelo}`);
    }
}

const chevete: Carro = new Carro("Chevo", "Star");
chevete.detalhes()
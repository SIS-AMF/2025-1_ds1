class Processador {
    public iniciar(): void {
        console.log("Processador Iniciando")
    }
}

class Computador {
    private processador: Processador = new Processador();

    constructor() { }

    public ligar(): void {
        this.processador.iniciar();
    }
}


const computador: Computador = new Computador();
computador.ligar();

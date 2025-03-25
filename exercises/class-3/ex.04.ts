interface Veiculo {
    mover(): void;
}


class Bicicleta implements Veiculo {
    public mover(): void {
        console.log("A bicicleta esta se movendo!");
    }
}

const bicicleta: Bicicleta = new Bicicleta();
bicicleta.mover()
abstract class Animal {
    public abstract emitirSom(): void;
}

class Gato extends Animal {
    public emitirSom(): void {
        console.log("Miau");
    }
}

const gato: Gato = new Gato();
gato.emitirSom();
abstract class InstrumentoMusical {

    abstract tocar(): void;
}

class Violao extends InstrumentoMusical {
    public tocar(): void {
        console.log("O Violão está tocando")
    }
}

class Piano extends InstrumentoMusical {
    public tocar(): void {
        console.log("O Piano está tocando")
    }
}

const violao: Violao = new Violao();
violao.tocar();

const piano: Piano = new Piano();
piano.tocar();
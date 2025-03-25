class Aluno {
    private nome: string;
    private matricula: string;
    private turmas: Array<Turma> = [];

    public constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
    }

    public getTurmas(): Array<Turma> {
        return this.turmas;
    }

    public addTurma(turma: Turma): void {
        if (!this.turmas.includes(turma)) {
            this.turmas.push(turma);
            turma.adicionarAluno(this);
        }
    }

    public getNome(): string {
        return this.nome;
    }

    public toString(): string {
        return `Aluno: ${this.nome}, Matrícula: ${this.matricula}`;
    }
}

class Turma {
    private nome: string;
    private alunos: Array<Aluno>;

    public constructor(nome: string) {
        this.nome = nome;
        this.alunos = [];

    }

    public adicionarAluno(aluno: Aluno): void {
        if (!this.alunos.includes(aluno)) {
            this.alunos.push(aluno);
            aluno.addTurma(this);
        }
    }

    public listAlunos(): void {
        console.log(this.nome)
        this.alunos.forEach(aluno => console.log(aluno.toString()));
    }

    public getAlunos(): Array<Aluno> {
        return this.alunos;
    }
}

const ds1: Turma = new Turma("DS1");
const ds2: Turma = new Turma("DS2");

ds1.adicionarAluno(new Aluno("Lucass", "004755"));
ds1.adicionarAluno(new Aluno("Andrey", "006900"));

const lucas: Aluno = <Aluno>ds1.getAlunos().find(aluno => aluno.getNome() == "Lucas");


lucas.addTurma(ds2);


ds1.listAlunos();
console.log("--------")
ds2.listAlunos();


class Aluno {
    private nome: string;
    private matricula: string;

    constructor(nome: string, matricula: string) {
        this.nome = nome;
        this.matricula = matricula;
    }


}

class Turma {
    private alunos: Array<Aluno> = new Array();
    public adicionarAluno(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    public listAlunos(): void {
        this.alunos.forEach(aluno => console.log(aluno));
    }
}

const ds1: Turma = new Turma();
ds1.adicionarAluno(new Aluno("Lucas", "004755"));
ds1.adicionarAluno(new Aluno("Andrey", "006900"));
ds1.listAlunos();
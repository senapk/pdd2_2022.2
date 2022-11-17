class Aluno {
    private id: string;
    private discps: Map<string, Discp>;
    public getId() { return this.id; }
    public addDiscp(discp: Discp) {
        if (this.discps.has(discp.getId()))
            return;
        this.discps.set(discp.getId(), discp);
        discp.addAluno(this);
    }
    public rmDiscp(idDiscp: string) {
        let discp = this.discps.get(idDiscp);
        if (discp === undefined)
            return;
        this.discps.delete(idDiscp);
        discp.rmAluno(this.id);
    }
    toString(): string {
        let saida = "" + this.id;
        for (let d of this.discps)
            saida += d.getId() + '\n';
        return saida; 
    }
}

class Discp {
    private id: string;
    private alunos: Map<string, Aluno>;
    public getId() {return this.id;}
    public addAluno(aluno: Aluno) {
        if (this.alunos.has(aluno.getId()))
            return;
        this.alunos.set(aluno.getId(), aluno);
        aluno.addDiscp(this);
    }
    public rmAluno(idAluno: string) {
        if (!this.alunos.has(idAluno))
            return;
        let aluno = this.alunos.get(idAluno)!;
        this.alunos.delete(idAluno);
        aluno.rmDiscp(this.id);
    }
}

class Sistema {
    alunos: Map<string, Aluno>
    discps: Map<string, Discp>

    Sistema() {
        this.alunos = new Map();
        this.discps = new Map();
    }

    addDiscp(idDiscp: string) {
        this.discps.set(idDiscp, new Discp(idDiscp));
    }
    addAluno(idAluno: string) {

    }

    matricular(idAluno: string, idDiscp: string) {
        let aluno = this.alunos.get(idAluno);
        let discp = this.discps.get(idDiscp);
        if (aluno !== undefined && discp !== undefined) {
            aluno.addDiscp(discp);
        }
    }   
}


function main() {
    let sistema = new Sistema();
    while(true) {
        let line = input();
        let args = line.split(" ");
        if (args[0] == "end") {
            break;
        }
        else if(args[0] == "nwalu") {
            for (let i = 1; i < args.length; i++)
                sistema.addAluno(args[i]);
        }
        else if(args[0] == "tie") {
            for (let i = 2; i < args.length; i++)
                sistema.matricular(args[1], args[i]);
        }

    }

}


main();
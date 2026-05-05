import type { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import type { IProjeto } from "../projeto/projeto";

class Aluno extends Pessoa implements IProjeto {
  //atributos de instância
  curso: string;
  situacao: SituacacaoAluno;

  //método construtor
  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
    curso: string,
    situacao: SituacacaoAluno,
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, endereco);
    //dessa maneira, a geração de matricula fica automática quando for gerado o objeto.
    this.matricula = this.gerarMatricula();
    this.curso = curso;
    this.situacao = situacao;
  }

  gerarMatricula(): number {
    let ano: number = new Date().getFullYear();
    let numero: number = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    return Number(` ${ano} ${numero}`);
  }

  submeterProjetodePesquisa(): void {
    console.log(
      `Isso é um projeto de pesquisa em desenvolvimento por um Aluno!`,
    );
  }
  submeterProjetodeExtensao(): void {
    console.log(
      `Isso é um projeto de extensão em desenovlimento por um Aluno!`,
    );
  }
}

enum SituacacaoAluno {
  ATIVO = "Ativo",
  MATRICULADO = "Matriculado",
  TRANCADO = "Trancado",
  CONCLUIDO = "Concluido",
  CANCELADO = "Cancelado",
  FORMADO = "Formado",
}
export { Aluno, SituacacaoAluno };

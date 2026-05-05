import type { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import type { IProjeto } from "../projeto/projeto";

class Professor extends Pessoa implements IProjeto {
  //atributos de instância
  salario: number;

  //método construtor
  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
    salario: number,
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, endereco);

    //dessa maneira, a geração de matricula fica automática quando for gerado o objeto.
    this.matricula = this.gerarMatricula();
    this.salario = salario;
  }

  submeterProjetodePesquisa(): void {
    console.log(
      `Isso é um projeto de pesquisa em desenvolvimento por um Professor!`,
    );
  }
  submeterProjetodeExtensao(): void {
    console.log(
      `Isso é um projeto de extensão em desenovlimento por um Professor!`,
    );
  }

  gerarMatricula(): number {
    return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000);
  }
}

export { Professor };

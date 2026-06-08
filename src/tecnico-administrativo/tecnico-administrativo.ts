import type { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

abstract class TecnicoAdministrativo extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, endereco);
    this.matricula = this.gerarMatricula();
  }

  protected gerarMatricula(): number {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
  }
}

export { TecnicoAdministrativo };

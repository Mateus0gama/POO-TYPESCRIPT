import type { Endereco } from "../endereco/endereco";
import { TecnicoAdministrativo } from "../tecnico-administrativo/tecnico-administrativo";

class Psicologo extends TecnicoAdministrativo {
  private _CRP: number = 0;

  constructor(
    CRP: number,
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, endereco);
    this.CRP = CRP;
  }

  public get CRP(): number {
    return this._CRP;
  }
  public set CRP(value: number) {
    this._CRP = value;
  }
}

export { Psicologo };

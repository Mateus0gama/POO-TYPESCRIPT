import { TecnicoAdministrativo } from "../tecnico-administrativo/tecnico-administrativo";
import { Endereco } from "../endereco/endereco";

class Bibliotecario extends TecnicoAdministrativo {
  //Atributos
  private _CRB: number = 0;

  //Método Construtor
  constructor(
    CRB: number,
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasileiro: boolean,
    endereco: Endereco[],
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, endereco);
    this.CRB = CRB;
  }

  //Método GET e SET
  public get CRB(): number {
    return this._CRB;
  }
  public set CRB(value: number) {
    this._CRB = value;
  }
}

export { Bibliotecario };

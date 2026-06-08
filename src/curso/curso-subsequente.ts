import { Curso } from "./curso";

class CursoSubsequente extends Curso {
  //Atributos
  private _estagioObrigatorio: boolean = false;

  //Método Construtor
  constructor(nome: string, cargaHoraria: number, estagioObrigatorio: boolean) {
    super(nome, cargaHoraria);
    this.estagioObrigatorio = estagioObrigatorio;
  }

  //Método Get e Set
  public get estagioObrigatorio(): boolean {
    return this._estagioObrigatorio;
  }
  public set estagioObrigatorio(value: boolean) {
    this._estagioObrigatorio = value;
  }
}

export { CursoSubsequente };

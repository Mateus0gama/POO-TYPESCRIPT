abstract class Curso {
  //Atributos
  private _nome: string;
  private _cargaHoraria: number;

  //Método Get e Set
  public get nome(): string {
    return this._nome;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }

  public get cargoHoraria(): number {
    return this._cargaHoraria;
  }

  public set cargaHoraria(cargaHoraria: number) {
    this._cargaHoraria = cargaHoraria;
  }

  constructor(nome: string, cargaHoraria: number) {
    this.nome = nome;
    this.cargaHoraria = cargaHoraria;
  }
}

export { Curso };

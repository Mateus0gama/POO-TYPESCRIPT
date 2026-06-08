import { Curso } from "./curso";

class CursoIntegrado extends Curso {
  //Atributos

  private _nivelMedio: boolean = true;

  //construtor
  constructor(nome: string, cargaHoraria: number, nivelMedio: boolean) {
    super(nome, cargaHoraria);
    this.nivelMedio = nivelMedio;
  }

  //método get e set
  public get nivelMedio(): boolean {
    return this._nivelMedio;
  }
  public set nivelMedio(nivelMedio: boolean) {
    this._nivelMedio = nivelMedio;
  }
}

export { CursoIntegrado };

import { Endereco } from "../endereco/endereco";
import { Aluno } from "../aluno/aluno";
import { Professor } from "../professor/professor";
import type { Curso } from "../curso/curso";
import { TecnicoAdministrativo } from "../tecnico-administrativo/tecnico-administrativo";

class Campus {
  //Atributos
  private _nomeCampus: String = "";
  private _endereco: Endereco[] = [];
  private _alunos: Aluno[] = [];
  private _professores: Professor[] = [];
  private _curso: Curso[] = [];
  private _tecnicoAdministrativo: TecnicoAdministrativo[] = [];

  //Método Construtor
  constructor(
    nomeCampus: String,
    endereco: Endereco[],
    alunos: Aluno[],
    professores: Professor[],
    curso: Curso[],
    tecnicoAdministrativo: TecnicoAdministrativo[],
  ) {
    this.nome_Campus = nomeCampus;
    this.endereco = endereco;
    this.alunos = alunos;
    this.professores = professores;
    this.curso = curso;
    this.tecnicoAdministrativo = tecnicoAdministrativo;
  }

  //Método GET e SET
  public get nomeCampus(): String {
    return this._nomeCampus;
  }
  public set nome_Campus(value: String) {
    this._nomeCampus = value;
  }

  public get endereco(): Endereco[] {
    return this._endereco;
  }
  public set endereco(value: Endereco[]) {
    this._endereco = value;
  }

  public get alunos(): Aluno[] {
    return this._alunos;
  }
  public set alunos(value: Aluno[]) {
    this._alunos = value;
  }

  public get professores(): Professor[] {
    return this._professores;
  }
  public set professores(value: Professor[]) {
    this._professores = value;
  }

  public get curso(): Curso[] {
    return this._curso;
  }
  public set curso(value: Curso[]) {
    this._curso = value;
  }

  public get tecnicoAdministrativo(): TecnicoAdministrativo[] {
    return this._tecnicoAdministrativo;
  }
  public set tecnicoAdministrativo(value: TecnicoAdministrativo[]) {
    this._tecnicoAdministrativo = value;
  }
}

export { Campus };

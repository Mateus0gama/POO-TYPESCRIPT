import type { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";
import type { IProjeto } from "../projeto/projeto";
import { Campus } from "../campus/campus";

class Professor extends Pessoa implements IProjeto {
  //atributos de instância
  private _salario: number = 0;
  private _campus: Campus | null = null;

  //Método GET e SET

  public get salario(): number {
    return this._salario;
  }
  public set salario(value: number) {
    this._salario = value;
  }

  public get campus(): Campus | null {
    return this._campus;
  }
  public set campus(value: Campus | null) {
    this._campus = value;
  }

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
    campus: Campus | null = null,
  ) {
    super(nome, sobrenome, sexo, CPF, idade, brasileiro, endereco);

    //dessa maneira, a geração de matricula fica automática quando for gerado o objeto.
    this.matricula = this.gerarMatricula();
    this.salario = salario;
    this._campus = campus;
  }

  public submeterProjetodePesquisa(): void {
    console.log(
      `Isso é um projeto de pesquisa em desenvolvimento por um Professor!`,
    );
  }
  public submeterProjetodeExtensao(): void {
    console.log(
      `Isso é um projeto de extensão em desenovlimento por um Professor!`,
    );
  }

  protected gerarMatricula(): number {
    return Math.floor(Math.random() * (99999999 - 10000000 + 1) + 10000000);
  }
}

export { Professor };

import { Endereco } from "../endereco/endereco";

abstract class Pessoa {
  //Atributos de Instância

  matricula: number = 0;
  nome: string = "";
  sobrenome: string = "";
  sexo: string = "";
  CPF: string = "";
  idade: number = 0;
  brasileiro: boolean;
  enderecos: Endereco[] = []; // Ou let enderecos: Array<string>;

  //Atributos Estático
  static quantidadeDePessoas: number = 0;

  //Método Construtor

  constructor(
    nome: string,
    sobrenome: string,
    sexo: string,
    CPF: string,
    idade: number,
    brasiliero: boolean,
    enderecos: Endereco[],
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.sexo = sexo;
    this.CPF = CPF;
    this.idade = idade;
    this.brasileiro = brasiliero;
    this.enderecos = enderecos;
    Pessoa.quantidadeDePessoas++;
  }

  //Métodos Getter e Setters

  //Métodos de instância
  exibirNomeCompleto(): string {
    return `O nome completo é: ${this.nome} ${this.sobrenome}`;
  }

  //Métodos Estáticos
  static getquantidadeDePessoas(): string {
    return `A quantidade de pessoas é: ${Pessoa.quantidadeDePessoas}`;
  }

  //método abstratos
  abstract gerarMatricula(): number;
}

export { Pessoa };

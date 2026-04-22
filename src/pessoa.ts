class Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
  brasileiro: boolean;
  enderecos: string[]; // Ou let enderecos: Array<string>;

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    brasiliero: boolean,
    enderecos: string[],
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
    this.brasileiro = brasiliero;
    this.enderecos = enderecos;
  }

  exibirNomeCompleto(): string {
    return `O nome completo é: ${this.nome} ${this.sobrenome}`;
  }

  recuperaEndereco(posicao: number): string {
    return this.enderecos[posicao] ?? "";
  }
}

export { Pessoa };

class Professor {
  nome: string;
  formação: string[];
  idade: number;
  sobrenome: string;

  exibirNomeCompleto(): string {
    return `O nome completo do Professor é: ${this.nome} ${this.sobrenome}`;
  }
}

export { Professor };

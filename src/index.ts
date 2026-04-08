let nome: string;
let sobrenome: string;
let nomecompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos: string[]; // Ou let enderecos: Array<string>;

nome = "Will";
sobrenome = "Smith";
idade = 43;
brasileiro = false;
nomecompleto = nome + " " + sobrenome;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto"];

let exibirNomeCompleto = function (): void {
  alert(`O nome completo é: ${nomecompleto}`);
};

let recuperaEndereco = function (posicao: number): string {
  return enderecos[posicao];
};

exibirNomeCompleto();
alert(recuperaEndereco(1));

let nome: string;
let sobrenome: string;
let nomecompleto: string;
let idade: number;
let brasileiro: boolean;
let enderecos: string[]; // Ou let enderecos: Array<string>;

nome = "Mateus";
sobrenome = "Gama";
idade = 22;
brasileiro = false;
nomecompleto = nome + " " + sobrenome;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto"];

let exibirNomeCompleto = function (): void {
  console.log(`O nome completo é: ${nomecompleto}`);
};

let mostrarIdade = function (): void {
  console.log(`A idade é: ${idade}`);
};

let recuperaEndereco = function (posicao: number): string {
  return enderecos[posicao] ?? "";
};

console.log(exibirNomeCompleto());
console.log(recuperaEndereco(0));
console.log(mostrarIdade());

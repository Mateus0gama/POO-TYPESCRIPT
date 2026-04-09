"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nome;
let sobrenome;
let nomecompleto;
let idade;
let brasileiro;
let enderecos; // Ou let enderecos: Array<string>;
nome = "Will";
sobrenome = "Smith";
idade = 43;
brasileiro = false;
nomecompleto = nome + " " + sobrenome;
enderecos = ["Rua B, Aracaju", "Rua C, Tobias Barreto"];
let exibirNomeCompleto = function () {
  console.log(`O nome completo é: ${nomecompleto}`);
};
let recuperaEndereco = function (posicao) {
  return enderecos[posicao] ?? "";
};
console.log(exibirNomeCompleto());
console.log(recuperaEndereco(0));
//# sourceMappingURL=index.js.map
